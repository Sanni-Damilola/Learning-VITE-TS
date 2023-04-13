import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card title="Sign Up" />
      <br />
    </div>
  );
}

export default App;
