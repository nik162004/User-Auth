import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Show full navbar only when logged in AND on /dashboard
  const showFullNavbar = token && location.pathname === '/dashboard';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#282c34',
      color: 'white',
      alignItems: 'center'
    }}>
      {/* Brand always visible */}
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        BrandName
      </div>

      {/* Conditional menu only for logged in Dashboard */}
      {showFullNavbar ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Navbar options */}
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
          <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>

          {/* Dropdown menu */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Menu ▼
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  backgroundColor: '#444',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                  borderRadius: '4px',
                  marginTop: '5px',
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={handleLogout}
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
                {/* Add more dropdown items if needed */}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;