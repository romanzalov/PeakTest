import React, { Component } from 'react'
import './styles.css'
import { store, getAllRappers } from './Redux/index';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class Homepage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        store.dispatch(getAllRappers());
    }

    render() {
        return (
            <div>
                <h1 className='title'>SupaHotFire</h1>
                <div className='table-body'>
                    <Table bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Active</th>
                                <th>Birthday</th>
                                <th>Songs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.allRappers ? this.props.allRappers.map(rapper =>
                                <tr key={rapper.id}>
                                    <td>{rapper.id}</td>
                                    <td>{rapper.name}</td>
                                    <td>{rapper.active.toString()}</td>
                                    <td>{rapper.birthday}</td>
                                    <td>{rapper.songs.map(song =>
                                        <li key={song}>{song}</li>
                                    )}</td>
                                </tr>
                            ) : null}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allRappers: state.allRappers
    }
}

export default connect(mapStateToProps)(Homepage);


