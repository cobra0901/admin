import React from 'react';
import {NavClass} from '../../header/nav';
import {BusBox} from "./BusBox";


export class Library extends React.Component {
    render() {
        return(
            <div>
                <NavClass/>
                <BusBox/>
            </div>
        );
    }
}
