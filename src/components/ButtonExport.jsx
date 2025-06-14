import React from 'react';

export default function ButtonExport({ data }) {

  const handleExport = () => {
    const undoneTodos = data.filter(todo => todo.isDone === false);
    const json = JSON.stringify(undoneTodos, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'undone-todos.json';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-black text-white px-4 py-2 rounded border "
    >
      Export Json File
    </button>
  );
}
