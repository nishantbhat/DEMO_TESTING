import React, { Component } from 'react';
import './queue_buttons.css';
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import fetchTenprints from '../../thunks/tenprint'

class TenprintQueue extends Component {
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
                        <h4> Tenprint Job Queue</h4>
                    </div>
                    <div className="col-md-1">
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-success ucw_btn"  ><i className="glyphicon glyphicon-arrow-up" /></button>
                            </div>
                            <div className="col-md-4 col-md-offset-2">
                                <button className="btn btn-success ucw_btn"  ><i className="glyphicon glyphicon-arrow-down" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-1">
                        <button className="btn btn-success ucw_btn"  ><i className="glyphicon glyphicon-off" /> open</button>
                    </div>
                    <div className="col-md-1 col-md-offset-4">
                        <button className="btn btn-success ucw_btn" ><i className="glyphicon glyphicon-repeat" /> Refrsh</button>
                    </div>
                    <div className="col-md-1 " style={{ marginLeft: -6 }}>
                        <button className="btn btn-success ucw_btn" ><i className="glyphicon glyphicon-remove-sign" /> Pause</button>
                    </div>
                    <div className="col-md-1" style={{ marginLeft: -8 }}>
                        <button className="btn btn-success ucw_btn" ><i className="glyphicon glyphicon-play" /> Resume</button>
                    </div>
                    <div className="col-md-1" >
                        <button className="btn btn-success ucw_btn" ><i className="glyphicon glyphicon-remove" /> Delete</button>
                    </div>


                </div>


                <BootstrapTable data={this.props.tenprints} >
                    <TableHeaderColumn dataField='tid' isKey> ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='oid' dataSort>Operator ID </TableHeaderColumn>
                    <TableHeaderColumn dataField='priority' dataSort>priority</TableHeaderColumn>
                    <TableHeaderColumn dataField='sd' dataSort>Start Date </TableHeaderColumn>
                    <TableHeaderColumn dataField='ed' dataSort>End Date </TableHeaderColumn>
                    <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='process' dataSort>Process</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    initialize: () => {
        dispatch(fetchTenprints())
    }
})

const mapStateToProps = state => ({
    tenprints: state.tenprints
})

export default connect(mapStateToProps, mapDispatchToProps)(TenprintQueue);
