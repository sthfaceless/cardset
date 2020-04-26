import React from 'react';
import '@/css/components/main.scss'
import StatisticCard from "@/js/components/main/StatisticCard";

const Main = () => {
    return (
        <div className='main'>
            <section className="hero is-bold is-primary is-large present-section">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-7">
                                <div className='is-block present-section__action'>
                                    <h1 className="title is-spaced present-section__title">Cardset</h1>
                                    <h2 className="subtitle is-size-3-desktop is-size-5-mobile">Create your unique cards permutation</h2>
                                    <div className="columns">
                                        <div className="column is-half">
                                            <button className="button is-large has-text-white is-fullwidth is-dark is-rounded">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className='has-text-centered is-block is-fullwidth present-section__info-wrapper box'>
                                    <p className='content has-text-grey is-size-4-desktop is-size-6-mobile present-section__info'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur, dignissimos impedit laboriosam magnam maxime necessitatibus quidem ratione voluptas?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hero is-medium for-what">
                <div className="hero-body">
                    <div className="container">
                        <div className="title section-title is-size-1 is-spaced">
                            What is this project for?
                        </div>
                        <div className="columns">
                            <div className="column is-6">
                                <p className='is-size-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur deserunt doloribus, dolorum, earum eum exercitationem harum, iste laborum perferendis quam sit soluta unde. Alias modi ut voluptas. A ad at atque consequatur delectus eum eveniet fugiat impedit nemo nobis nostrum obcaecati quos repellendus sequi sit, ullam voluptate. Praesentium, quae.
                                </p>
                            </div>
                            <div className="column is-6">
                                <div className="for-what__image-wrapper">
                                    <img className='for-what__image' src="/resources/images/cards-fly.jpg" alt="cards"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='statistics hero is-medium is-dark is-bold'>
                <div className='hero-body has-text-centered'>
                    <div className="title section-title is-size-1">
                        Statistics
                    </div>
                    <div className='statistics__level-wrapper'>
                        <div className="level statistics__level">
                            <StatisticCard value={0} name={'Decks already created'} img={'statistics'}/>
                            <StatisticCard value={0} name={'Deck of all'} img={'percent'}/>
                            <StatisticCard value={0} name={'Duplicate decks'} img={'probability'}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='support hero is-medium has-text-centered'>
                <div className="hero-body">
                    <div className="title section-title is-size-1 support__title-spaced">
                        Want to support the project?
                    </div>
                    <div className="level support__level">
                        <div className="level-item support__item">
                            <a href='https://qiwi.me/08537432-1888-4062-861a-2a0d399d8150'>
                                <img src={'/resources/images/qiwi-logo.png'} className="support__system-logo"/>
                            </a>
                        </div>
                        <div className="level-item support__item">
                            <a href='https://paypal.me/sthfaceless'>
                                <img src={'/resources/images/paypal-logo.png'} className="support__system-logo"/>
                            </a>
                        </div>
                        <div className="level-item support__item">
                            <a href='https://www.tinkoff.ru/sl/3lhDWUHallW'>
                                <img src={'/resources/images/tinkoff-logo.png'} className="support__system-logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
