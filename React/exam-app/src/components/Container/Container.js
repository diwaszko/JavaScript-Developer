import React from "react";
import styles from '../../App.module.css'; // to style, których używa się jako kluczy w określonych modułach

function Container(props) {
    return <div className={styles.container}>{props.children}</div>;
}

export default Container;
