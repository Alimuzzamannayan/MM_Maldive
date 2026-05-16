import { TOKENS } from '../../lib/tokens';

export default function PostLayout({ title, excerpt, date, category, contentHtml }) {
  const formatted = new Date(date).toLocaleDateString('en-MV', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <article className="rb-post-layout">
      <div className="rb-post-hero">
        <div className="rb-container" style={{ maxWidth: 800 }}>
          <div className="rb-post-cat">{category}</div>
          <h1 className="rb-post-title">{title}</h1>
          <p className="rb-post-excerpt">{excerpt}</p>
          <div className="rb-post-meta">{formatted}</div>
        </div>
      </div>
      <div className="rb-post-body rb-container" style={{ maxWidth: 800 }}>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      <div className="rb-post-cta">
        <div className="rb-container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <p style={{ fontWeight: 700, fontSize: 22, color: TOKENS.navy, marginBottom: 12 }}>Need help with your business in Maldives?</p>
          <a href="/contact" className="rb-btn-primary">Talk to Our Team →</a>
        </div>
      </div>
    </article>
  );
}
