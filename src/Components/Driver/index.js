import React from 'react';
import {NavClass} from '../../header/nav';
import {DriverBox} from './DriverBox';


export class Driver extends React.Component {
    render() {
        return(
            <div>
                <NavClass/>
                <DriverBox/>
            </div>
        );
    }
}
