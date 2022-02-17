import { useState } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onCancel = {closeModal} />}
    </div>
  );
}

export default Todo;
