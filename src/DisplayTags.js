import React from "react";

function DisplayTags({ tags }) {
  return (
    <>
      {tags.map((tag, i) => {
        if (tags.length === i + 1) {
          return <span>{tag}</span>;
        } else {
          return <span>{tag} | </span>;
        }
      })}
    </>
  );
}

export default DisplayTags;
