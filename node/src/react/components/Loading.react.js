'use strict';
import React, {PureComponent} from 'React';

export default class Loading extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading-container">
                <div className="loading-text">{this.props.message}</div>
            </div>
        );
    }
}