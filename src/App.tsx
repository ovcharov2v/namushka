import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.scss';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="Главная страница"/>} />
      <Route path="*" element={<NotFoundPage title="404 Страница не существует"/>} />
    </Routes>
  );
}

export default App;
