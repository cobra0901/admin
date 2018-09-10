import React from 'react';
import {CSVLink} from 'react-csv';
import {Table,Button} from 'react-bootstrap';
import '../../../css/index.css'

export class TopupHistory extends React.Component {

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
                        <th>UserID</th>
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Amount</th>
                        <th>Recharge_Date</th>
                        <th>Recharge_Time</th>
                        <th>Card Reader ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.topupDetails.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.topupDetails[index].UserID}</td>
                                <td>{this.props.topupDetails[index].CardID}</td>
                                <td>{this.props.topupDetails[index].BusRoute}</td>
                                <td>{this.props.topupDetails[index].BusID}</td>
                                <td>{this.props.topupDetails[index].Amount}</td>
                                <td>{this.props.topupDetails[index].Recharge_Date}</td>
                                <td>{this.props.topupDetails[index].Recharge_Time}</td>
                                <td>{this.props.topupDetails[index].CardReaderID}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={() => this.setState({
                    new_show: true})}><CSVLink style={{color:'#fff'}} data={this.props.topupDetails} >export</CSVLink>
                </Button>

            </div>
        );
    }
}