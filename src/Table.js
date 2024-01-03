// src/Table.js

import React from 'react';

const Table = ({ data, selectedId, setSelectedId, editable, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Telephone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={selectedId === item.id ? 'selected' : ''}
          >
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.dob}</td>
            <td>{item.tel}</td>
          </tr>
        ))}
        {editable && (
          <tr>
            <td>{data[selectedId - 1].id}</td>
            <td>
              <input
                type="text"
                value={data[selectedId - 1].name}
                onChange={(e) => onEdit(selectedId, { ...data[selectedId - 1], name: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                value={data[selectedId - 1].dob}
                onChange={(e) => onEdit(selectedId, { ...data[selectedId - 1], dob: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                value={data[selectedId - 1].tel}
                onChange={(e) => onEdit(selectedId, { ...data[selectedId - 1], tel: e.target.value })}
              />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
