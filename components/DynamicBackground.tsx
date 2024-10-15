import React, { ReactNode } from 'react';

const DynamicBackground: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .dynamic-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
      <div className="dynamic-bg min-h-screen">
        {children}
      </div>
    </>
  );
};

export default DynamicBackground;