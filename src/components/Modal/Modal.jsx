import ReactDOM from "react-dom";
import { Panel } from "../index";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <article>
      <section
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></section>
      <Panel className="">
        <section className="absolute inset-40 p-10 bg-white">
          <p>
            The usage of HTML tags on the left side is incorrect because it
            indicates that the page contains four different topics, rather than
            one topic and three subtopics, as shown on the right. On the
            right-hand side, we have a properly constructed page using semantic
            HTML. Although there are four separate sections in the visual layout
            of the page, the HTML tags are nested according to the semantics of
            the content.
          </p>
        </section>
      </Panel>
    </article>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
