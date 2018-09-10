import React from 'react';
import {Row,Tab,Nav,NavItem,Col} from 'react-bootstrap';
import '../../css/main.css'
import {MyAccount} from "./tabs/MyAccount";
import {Transaction} from "./tabs/Transaction";
import {Service} from "./tabs/Service";
import {ChangeRoute} from "./tabs/ChangeRoute";
import {ChangeDevice} from "./tabs/ChangeDevice";
import {RideDetails} from "./tabs/RideDetails";
import {TopupHistory} from "./tabs/TopupHistory";

export class ContentTab extends React.Component {

    render(){
        return(
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first" >
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="my_account">MY ACCOUNT</NavItem>
                            <NavItem eventKey="ride_details">RIDE DETAILS</NavItem>
                            <NavItem eventKey="top_up_details">TOP UP DETAILS</NavItem>
                            <NavItem eventKey="transaction">TRANSACTION</NavItem>
                            <NavItem eventKey="service">SERVICE</NavItem>
                            <NavItem eventKey="change_route">CHANGE ROUTE</NavItem>
                            <NavItem eventKey="change_device">CHANGE DEVICE</NavItem>
                        </Nav>
                    </Col>


                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="my_account">
                                <MyAccount cards={this.props.cards} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="ride_details">
                                <RideDetails rideDetails={this.props.rideDetails}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="top_up_details">
                                <TopupHistory topupDetails={this.props.topupDetails}/>
                            </Tab.Pane>

                            <Tab.Pane eventKey="transaction">
                                <Transaction transactions={this.props.transactions}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="service">
                                <Service services={this.props.services}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="change_route">
                                <ChangeRoute changeRoutes={this.props.changeRoutes}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="change_device">
                                <ChangeDevice changeDevices={this.props.changeDevices}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}