import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from '../../App.module.css'; 

const Menu = () => {
    return (
        <div className={styles.navbar}>
            <Container>
                <ul className={styles.nav}>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/catalog">Catalog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </Container>
        </div>
    )
}

export default Menu;