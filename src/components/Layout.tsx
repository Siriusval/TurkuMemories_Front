/**
 * Page layout
 * Apply custom style to children
 */
import React, { ReactNode } from 'react';

/**
 * Style css
 */
const pageStyle = {
    width: '80%',
    margin: '20px auto',
    paddingTop: '100px',
};

export const Layout: React.FC<ReactNode> = ({ children }) => {
    return (
        <div className="wrapper" style={pageStyle}>
            {/* Component to nest */}
            {children}
        </div>
    );
};
