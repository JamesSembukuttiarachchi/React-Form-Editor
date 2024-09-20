import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import FieldModal from "./components/FieldModal";

const App = () => {
  const [formData, setFormData] = useState({
    title: "Welcome to the Form",
    description: "This is the form description.",
    buttonText: "Submit",
    imageUrl: null,
    fields: [],
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, imageUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const addField = (newField) => {
    setFormData({
      ...formData,
      fields: [...formData.fields, newField],
    });
    setModalOpen(false);
  };

  const deleteField = (index) => {
    const updatedFields = formData.fields.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      fields: updatedFields,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100 p-4">
      <div className="w-1/3 p-4">
        <Editor
          formData={formData}
          onFormChange={handleFormChange}
          onImageUpload={handleImageUpload}
          setModalOpen={setModalOpen}
          deleteField={deleteField}
        />
        <FieldModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddField={addField}
        />
      </div>
      <div className="w-2/3 p-4">
        <Preview formData={formData} />
      </div>
    </div>
  );
};

export default App;
