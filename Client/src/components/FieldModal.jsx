import React, { useState } from "react";

const FieldModal = ({ open, onClose, onAddField }) => {
  const [fieldType, setFieldType] = useState("text");
  const [fieldTitle, setFieldTitle] = useState("");
  const [fieldPlaceholder, setFieldPlaceholder] = useState("");

  if (!open) return null;

  const handleAddField = () => {
    const newField = {
      type: fieldType,
      title: fieldTitle,
      placeholder: fieldPlaceholder,
    };
    onAddField(newField);
    setFieldTitle("");
    setFieldPlaceholder("");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-lg font-semibold mb-4">Add a New Field</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Field Type</label>
          <select
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="number">Phone Number</option>
            <option value="textarea">Textarea</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Field Title</label>
          <input
            type="text"
            value={fieldTitle}
            onChange={(e) => setFieldTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Field Placeholder</label>
          <input
            type="text"
            value={fieldPlaceholder}
            onChange={(e) => setFieldPlaceholder(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleAddField}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add Field
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldModal;
