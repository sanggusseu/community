export default function Dimmed({ isActive, handleOnClick }) {
  return (
    <div
      className={`fixed inset-0 bg-dark bg-opacity-50 z-40 ${isActive ? 'block' : 'hidden'}`}
      onClick={handleOnClick}
    ></div>
  );
}
