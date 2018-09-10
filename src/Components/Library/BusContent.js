import React from 'react';
import {Row,Tab,Nav,NavItem,Col} from 'react-bootstrap';
import {Stops} from "./tabs/Stops";
import {Routes} from "./tabs/Routes";

export class BusContent extends React.Component {


    render() {
        return(

            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="bus_stops" >
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="bus_stops">BUS STOPS</NavItem>
                            <NavItem eventKey="bus_route_fare">BUS ROUTE FARE</NavItem>
                        </Nav>
                    </Col>


                    <Col sm={12}>
                        <Tab.Content animation>

                            <Tab.Pane eventKey="bus_stops">
                                <Stops stops={this.props.stops} />
                            </Tab.Pane>

                            <Tab.Pane eventKey="bus_route_fare">
                                <Routes routes={this.props.routes} />
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}
