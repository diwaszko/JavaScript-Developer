import React from 'react';
import styles from '../../App.module.css';

const HeaderSmall = (props) => {
    return (
        <div>
            <h2 className={styles['header-small']}>{props.name}</h2>
        </div>
    )
}

export default HeaderSmall;