// src/ButtonPanel.js

import React from 'react';

const ButtonPanel = ({ onAdd, onEdit, onDelete, onSave, mode }) => {
  return (
    <div>
      {mode === 'add' ? (
        <button onClick={onAdd}>Add</button>
      ) : (
        <button onClick={onSave}>Save</button>
      )}
      <button onClick={onEdit} disabled={mode === 'edit'}>
        Edit
      </button>
      <button onClick={onDelete} disabled={mode === 'edit'}>
        Delete
      </button>
    </div>
  );
};

export default ButtonPanel;
