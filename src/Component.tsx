import React, { useEffect } from 'react';

const unnecessaryDep1 = '1'
const unnecessaryDep2 = '2'
const unnecessaryDep3 = '3'

const MyComponent: React.JSX.Element = () => {
    
    useEffect(() => {
        console.log('Component mounted');
    }, [unnecessaryDep1, unnecessaryDep2, unnecessaryDep3]);

    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default MyComponent;