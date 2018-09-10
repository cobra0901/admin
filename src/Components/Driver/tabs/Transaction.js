import React from 'react';
import '../../../css/index.css'
import {CSVLink} from 'react-csv';
import {Table,Button} from 'react-bootstrap';
export class Transaction extends React.Component {

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
                        <th>BusId</th>
                        <th>AFCAmount</th>
                        <th>MFCAmount</th>
                        <th>MFC-CAmount</th>
                        <th>MuflarCommission</th>
                        <th>TotalAmount</th>
                        <th>RideAmount</th>
                        <th>TopUpAmount</th>
                        <th>DateStart</th>
                        <th>DateEnd</th>
                        <th>Week</th>
                        <th>year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.transactions.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.transactions[index].busId}</td>
                                <td>{this.props.transactions[index].AFCAmount}</td>
                                <td>{this.props.transactions[index].MFCAmount}</td>
                                <td>{this.props.transactions[index].MFCCAmount}</td>
                                <td>{this.props.transactions[index].MuflarCommission}</td>
                                <td>{this.props.transactions[index].TotalAmount}</td>
                                <td>{this.props.transactions[index].RideAmount}</td>
                                <td>{this.props.transactions[index].TopUpAmount}</td>
                                <td>{this.props.transactions[index].DateStart}</td>
                                <td>{this.props.transactions[index].DateEnd}</td>
                                <td>{this.props.transactions[index].Week}</td>
                                <td>{this.props.transactions[index].year}</td>
                            </tr>
                        )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" style={{marginLeft:20}} onClick={() => this.setState({
                    new_show: true})}><CSVLink style={{color:'#fff'}} data={this.props.transactions} >export</CSVLink>
                </Button>

            </div>
        );
    }
}