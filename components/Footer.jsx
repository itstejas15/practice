import React from 'react';

const Footer = () => {
  return (
    <div id='footer' className='w-full lg:h-auto overflow-auto bg-gray-300 dark:bg-gray-900 dark:text-gray-300'>
      <div
        style={{
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          gap: '6rem',
          padding: '2rem'
        }}
      >
        <ol>
          <li>About Us</li>
          <li>Contact Us</li>
        </ol>
        <ol>
          <li>Services</li>
          <li>Terms and Conditions</li>
        </ol>
      </div>
    </div>
  )
}

export default Footer