import React from 'react';
import styles from '../../../App.module.css';
import ProductsService from '../../../services/products.service'

const FeaturedProducts = (props) => {
    const category = ProductsService.getProductsByCategory(props.category);

    return (
        <div>
            <div className={styles.products}>          
                {category.map(product => (
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

export default FeaturedProducts;
