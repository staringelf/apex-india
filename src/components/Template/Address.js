import React from 'react';
import addressRoutes from 'data/addressRoutes';

import { Link } from 'react-router-dom';

const Address = () => (

      <address>
        <ul className="flex gap-8 px-2 py-3 align-center">
         {addressRoutes.map((link) => (
             <li key={link.label}>
               <Link className="flex gap-2 items-center text-sm" to='#' onClick={(e) => {
                  window.location.href = link.href;
                  e.preventDefault();
                }}
              >
                <span className="fill-secondary">{link.icon}</span>
                <span className="not-italic" >{link.label}</span>
              </Link>
             </li>
          ))}
        </ul>
      </address>
    
)


export default Address;
