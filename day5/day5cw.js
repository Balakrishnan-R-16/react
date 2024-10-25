// List.js
import React from 'react';

const List = () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
