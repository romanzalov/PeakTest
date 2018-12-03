import React, { Component } from 'react'
import './styles.css'
import { store, getAllRappers, init, getEveryRapper } from './Redux/index';
import Axios from 'axios';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Homepage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const thunk = getAllRappers();
        store.dispatch(thunk);
setTimeout(() => {
    console.log(this.props)
}, 2000);
    }

    render() {
        return (
            <div className="test">
                <ul>
                    {this.props.allRappers ? this.props.allRappers.map(rapper =>
                        <ul key={rapper.id}>
                        <h1> Name: {rapper.name}</h1>
                        <h3>Active: {rapper.active.toString()}</h3>
                        <h3>Birthday: {rapper.birthday}</h3>
                        <h3>Songs</h3>
                        <h3>{rapper.songs.map(song => 
                            <p>{song}</p>
                            )}</h3>
                        </ul>
                    ): ''}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allRappers:state.allRappers
    } 
}

export default connect(mapStateToProps)(Homepage);
