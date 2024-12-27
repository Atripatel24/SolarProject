import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Dashboard = ({ isAuth }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate('/signup');
  }, [isAuth]);

  return (
    
      <div className="dashboard">
 

        <div className="button-container">
          {/* Add User Card */}
          <Link
            to="wcr"
            style={{
              textDecoration: 'none',
              color: 'inherit', // Inherit color to keep text styling
            }}
          >
            <div
              style={{
                display: 'flex',
                backgroundColor: '#0295B6',
                padding: '10px',
                borderRadius: '10px',
                cursor: 'pointer', // Show pointer to indicate clickability
              }}
            >
              <div
                style={{
                  color: '#fff',
                  margin: '10px',
                }}
              >
                <i
                  className="fa-solid fa-user fa-4x"
                  style={{ margin: '5px' }}
                ></i>
              </div>
              <div
                style={{
                  
                  color: '#fff',
                  margin: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'serif',
                  fontSize: '30px',
                  width:'200px'
                }}
              >
                +Add User
              </div>
            </div>
          </Link>

          {/* View User Card */}
          <Link
            to="details"
            style={{
              textDecoration: 'none',
              color: 'inherit', // Inherit color to keep text styling
            }}
          >
            <div
              style={{
           
                display: 'flex',
                backgroundColor: '#0295B6',
                padding: '10px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  color: '#fff',
                  margin: '10px',
                }}
              >
                <i
                  className="fa-solid fa-users fa-4x"
                  style={{ margin: '5px' }}
                ></i>
              </div>
              <div
                style={{
                  width:'200px',
                  color: '#fff',
                  // margin: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'serif',
                  fontSize: '30px',
                }}
              >
                View User
              </div>
            </div>
          </Link>
        </div>
      </div>
 
  );
};

export default Dashboard
