import React from "react";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title NOte</h1>
        <br />
        <p>This is content</p>
        <DeleteIcon className="deleteIcon" />
      </div>
    </>
  );
};

export default Note;
