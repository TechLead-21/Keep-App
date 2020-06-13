import React from "react";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title Note</h1>
        <br />
        <p>This is content</p>
        <button className="btn">
          <DeleteIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
