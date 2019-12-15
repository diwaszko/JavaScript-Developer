import React from 'react';
import { Link } from 'react-router-dom';        // link pozwala podmienić linki bez przeładowania strony
import { NavLink } from 'react-router-dom';        // Navlink pozwala dodatkowo dodawać style np. do aktywnej strony activeStyle={{fontWeight: 'bold' }}


const Menu = () => {
    const style = { fontWeight: 'bold' };
    return (
        <div>
            <div>Menu</div>
            <ul>
                <li><Link to="/">Home-1</Link></li>               {/* Link jest zamias tagu "a", a to jest zamiast href */}
                <li><Link to="/about">About-1</Link></li>         {/* pozwala na przejście na podstrony bez ich przeładowania */}
                <li><Link to="/contact">Contact-1</Link></li>
                <li><NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>Home</NavLink></li> {/* dodanie stylu inline oddzielnie */}
                <li><NavLink to="/movies" activeStyle={style}>Movies</NavLink></li> {/* stała style, aby nie powtarzać za każdym razem */}
                <li><NavLink to="/about" activeStyle={style}>About</NavLink></li>
                <li><NavLink to="/contact" activeStyle={style}>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;