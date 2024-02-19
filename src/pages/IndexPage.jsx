import "./App.css";
import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate.jsx";
import UserItems from '../fragments/UserItems.jsx'
import UserPals from "../fragments/UserPals.jsx";
// import UserProfile from "../modes/UserProfile.js";
import Item from "../modes/Item.js";


class IndexPage extends Component {
  constructor(props) {
    super(props);

    // let tmpProfile = new UserProfile();
    this.state = {
      userName: 'Player',
      coins: 10,
      items: [],
      Pals: [],
    };

    // console.log("Constructor: ", this.state.profile.name);
  }

  componentDidMount() {
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

    this.setState({ items: tmpItems })
    console.log(tmpItems);
    // this.items = tmpItems;
    // this.Pals = [];

  }

  addCoin = () => {
    this.setState({ coins: this.state.coins + 1 });
  }


  render() {
    return (
      <div className="App">
        <BaseTemplate >
          <h2 style={{ textAlign: 'left' }}>Player: {this.state.userName} | Coin: {this.state.coins}</h2>

          <hr />

          <div className="container">
            <div className='row'>
              {/* onClickAddCoin={this.state.profile.addCoin} */}
              <UserPals Pals={this.state.Pals} />
              <UserItems items={this.state.items} />
            </div>
          </div>
          <button onClick={this.addCoin}>Add Coin</button>

        </BaseTemplate>
      </div>
    );
  }
}

export default IndexPage;
