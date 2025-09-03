import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Properties from '@/pages/Properties';
import PropertyDetailPage from '@/pages/PropertyDetailPage';
import Offices from '@/pages/Offices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
        <Route path="/offices" element={<Offices />} />
      </Routes>
    </Router>
  );
}

export default App;