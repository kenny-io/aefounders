import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';

function App() {
  function toggleFont() {
    const root = document.documentElement;
    const currentFont = getComputedStyle(root).getPropertyValue('--font-primary').trim();
    
    if (currentFont.startsWith('Comfortaa')) {
      root.style.setProperty('--font-primary', 'var(--font-fallback)');
    } else {
      root.style.setProperty('--font-primary', '"Comfortaa", system-ui, sans-serif');
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;