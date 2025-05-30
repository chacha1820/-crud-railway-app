import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="home-btn">
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;