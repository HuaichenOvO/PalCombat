
// PageA.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PageA() {
    const { sharedData } = useParams();

    return (
        <div>
            <h2>Page A</h2>
            <p>Shared Data: {sharedData}</p>
        </div>
    );
}

export default PageA;
