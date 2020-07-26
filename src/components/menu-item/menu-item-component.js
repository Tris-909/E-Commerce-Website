import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './menu-item-component.scss';

const MenuItem = ({ name, imageUrl, linkUrl, size, history, match }) => (
    <div className={ `${size} menu-item` } onClick={() => history.push(`${match.url}${linkUrl}`)} >
           <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
            <div className="content"> 
                <h1 className="title">{name.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
    </div>
);

export default withRouter(MenuItem);