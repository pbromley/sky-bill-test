import React, {Component} from 'react';
import {formatDate} from '../utils';

export default class Statement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {from, to} = this.props.data.period;
        return (
            <div className="statement">
                <div className="statement-from">
                    <span className="statement-label">from</span> {formatDate(from)}
                </div>
                <div className="statement-to">
                    <span className="statement-label">to</span> {formatDate(to)}
                </div>
            </div>
        );
    }
}