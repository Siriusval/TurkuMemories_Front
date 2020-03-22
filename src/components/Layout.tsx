/**
 * Page layout
 * Apply custom style to children pages
 * Used for text pages
 */

// --- IMPORTS ---
import React, { ReactNode } from 'react';

// --- STYLES ---
const pageStyle = {
    width: '80%',
    margin: '20px auto',
    paddingTop: '100px',
};

// --- COMPONENTS ---
const Layout: React.FC<ReactNode> = ({ children }) => {
    return (
        <div className="wrapper" style={pageStyle}>
            {/* Component to nest */}
            {children}
        </div>
    );
};

export default Layout;
