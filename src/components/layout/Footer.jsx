import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4">
      &copy;{new Date().getFullYear()}{' '}
      <a href="https://maria-mendonca.vercel.app/" target="_self">
        Maria Mendonca
      </a>
    </footer>
  );
}

export default Footer;
