import React, { Component } from 'react'
import Item from '../modes/Item.js'


export default class UserItems extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="col-md-8">
                    <h2>Items</h2>
                    <div className='row'>
                        {this.state.items.map((it, index) => (
                            <div className="card" style={{ padding: '7px', width: "10rem" }} key={index}>
                                <div className="card-body">
                                    <img src={it.image} className="card-img-top" alt="..." width={"8rem"} />
                                    <h5 className="card-title">{it.name}</h5>
                                    <p className="card-text">
                                        {it.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
