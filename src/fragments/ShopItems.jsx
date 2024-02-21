import React, { Component } from 'react'
import PropTypes from "prop-types";
import StaticItems from '../modes/StaticItems.js'
import StoreItem from '../modes/StoreItem.js'


export default class ShopItems extends Component {
    constructor(props) {
        super(props);

        let tmpItems = [];
        tmpItems.push(new StoreItem(StaticItems.getItemByID(1), 8));
        tmpItems.push(new StoreItem(StaticItems.getItemByID(2), 5));
        tmpItems.push(new StoreItem(StaticItems.getItemByID(3), 3));
        tmpItems.push(new StoreItem(StaticItems.getItemByID(4), 10));
        tmpItems.push(new StoreItem(StaticItems.getItemByID(5), 2));
        tmpItems.push(new StoreItem(StaticItems.getItemByID(6), 10));

        // this.itemArray = tmpItems;

        this.state = {
            itemArray: tmpItems,
        }
    }

    // listener = (e) => {
    //     const tPrice = e.target.parentNode.querySelector('p').textContent;
    //     // const textContent = e.target.textContent;
    //     const tKey = e.target.getAttribute('buy-id');
    //     console.log(`Price is ${tPrice}, content is ${tKey}`);
    // };

    render() {
        return (
            <>
                <h2>The greatest store in PalWorld!</h2>
                <div className="col-md-8">
                    <div className='row'>
                        {this.state.itemArray.map((it, index) => (
                            <div className="card" style={{ padding: '7px', width: "10rem" }} key={it.item.id}>
                                <div className="card-body">
                                    <img src={it.item.image} className="card-img-top" alt="..." width={"8rem"} />
                                    <h6 className="card-text">{it.item.name}</h6>
                                    {it.item.description}
                                    <p className="card-text">
                                        Price: {it.price}
                                    </p>
                                    <button onClick={this.props.buyBehavior} buy-id={it.item.id}>Purchase</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

ShopItems.propTypes = {
    buyBehavior: PropTypes.func.isRequired,
}
