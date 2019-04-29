import React from 'react'
import Logo from './logo/logo'
import MenuBtn from './menuBtn/menuBtn'
import Menu from './menu/menu'

import * as styles from './header.module.scss'

export default class Header extends React.Component {
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
                <div className={styles.headerWrapper}>
                    <div>
                        <Logo hasType/>
                    </div>
                    <div>
                        <Menu menu={this.state.menu} />
                        <MenuBtn handleClick={this.handleClick.bind(this)}  menu={this.state.menu} />
                    </div>
                </div>
            </div>
        );
    }
}