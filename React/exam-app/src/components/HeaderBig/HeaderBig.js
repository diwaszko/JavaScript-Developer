import React from 'react';
import styles from '../../App.module.css';

const HeaderBig = (props) => {
    return (
        <div>
            <h1 className={styles['header-big']}>{props.name}</h1>
        </div>
    )
}

export default HeaderBig;