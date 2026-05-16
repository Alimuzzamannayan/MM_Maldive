import { notFound } from 'next/navigation';
import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import PostLayout from '../../../components/blog/PostLayout';
import { getAllPosts, getPost } from '../../../lib/blog';
import { blogPostSchema, breadcrumbSchema, jsonLd } from '../../../lib/schema';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Metamorphosis MV`,
    description: post.excerpt,
    alternates: { canonical: `https://mv.metamorphosis.com.bd/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mv.metamorphosis.com.bd/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const postUrl = `https://mv.metamorphosis.com.bd/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(blogPostSchema({
            title: post.title,
            description: post.excerpt,
            url: postUrl,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` },
          ])),
        }}
      />
      <Nav />
      <PostLayout {...post} />
      <Footer />
    </>
  );
}
