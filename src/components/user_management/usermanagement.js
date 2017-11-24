import React, { Component } from 'react';
// import './queue_buttons.css';
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import fetchUsers from '../../thunks/user_management'

class Usermanagment extends Component {
    componentDidMount() {
        this.props.initialize();
    }
  
    render() {
        // It's a data format example.
        function priceFormatter(cell, row) {
            return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
        }
        return (
            <div>

                <div className="row my_qbtn ">

                    <div className="col-md-2">
                        <h4> User Managment </h4>
                    </div>
                    

                    <div className="col-md-2 col-md-offset-2">
                        <button className="btn btn-success ucw_btn " ><i className="glyphicon glyphicon-off" /> Disable User</button>
                    </div>
                    <div className="col-md-2 ">
                        <button className="btn btn-success ucw_btn" ><i className="glyphicon glyphicon-repeat" /> Add User</button>
                    </div>
                    <div className="col-md-2 " >
                        <button className="btn btn-success ucw_btn" ><i className="glyphicon glyphicon-remove-sign" /> Delete User</button>
                    </div>
                    <div className="col-md-2 " >
                       <input type="text" className="form-control" placeholder="search"/>
                    </div>

                </div>


                <BootstrapTable data={this.props.users} >
                    <TableHeaderColumn dataField='LastName' isKey>LastName</TableHeaderColumn>
                    <TableHeaderColumn dataField='FirstName' dataSort>FirstName </TableHeaderColumn>
                    <TableHeaderColumn dataField='DateAdded' dataSort>DateAdded</TableHeaderColumn>
                    <TableHeaderColumn dataField='User ID' dataSort>User ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='LastActive' dataSort>LastActive</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    initialize: () => {
        dispatch(fetchUsers())
    }
})

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(Usermanagment);