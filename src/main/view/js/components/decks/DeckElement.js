import React from 'react';

const DeckElement = ({name, text}) => {
    return (
        <div className="decks__decks-element message is-primary has-background-white">
            <div className="message-body">
                <div className="media">
                    <div className="media-left">
                        <img src='/resources/images/cards-item.jpg' className='decks__deck-image' alt='card item'/>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <div className="subtitle">{name}</div>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeckElement;
