import React, {Component} from 'react';
import {connect} from 'react-redux';
import '@/css/components/decks.scss'
import DeckElement from "@/js/components/decks/DeckElement";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class Decks extends Component {
    render() {
        return (
            <div className='decks'>
                <div className="container">
                    <div className="title decks__title has-text-grey">
                        Search decks
                    </div>
                    <div className="field is-fullwidth decks__search-field">
                        <div className="control">
                            <input className='input is-medium' type='text' placeholder='Search decks by name...'/>
                        </div>
                    </div>
                    <div className="tabs is-medium">
                        <ul>
                            <li className='is-active'><a>Date</a></li>
                            <li><a>Name</a></li>
                        </ul>
                    </div>
                    <div className="decks__decks-elements">
                        <DeckElement name='Some deck' text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ipsam.'}/>
                        <DeckElement name='Some deck' text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ipsam.'}/>
                        <DeckElement name='Some deck' text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ipsam.'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Decks);