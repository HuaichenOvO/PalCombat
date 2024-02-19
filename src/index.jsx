import './index.css';
import ReactDOM from 'react-dom/client';
import React, { Component } from 'react';
import IndexPage from "./pages/IndexPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShopPage from './pages/ShopPage.jsx';
import BattlePage from './pages/BattlePage.jsx';
import ChildComponent from './test/ChildComponent.jsx';
import ParentComponent from './test/ParentComponent.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/battle",
    element: <BattlePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/parent",
    element: <ParentComponent />,
  },
  // for testing
  {
    path: "/child",
    element: <ChildComponent />,
  },
  // for testing
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
]);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;