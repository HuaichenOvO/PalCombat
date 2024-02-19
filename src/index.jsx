import './index.css';
import ReactDOM from 'react-dom/client';
import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShopPage from './pages/ShopPage.jsx';
import BattlePage from './pages/BattlePage.jsx';

import Item from "./modes/Item.js";
import Pal from "./modes/Pal.js";


class App extends Component {
  constructor() {
    super()

    let tmpItems = [];
    let item1 = new Item(1, '_item/LoreStoreAegisShield.webp', "Lore's Shield", "Add HP by 50");
    let item2 = new Item(2, '_item/Sword_icon.webp', "Kiri's Sword", "Add ATK by 5");
    let item3 = new Item(3, '_item/1231.jpg', "Laaarge Chicken Leg", "Recover full HP");
    let item4 = new Item(4, '_item/Rocket_icon.webp', "Sareek's Death Missile", "Add ATK by 8");
    let item5 = new Item(5, '_item/images.jpg', "Mama's Fired Egg", "Recover HP by 70");
    let item6 = new Item(6, '_item/Schematic_icon.webp', "The Future Magic Book", "Reduce MP by 1");
    tmpItems.push(item1);
    tmpItems.push(item2);
    tmpItems.push(item3);
    tmpItems.push(item4);
    tmpItems.push(item5);
    tmpItems.push(item6);

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
    this.setState({ coins: this.state.coins + 1 });
  }

  initRouter = () => {
    let value = {
      userName: this.state.userName,
      coins: this.state.coins,
      items: this.state.items,
      Pals: this.state.Pals
    };

    console.log("initRouter | ", value.coins);

    const router = createBrowserRouter([
      {
        path: "/battle",
        element: <BattlePage value={value} onClickBehavior={this.addCoin} />,
      },
      {
        path: "/shop",
        element: <ShopPage value={value} onClickBehavior={this.addCoin} />,
      },
      {
        path: "/",
        element: <IndexPage value={value} onClickBehavior={this.addCoin} />,
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