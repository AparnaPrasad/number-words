import React from 'react';
import NumberCard from '../NumberCard/NumberCard';

function App() {
    return (
        <div data-test-id='app-component-id' className="container d-flex h-100 justify-content-center align-items-center">
            <NumberCard />
        </div>
    );
}

export default App;
