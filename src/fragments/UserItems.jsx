import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserItem from '../modes/UserItem.js'


export default class UserItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="col-md-12">
                    <h2>Availble Items</h2>
                    <div className='row'>
                        {this.props.items.map((it, index) => (
                            <>
                                {it.number > 0 ?
                                    (<div key={it.item.id} className="card" style={{ padding: '7px', width: "10rem" }}>
                                        <div className="card-body">
                                            <img src={it.item.image} className="card-img-top" alt="..." width={"8rem"} />
                                            <h5 className="card-title">{it.item.name}</h5>
                                            <p className="card-text">
                                                {it.item.description}
                                            </p>
                                            <p className="card-text">
                                                Own: {it.number}
                                            </p>
                                        </div>
                                    </div>)
                                    : (<></>)}
                            </>

                        ))}
                    </div>
                </div>
            </>
        );
    }
}

UserItems.propTypes = {
    // GPT prompt: propTypes format
    // items: PropTypes.arrayOf(UserItem).isRequired,
    items: PropTypes.array.isRequired,
};