import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

interface DynamicBackgroundProps {
  children: ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children }) => {
  return (
    <div className="dynamic-background">
      <style>{`
        .dynamic-background {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        }
      `}</style>
      {children}
    </div>
  );
};

export default DynamicBackground;
