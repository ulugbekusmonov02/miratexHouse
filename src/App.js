import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contact";
import EarnPage from "./pages/earn";
import HomePage from "./pages/home";
import User from "./pages/user";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
