export default function Section({ id, title, children }) {
  return (
    <div id={id} className="section">
      <h3>{title}</h3>
      {children}
    </div>
  );
}