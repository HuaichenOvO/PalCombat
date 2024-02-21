import './index.css';
import ReactDOM from 'react-dom/client';
import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShopPage from './pages/ShopPage.jsx';
import BattlePage from './pages/BattlePage.jsx';

import UserItem from "./modes/UserItem.js";
import Pal from "./modes/Pal.js";
import StaticItems from './modes/StaticItems.js';


class App extends Component {
  constructor() {
    super()

    let tmpItems = [];

    StaticItems.Items.map(
      (sItem) => {
        tmpItems.push(new UserItem(sItem, 0));
      }
    );

    tmpItems[0].addNumber(2);
    tmpItems[1].addNumber(1);
    tmpItems[2].addNumber(5);
    tmpItems[4].addNumber(6);

    // tmpItems.map(
    //   (it) => {
    //     // console.log(it.item.id);
    //     console.log(tmpItems.length);
    //   }
    // );

    let tmpPals = [];
    let Pal1 = new Pal(1, '_pal/9w0g9yubrlic1.webp', "Fire Cat - Abby", "recover HP by 0.2*HP",
      140, 7, 12);
    let Pal2 = new Pal(2, '_pal/a4u7hzubrlic1.webp', "Balloon Sheep - Krute",
      `Skill: conduct a critical hit that gives damage of 4*ATK.
          Each time Krute release the skill, increase the
          skill's damage by 1*ATK`,
      70, 3, 1
    );
    tmpPals.push(Pal1);
    tmpPals.push(Pal2);

    this.state = {
      userName: 'Player',
      coins: 10,
      items: tmpItems,
      Pals: tmpPals,
    }

  }

  addCoin = () => {
    console.log("addCoin is called!");
    this.setState({ coins: this.state.coins + 10 });
  }

  buyButtonListener = (e) => {
    const tPriceText = e.target.parentNode.querySelector('p').textContent;
    const tPrice = parseInt(tPriceText.replace(/^[^\d]+/, ''));
    const tKey = e.target.getAttribute('buy-id');

    if (this.state.coins >= tPrice) {
      let tmpItems = this.state.items;
      tmpItems[tKey - 1].addNumber(1);

      console.log(`Price is ${tPrice}, coins is ${0 + this.state.coins}, rest of coins: ${this.state.coins - tPrice}`);
      this.setState({ items: tmpItems, coins: (this.state.coins - tPrice) });
    }
    else {
      window.alert("You do not have enough coins!");
    }
  };

  initRouter = () => {
    let value = {
      userName: this.state.userName,
      coins: this.state.coins,
      items: this.state.items,
      Pals: this.state.Pals
    };

    // console.log("initRouter | ", value.coins);

    const router = createBrowserRouter([
      {
        path: "/battle",
        element: <BattlePage value={value} onClickBehavior={this.addCoin} />,
      },
      {
        path: "/shop",
        element: <ShopPage value={value} buyBehavior={this.buyButtonListener} />,
      },
      {
        path: "/",
        element: <IndexPage value={value} />,
        errorElement: <ErrorPage />,
      },
    ]);
    return router;
  }

  render() {
    return (
      <div className="App">
        <RouterProvider router={this.initRouter()} />
        {/* <TestPage /> */}
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