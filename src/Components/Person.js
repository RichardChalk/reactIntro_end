import React from "react";

export const Person = (props) => {
  return (
    <div className="person">
      <h1 className="personName">Name: {props.name}</h1>
      <h2>Surname: {props.surName}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  );
};
