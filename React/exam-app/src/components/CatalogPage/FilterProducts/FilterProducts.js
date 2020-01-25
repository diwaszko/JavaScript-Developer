import React from 'react';
import styles from '../../../App.module.css';
import ProductsService from '../../../services/products.service'

const FilterProducts = (props) => {
    const filteredProduct = ProductsService.getProductsByFilters(props.manufacturer, props.typedText);

    return (
        <div>
            <div className={styles.products}>
                {filteredProduct.map(product => (
                    <div className={styles.product} key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <p className={styles.price}>${product.amount}</p>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterProducts;
