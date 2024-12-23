import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import LanguageProvider from './components/language/LanguageProvider';
import './i18n';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;