import React, { useState } from "react";
import styles from '../../App.module.css';
import HeaderBig from "../HeaderBig/HeaderBig";
import Container from "../Container/Container";
import FilterHeader from "./FilterHeader/FilterHeader";
import FilterProducts from "./FilterProducts/FilterProducts";
import Manufacturer from "./Manufacturer/Manufacturer";
import Search from "./Search/Search";
import ClearFilters from "./ClearFilters/ClearFilters";

const CatalogPage = () => {
  const [filterRadio, setFilterRadio] = useState('All');
  const [searchProduct, setSearchProduct] = useState('');
  
  return (
    <div>
      <Container>
        <HeaderBig name="Catalog" />
        <div className={styles.catalog}>
            <div className={styles['column-left']}>
                <div className={styles.filter}>
                    <div className={styles['filter-header']}>
                        <FilterHeader name="Search" />
                        <ClearFilters textName="clear" checkClear={() => {setFilterRadio('All'); setSearchProduct('');}} />
                    </div>
                    <Search typedText={searchProduct} checkText={(text) => setSearchProduct(text.target.value)} />
                    <FilterHeader name="Manufacturer" />
                    <Manufacturer manufacturer="All" labelName="All" checked={filterRadio === 'All'} checkRadio={() => setFilterRadio('All')} />
                    <Manufacturer manufacturer="Apple" labelName="Apple"checked={filterRadio === 'Apple'} checkRadio={() => setFilterRadio('Apple')} />
                    <Manufacturer manufacturer="Dell" labelName="Dell" checked={filterRadio === 'Dell'} checkRadio={() => setFilterRadio('Dell')}/>
                </div>
            </div>
          <div className={styles['column-right']}>
                  <FilterProducts manufacturer={filterRadio} typedText={searchProduct} />
          </div>
        </div>
        </Container>
    </div>
  );
};

export default CatalogPage;
