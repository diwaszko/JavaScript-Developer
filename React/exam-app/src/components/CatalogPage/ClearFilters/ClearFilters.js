import React from 'react';
import styles from '../../../App.module.css';

const ClearFilters = (props) => {
    return (
        <div>
            <a href='#' className={styles.clear} onClick={props.checkClear}>{props.textName}</a>
        </div>
    );
};

export default ClearFilters;
