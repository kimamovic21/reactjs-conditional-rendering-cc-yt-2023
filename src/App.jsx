import { useState } from "react";
import Basic from "./components/Basic";
import Intermediate from "./components/Intermediate";
import Advanced from "./components/Advanced";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { id: 1, title: "Basic", description: "This is the basic package." },
    { id: 2, title: "Intermediate", description: "This is the intermediate package." },
    { id: 3, title: "Advanced", description: "This is the advanced package." },
  ];

  return (
    <>
      {data.map((information) => (
        <div
          key={information.id}
          className="m-4 border border-black m-18 p-4 cursor-pointer"
          onClick={() => setSelectedItem(information.id)}
        >
          <p>{information.id}</p>
          <p>{information.title}</p>
          <p>{information.description}</p>
        </div>
      ))}
      
      <div className="m-4">
        <p>You have item {selectedItem} selected.</p>
        {selectedItem === 1 && <Basic />}
        {selectedItem === 2 && <Intermediate />}
        {selectedItem === 3 && <Advanced />}
      </div>
    </>
  );
};

export default App;