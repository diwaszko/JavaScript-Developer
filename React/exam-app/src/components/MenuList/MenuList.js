import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu'
import AboutPage from '../AboutPage/AboutPage';
import CatalogPage from '../CatalogPage/CatalogPage';
import HomePage from '../HomePage/HomePage';
import Error404Page from '../Error404Page/Error404Page';

function MenuList() {
    return (
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/catalog" component={CatalogPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={Error404Page} />
                </Switch>
            </div>
        </Router>
    );
}

export default MenuList;
