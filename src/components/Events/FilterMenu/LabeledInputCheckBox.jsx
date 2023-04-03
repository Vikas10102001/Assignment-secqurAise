import React, { useEffect, useState } from "react";

const LabeledInput = ({ child, setFilter, parent, filter }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (parent === "Gender") {
      setChecked(filter.Gender.includes(child));
    }
    if (parent === "Location") {
      // console.log("hey", filter.Location.includes(child));
      setChecked(filter.Location.includes(child));
    }
  }, [parent, child, filter]);

  const handleFilterChange = (e) => {
    if (parent === "Gender") {
      setFilter((prevState) => {
        if (e.target.checked)
          return {
            ...prevState,
            Gender: [...prevState.Gender, e.target.value],
          };
        else {
          return {
            ...prevState,
            Gender: prevState.Gender.filter((el) => {
              return el !== e.target.value;
            }),
          };
        }
      });
    } else if (parent === "Location") {
      setFilter((prevState) => {
        if (e.target.checked)
          return {
            ...prevState,
            Location: [...prevState.Location, e.target.value],
          };
        else
          return {
            ...prevState,
            Location: prevState.Location.filter((el) => {
              return el !== e.target.value;
            }),
          };
      });
    }
    // console.log(checked);
  };
  return (
    <>
      <label htmlFor={child}>{child}</label>
      <input
        type="checkbox"
        id={child}
        name={child}
        value={child}
        onChange={handleFilterChange}
        checked={checked}
      />
    </>
  );
};
export default function LabeledInputCheckBox({
  parent,
  children,
  setFilter,
  filter,
}) {
  return (
    <>
      <label style={{ fontWeight: "600" }}>{parent} :</label>
      {children.map((child) => {
        return (
          <LabeledInput
            child={child}
            key={child}
            setFilter={setFilter}
            parent={parent}
            filter={filter}
          />
        );
      })}
    </>
  );
}
