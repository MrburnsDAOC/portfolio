import "./App.css";
import { useState } from "react";

// ---- Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
      {/* Home */}
      {/* Projects */}
      {/* Experience */}
      <Footer />
    </div>
  );
}
