export default function TextArea({ id, label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        className="w-full p-2 rounded dark:bg-gray-800 dark:text-white bg-white text-gray-900 border dark:border-gray-700 border-gray-300 h-32"
      ></textarea>
    </div>
  );
}
