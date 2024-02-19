// PageB.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PageB() {
    const { sharedData } = useParams();

    return (
        <div>
            <h2>Page B</h2>
            <p>Shared Data: {sharedData}</p>
        </div>
    );
}

export default PageB;