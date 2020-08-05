import React from 'react';

export default function Header({ title, children }) {
    // Component: function que returna html. Jump of the Cat no react.
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
};
