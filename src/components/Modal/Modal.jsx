import ReactDOM from "react-dom";
import Panel from "../Panel/Panel";

const Modal = ({ onClose, children, actionBar }) => {
  return ReactDOM.createPortal(
    <article>
      <section
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></section>

      <section className="absolute inset-40 p-10 bg-white">
        {children}
        {actionBar}
      </section>
    </article>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
