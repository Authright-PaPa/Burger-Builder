import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <BrowserRouter>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </BrowserRouter>

    </li>
);

export default navigationItem;