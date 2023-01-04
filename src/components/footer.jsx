import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-primary2 to-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col py-7 lg:flex-row space-y-6 lg:space-y-3 items-center justify-around md:space-y-1'>
          <div>
            <h1 className='text-[32px]'>Eva's Cleaning</h1>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2023 Fred Kamm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
