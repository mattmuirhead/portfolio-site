import React, { Component } from 'react'

import * as styles from './menu.module.scss'

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        return (
            <div>
                <div 
                    onClick={this.handleClick} 
                    className={`${styles.menuBtn} ${this.state.menu && styles.active} link`} 
                    />
            </div>
        );
    }
}