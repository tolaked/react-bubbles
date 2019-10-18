import React, { useState } from "react";
import axios from "axios";
import WithAuth from "../axios/index";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  // console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [addNew, setAddNew] = useState(false);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
    setAddNew(false);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    const request = addNew ? axiosWithAuth().post : axiosWithAuth().put;
    const url = addNew
      ? "http://localhost:5000/api/colors"
      : `http://localhost:5000/api/colors/${colorToEdit.id}`;
    request(url, colorToEdit)
      .then(res => {
        if (addNew) {
          updateColors(res.data);
          setAddNew(false);
        } else if (editing) {
          const newColor = res.data;
          const index = colors.findIndex(el => el.id === newColor.id);
          const copyOfColors = [...colors];
          copyOfColors[index] = newColor;
          updateColors(copyOfColors);
        }

        setAddNew(false);
        setEditing(false);
        setColorToEdit(initialColor);
      })
      .catch(err => {
        alert(err);
      });
  };

  const deleteColor = color => {
    // make a delete request to delete this color
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
