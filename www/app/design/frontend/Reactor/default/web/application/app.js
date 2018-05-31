import React from "react";
import {render} from "react-dom";

var TopBar = require('./common/header');



class App extends React.Component {


    render() {




        return (
            <div>
                {<TopBar/>}
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("reactor"));