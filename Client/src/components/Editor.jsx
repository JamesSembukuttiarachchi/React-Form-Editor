import React from "react";
import { FaTrash } from "react-icons/fa6";

const Editor = ({
  formData,
  onFormChange,
  onImageUpload,
  setModalOpen,
  deleteField,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Form Editor</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onFormChange("title", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => onFormChange("description", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        />
      </div>

      {/* Button Text Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Button Text</label>
        <input
          type="text"
          value={formData.buttonText}
          onChange={(e) => onFormChange("buttonText", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onImageUpload(e.target.files[0])}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Added Fields Display */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Fields</h3>
        {formData.fields.length > 0 ? (
          formData.fields.map((field, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p>
                {field.title} ({field.type})
              </p>
              <button
                onClick={() => deleteField(index)}
                className="px-2 py-2 bg-white text-red-500 text-lg rounded"
              >
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No fields added yet.</p>
        )}
      </div>

      {/* Add Field Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
      >
        Add Field
      </button>
    </div>
  );
};

export default Editor;
