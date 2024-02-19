import React from 'react';

function ChildComponent(props) {
    // Access the increment function from props
    const { increment } = props;

    return (
        <div>
            {/* Call the increment function when the button is clicked */}
            <button onClick={increment}>Increment Count</button>
        </div>
    );
}

export default ChildComponent;
