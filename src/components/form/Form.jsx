import React, { useState } from 'react';

export default function Form({
  children,
  handleSubmit,
  submitBtnText,
  initialValue = {},
}) {
  const [formData, setFormData] = useState({ ...initialValue });
  const handleFormData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit({ ...formData });
    setFormData({});
  };
  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          onChange: handleFormData,
          value: formData[child.props.name] || '',
        });
      })}
      <button
        type="submit"
        className="w-full py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out"
      >
        {submitBtnText}
      </button>
    </form>
  );
}
