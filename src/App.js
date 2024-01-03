// src/App.js

import React, { useState } from "react";
import "./App.css";
import Table from "./Table";
import ButtonPanel from "./ButtonPanel";

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Pavan", dob: "08/08/2001", tel: "987654321" },
    { id: 2, name: "Kumar", dob: "01/05/2001", tel: "654321987" },
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [editable, setEditable] = useState(false);

  const handleAdd = () => {
    setEditable(true);
    const newId = data.length + 1;
    setData([
      ...data,
      { id: newId, name: "New Person", dob: "dd/mm/yyyy", tel: "xxxxxxxxxx" },
    ]);
    setSelectedId(newId);
  };

  const handleEdit = (id, editedData) => {
    const updatedData = [...data];
    updatedData[id - 1] = editedData;
    setData(updatedData);
  };

  const handleSave = () => {
    setEditable(false);
  };

  const handleDelete = () => {
    if (selectedId !== null) {
      const updatedData = data.filter((item) => item.id !== selectedId);
      setData(updatedData);
      setSelectedId(null);
      setEditable(false);
    }
  };

  return (
    <div className="App">
      <Table
        data={data}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        editable={editable}
        onEdit={handleEdit}
      />
      <ButtonPanel
        onAdd={handleAdd}
        onEdit={() => setEditable(true)}
        onDelete={handleDelete}
        onSave={handleSave}
        mode={editable ? "edit" : "add"}
      />
    </div>
  );
};

export default App;
