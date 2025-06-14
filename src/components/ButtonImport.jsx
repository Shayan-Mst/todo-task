import React, { useRef } from 'react';

export default function ButtonImport({ setData }) {
  const fileInputRef = useRef(null);

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedTodos = JSON.parse(event.target.result);
        if (!Array.isArray(importedTodos)) {
          alert('Invalid JSON format: Expected an array');
          return;
        }
        const undoneImported = importedTodos.filter(todo => todo.isDone === false);

        setData(prevData => {
          const existingIds = new Set(prevData.map(todo => todo.id));
          const filteredNew = undoneImported.filter(todo => !existingIds.has(todo.id));
          return [...prevData, ...filteredNew];
        });

       

      } catch (error) {
        alert('Error parsing JSON file');
      }
    };

    reader.readAsText(file);
    e.target.value = null; // reset input so same file can be uploaded again
  };


  

  return (
    <>
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Import JSON File
      </button>
      <input
        type="file"
        accept=".json,application/json"
        ref={fileInputRef}
        onChange={handleImport}
        style={{ display: 'none' }}
      />
    </>
  );
}
