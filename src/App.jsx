import { useState } from "react";
import Appbar from "./components/Appbar";
import RegisterandLogin from "./components/authComponent/RegisterandLogin";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Appbar login={login} setLogin={setLogin} />
      <RegisterandLogin login={login} />
    </>
  );
}

export default App;
