import React, { Component } from 'react'

import Item from "../modes/Item.js";

import UserProfile from "../modes/UserProfile.js";
import ChildComponent from './ChildComponent'; // Assuming ChildComponent is in a separate file

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        tmpProfile = new UserProfile();

        let item1 = new Item(1, '_item/LoreStoreAegisShield.webp', "Lore's Shield", "Add HP by 50");
        let item2 = new Item(2, '_item/Sword_icon.webp', "Kiri's Sword", "Add ATK by 5");
        let item3 = new Item(3, '_item/1231.jpg', "Laaarge Chicken Leg", "Recover full HP");
        let item4 = new Item(4, '_item/Rocket_icon.webp', "Sareek's Death Missile", "Add ATK by 8");
        let item5 = new Item(5, '_item/images.jpg', "Mama's Fired Egg", "Recover HP by 70");
        let item6 = new Item(6, '_item/Schematic_icon.webp', "The Future Magic Book", "Reduce MP by 1");
        tmpProfile.items.push(item1);
        tmpProfile.items.push(item2);
        tmpProfile.items.push(item3);
        tmpProfile.items.push(item4);
        tmpProfile.items.push(item5);
        tmpProfile.items.push(item6);

        this.state = {
            profile: tmpProfile,

        };

        // console.log("Constructor: ", this.state.profile.name);
    }

    // Function to increment the count
    incrementCount() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
        // this.setState({ count: count + 1 });
    };

    render() {
        return (
            <div>
                123
                <p>Coins: {this.state.profile.coins}</p>
                {/* Pass the incrementCount function as a prop to the ChildComponent */}
                <ChildComponent increment={this.incrementCount} />
            </div>
        );
    }
}

export default ParentComponent;
