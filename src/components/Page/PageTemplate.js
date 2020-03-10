/**
 * Page template
 * Apply custom style to children
 */
import React from 'react';

/**
 * Style css
 */
const pageStyle = { width: '80%', margin: '20px auto' };

export const PageTemplate = props => {
    return (
        <div className="wrapper" style={pageStyle}>
            {/* Component to nest */}
            {props.children}
        </div>
    );
};
