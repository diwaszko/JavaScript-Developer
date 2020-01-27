import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css'

const Button = ({ size, dark, children }) => {
    const className = classNames({
        [styles.button]: true,
        [styles.dark]: dark,
        [styles.sizeSmall]: size === 'small',
        [styles.sizeMedium]: size === 'medium',
        [styles.sizeLarge]: size === 'large'
    });


    return <button className={className}>{children}</button>;
};

Button.defaultProps = {
    size: protoTypes.oneOf(['small', 'medium', 'large']),
    dark: protoTypes.bool,
    children: protoTypes.node
};
