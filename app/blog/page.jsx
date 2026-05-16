import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/blog/PostCard';
import { getAllPosts } from '../../lib/blog';
import { TOKENS } from '../../lib/tokens';

export const metadata = {
  title: 'Blog | Business & ERP Insights for Maldives | Metamorphosis MV',
  description: 'Practical guides on Odoo ERP, MIRA tax filing, accounting, and business growth for Maldivian companies, resorts, and expats.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/blog' },
  openGraph: {
    title: 'Blog | Metamorphosis MV',
    description: 'Practical guides on Odoo ERP, MIRA tax filing, accounting, and business growth for Maldivian companies.',
    url: 'https://mv.metamorphosis.com.bd/blog',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <section className="rb-blog-hero">
        <div className="rb-container" style={{ maxWidth: 860 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// Insights</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.025em', color: TOKENS.navy, marginBottom: 16, lineHeight: 1.05 }}>
            Business Insights for Maldives
          </h1>
          <p style={{ fontSize: 17, color: TOKENS.body, fontWeight: 300, maxWidth: 600 }}>
            Practical guides on ERP, accounting, MIRA compliance, and growing your business in the Maldives.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0 96px', background: '#fff' }}>
        <div className="rb-container" style={{ maxWidth: 1040 }}>
          {posts.length === 0 ? (
            <p style={{ color: TOKENS.body, textAlign: 'center', padding: '80px 0' }}>Posts coming soon.</p>
          ) : (
            <div className="rb-post-grid">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
