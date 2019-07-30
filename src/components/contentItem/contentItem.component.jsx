import React from 'react';

import './contentItem.style.scss'

export const ContentItem = ({title, imageUrl, size}) => {
    return(
        <div className={`${size} menu-item`}>
            <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}