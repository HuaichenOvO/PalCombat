// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

function TestPage() {
    // return (
    //     <Router>
    //         <div>
    //             <nav>
    //                 <ul>
    //                     <li>
    //                         <Link to="/pageA">Page A</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/pageB">Page B</Link>
    //                     </li>
    //                 </ul>
    //             </nav>

    //             <Route path="/pageA/:sharedData" component={PageA} />
    //             <Route path="/pageB/:sharedData" component={PageB} />
    //         </div>
    //     </Router>
    // );
}

export default TestPage;


