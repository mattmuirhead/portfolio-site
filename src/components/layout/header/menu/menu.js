import React from 'react'
import DelayedLink from '../../../delayedLink/delayedLink'

import * as styles from './menu.module.scss'

export default class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            menuExit: false
        }

        this.handleExit = this.handleExit.bind(this);
    }

    handleExit() {
        this.setState({
            menuExit: true
        });

        this.props.handleClick();

        setTimeout(() => {
            this.setState({ 
                menuExit: false 
            })
        }, 1500);
    }

    render() {
        return (
            <div className={`
                ${styles.menuWrapper} 
                ${this.props.menu && styles.open}
                ${this.state.menuExit && styles.menuExit}
                `}>
            
                <ul className={styles.menu}>
                    <li>
                        <DelayedLink 
                            to="/projects" 
                            className="link" 
                            delay={750}
                            onClick={this.handleExit}>
                            Projects
                        </DelayedLink>
                        <span className={styles.echo}>Projects</span>
                        <span className={styles.number}>01</span>
                    </li>
                    <li>
                        <DelayedLink 
                            to="/about" 
                            className="link" 
                            delay={750}
                            onClick={this.handleExit}>
                            About
                        </DelayedLink>
                        <span className={styles.echo}>About</span>
                        <span className={styles.number}>02</span>
                    </li>
                    <li>
                        <a 
                            href="mailto:hello@mattmuirhead.co.uk" 
                            className="link">
                            Contact
                        </a>
                        <span className={styles.echo}>Contact</span>
                        <span className={styles.number}>03</span>
                    </li>
                </ul>
            </div>
        );
    }
}