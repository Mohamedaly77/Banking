import React from 'react';

function Button({ styles }) {
  return (
    <div>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-lg`}
      >
        Get Started
      </button>
    </div>
  );
}

export default Button;
