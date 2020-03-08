import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({title, id, imageUrl,size}) => {
    return (
    <div className={`menu-item ${size}`} id={id}>
        <div style={{
        backgroundImage:`url(${imageUrl})`
    }} className="background-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
    );
}

export default MenuItem;