import React from 'react';
import addressRoutes from 'data/addressRoutes';

import { Link } from 'react-router-dom';

const Address = () => (

      <address>
        <ul>
         {addressRoutes.map((link) => (
             <li key={link.label}>
               <Link to='#' onClick={(e) => {
                  window.location.href = link.href;
                  e.preventDefault();
                }}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
             </li>
          ))}
        </ul>
      </address>
    
)


export default Address;
