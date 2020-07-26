import React from 'react';
import './menu-item-component.scss';

const MenuItem = ({ name, imageUrl, linkUrl, size }) => (
    <div className={ `${size} menu-item` } style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="content"> 
            <h1 className="title">{name}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;