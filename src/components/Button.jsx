export default function Button({ children, handleOnClick }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center bg-primary min-h-10 rounded-md px-3 py-2 text-light hover:bg-opacity-50 transition-all duration-200"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
