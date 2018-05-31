import React from "react";
import {render} from "react-dom";

let Categories = require('./header/categories');


class Header extends React.Component {

    render() {
        return (
            <div>
                <Categories/>
            </div>
        )
    }
}


module.exports = Header;