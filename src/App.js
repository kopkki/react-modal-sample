import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <h1>Click the button to open the modal</h1>
      <button className="openModalBtn" onClick={() => setIsOpen(true)}>
        Open
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
