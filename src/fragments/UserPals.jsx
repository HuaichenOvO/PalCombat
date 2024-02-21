import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pal from '../modes/Pal.js'


export default class UserPals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="col-md-4">
                    <h2>Pals</h2>
                    <div className='row'>
                        {this.props.Pals.map((p, index) => (
                            <div className="card" style={{ width: "10rem" }} key={p.id}>
                                <div className="card-body">
                                    <img src={p.image} className="card-img-top" alt="..." width={"8rem"} />
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">
                                        Level: {p.level}
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

UserPals.propTypes = {
    // GPT prompt: propTypes format
    Pals: PropTypes.array.isRequired,
    // onClickAddCoin: PropTypes.func.isRequired,
};