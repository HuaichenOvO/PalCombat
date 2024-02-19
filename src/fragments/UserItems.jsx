import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../modes/Item.js'


export default class UserItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="col-md-8">
                    <h2>Availble Items</h2>
                    <div className='row'>
                        {this.props.items.map((it, index) => (
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

UserItems.propTypes = {
    // GPT prompt: propTypes format
    // items: PropTypes.arrayOf(Item).isRequired,
    items: PropTypes.array.isRequired,
};