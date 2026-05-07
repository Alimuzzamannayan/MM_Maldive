export default function Aurora() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
      <div className="rb-blob rb-blob-1" />
      <div className="rb-blob rb-blob-2" />
      <div className="rb-blob rb-blob-3" />
    </div>
  );
}
