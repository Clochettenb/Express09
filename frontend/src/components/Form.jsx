import axios from "axios";
import React, { useRef } from "react";

function Form() {
  const inputRef = useRef(null);
  function hSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post("http://your.backend/api/avatar", formData);
  }
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="monfichier" ref={inputRef} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;
