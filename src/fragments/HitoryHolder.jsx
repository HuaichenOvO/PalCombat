import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HitoryHolder extends Component {
    state = {
        history: [],
    }



    render() {
        return (
            <>
                {this.state.history.map(
                    (h) => {
                        <div style={{ marginTop: 10 }}>
                            {h}
                        </div>
                    }
                )}
            </>
        );
    }
}

HitoryHolder.propTypes = {
    // value: PropTypes.object.isRequired,
    history: PropTypes.array.isRequired,
}