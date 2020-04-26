import React from 'react';

const StatisticCard = ({value, name, img}) => {
    return (
        <div className="level-item statistics__item">
            <div className="card stats-card is-rounded is-spaced box">
                <div className="card-content">
                    <div className={`has-text-dark stats-card__number-element ${value > 0 ? '' : 'has-text-danger'}`}>{value}</div>
                    <div className="heading">{name}</div>
                </div>
            </div>
            <div className="statistics__image-wrapper">
                <img className='statistics__image' src={`/resources/images/${img}.png`} alt='describe image'/>
            </div>
        </div>
    );
};

export default StatisticCard;
