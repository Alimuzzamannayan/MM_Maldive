import { TOKENS } from '../../lib/tokens';

export default function PostCard({ slug, title, excerpt, date, category }) {
  const formatted = new Date(date).toLocaleDateString('en-MV', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <a href={`/blog/${slug}`} className="rb-post-card">
      <div className="rb-post-card-cat">{category}</div>
      <h2 className="rb-post-card-title">{title}</h2>
      <p className="rb-post-card-excerpt">{excerpt}</p>
      <div className="rb-post-card-meta">{formatted}</div>
    </a>
  );
}
