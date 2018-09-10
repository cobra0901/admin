import React from 'react';

import {CSVLink} from 'react-csv';
import {Table,Button} from 'react-bootstrap';
import '../../../css/index.css'

export class RideDetails extends React.Component {

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Entry</th>
                        <th>Exit</th>
                        <th>FareCharged</th>
                        <th>Travel_Date</th>
                        <th>Entry_Time</th>
                        <th>Exit_Time</th>
                        <th>Entry_CardReaderID</th>
                        <th>Exit_CardReaderID</th>
                        <th>Fare_Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.rideDetails.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.rideDetails[index].CardID}</td>
                                <td>{this.props.rideDetails[index].BusRoute}</td>
                                <td>{this.props.rideDetails[index].BusID}</td>
                                <td>{this.props.rideDetails[index].Entry}</td>
                                <td>{this.props.rideDetails[index].Exit}</td>
                                <td>{this.props.rideDetails[index].FareCharged}</td>
                                <td>{this.props.rideDetails[index].Travel_Date}</td>
                                <td>{this.props.rideDetails[index].Entry_Time}</td>
                                <td>{this.props.rideDetails[index].Exit_Time}</td>
                                <td>{this.props.rideDetails[index].Entry_CardReaderID}</td>
                                <td>{this.props.rideDetails[index].Exit_CardReaderID}</td>
                                <td>{this.props.rideDetails[index].Fare_Type}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={() => this.setState({
                    new_show: true})}><CSVLink style={{color:'#fff'}} data={this.props.rideDetails} >export</CSVLink>
                </Button>

            </div>
        );
    }
}