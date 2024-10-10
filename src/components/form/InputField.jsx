export default function InputField({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        autoComplete="off"
        onChange={onChange}
        className="w-full p-2 rounded dark:bg-gray-800 dark:text-white bg-white text-gray-900 border dark:border-gray-700 border-gray-300"
        required
      />
    </div>
  );
}
