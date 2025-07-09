import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Conteudos from "./pages/Conteudos";
import Listas from "./pages/Listas";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <header className="bg-green-600 dark:bg-green-800 shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <nav className="space-x-4 text-white font-semibold">
              <Link to="/" className="hover:underline">Conteúdos</Link>
              <Link to="/listas" className="hover:underline">Listas</Link>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white dark:bg-gray-700 text-green-700 dark:text-white px-3 py-1 rounded-xl text-sm"
            >
              {darkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Conteudos />} />
            <Route path="/listas" element={<Listas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
