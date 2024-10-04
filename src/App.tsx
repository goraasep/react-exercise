import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import Messages from "./pages/Messages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
      </Routes>
    </>
  );
}

export default App;
