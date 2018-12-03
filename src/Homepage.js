import React, { Component } from 'react'
import './styles.css'
import { store, getAllRappers, init, getEveryRapper } from './Redux/index';
import Axios from 'axios';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';

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
            <div>
                <h1 className='title'>SupaHotFire</h1>
            <div className="test">
                    {this.props.allRappers ? this.props.allRappers.map(rapper =>
                        <ul key={rapper.id}>
                        <h3> Name: {rapper.name}</h3>
                        <h5>Active: {rapper.active.toString()}</h5>
                        <h5>Birthday: {rapper.birthday}</h5>
                        <h5>Songs</h5>
                        <h5>{rapper.songs.map(song => 
                            <li>{song}</li>
                            )}</h5>
                        </ul>
                    ): ''}

                    <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>;
            </div>
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
