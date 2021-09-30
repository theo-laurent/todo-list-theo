import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// components
import CreateMessage from "./components/CreateMessage";
import GetMessages from "./components/GetMessages";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <h1 className="text-center mt-2 mb-2">Todo-List</h1>
      <CreateMessage refresh={refresh} setRefresh={setRefresh}  />
      <GetMessages refresh={refresh} />
    </div>
  );
}

export default App;
