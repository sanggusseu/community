export default function Button({ children, handleOnClick, type, addStyle }) {
  return (
    <button
      type={type || 'button'}
      className={`flex items-center justify-center bg-primary min-h-10 rounded-md px-3 py-2 text-light hover:bg-opacity-50 transition-all duration-200 ${addStyle}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
