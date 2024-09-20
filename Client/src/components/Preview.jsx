import React, { useState } from "react";

const Preview = ({ formData }) => {
  const [fieldValues, setFieldValues] = useState(
    formData.fields.reduce((acc, field) => {
      acc[field.title] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (title, value, type) => {
    setFieldValues((prev) => ({ ...prev, [title]: value }));

    // Real-time validation
    if (type === "email") {
      const isValid = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        [title]: isValid ? "" : "Invalid email address.",
      }));
    } else if (type === "number") {
      const isValid = validatePhoneNumber(value);
      setErrors((prev) => ({
        ...prev,
        [title]: isValid ? "" : "Invalid phone number.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [title]: "" }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {formData.title}
      </h2>
      <p className="text-gray-600 mb-4">{formData.description}</p>

      {/* Image Preview */}
      {formData.imageUrl && (
        <img
          src={formData.imageUrl}
          alt="Uploaded Preview"
          className="mb-4 w-full h-48 object-cover rounded-lg"
        />
      )}

      {/* Dynamic Fields Preview */}
      {formData.fields.map((field, index) => (
        <div key={index} className="mt-4">
          <label className="block text-gray-700 mb-1">{field.title}</label>
          {field.type === "text" && (
            <input
              type="text"
              placeholder={field.placeholder}
              value={fieldValues[field.title] || ""}
              onChange={(e) =>
                handleChange(field.title, e.target.value, field.type)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
            />
          )}
          {field.type === "email" && (
            <>
              <input
                type="email"
                placeholder={field.placeholder}
                value={fieldValues[field.title] || ""}
                onChange={(e) =>
                  handleChange(field.title, e.target.value, field.type)
                }
                className={`w-full px-3 py-2 border rounded-lg mb-2 ${
                  errors[field.title] ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[field.title] && (
                <p className="text-red-500 text-sm">{errors[field.title]}</p>
              )}
            </>
          )}
          {field.type === "number" && (
            <>
              <input
                type="tel"
                placeholder={field.placeholder}
                value={fieldValues[field.title] || ""}
                onChange={(e) =>
                  handleChange(field.title, e.target.value, field.type)
                }
                className={`w-full px-3 py-2 border rounded-lg mb-2 ${
                  errors[field.title] ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[field.title] && (
                <p className="text-red-500 text-sm">{errors[field.title]}</p>
              )}
            </>
          )}
        </div>
      ))}

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
        {formData.buttonText}
      </button>
    </div>
  );
};

export default Preview;
