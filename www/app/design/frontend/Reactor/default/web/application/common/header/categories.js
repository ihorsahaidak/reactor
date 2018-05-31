import React from "react";
import {render} from "react-dom";


class Categories extends React.Component {
    constructor()
    {
        super();
        this.state = {
            categories: [],
        }
    }
    componentDidMount()
    {
        fetch('/application/cms/index').then((Response) => Response.json()).then((categories) => {
            console.log(categories);
            window.categories = categories;
            this.setState({
                categories: categories
            });
        });
    }


    printObject(o, indent) {

        let out = '';
        if (typeof indent === 'undefined') {
            indent = 0;
        }
        for (let p in o) {
            if (o.hasOwnProperty(p)) {
                let val = o[p];
                out += new Array(4 * indent + 1).join(' ') + p + ': ';
                if (typeof val === 'object') {
                    if (val instanceof Date) {
                        out += 'Date "' + val.toISOString() + '"';
                    } else {
                        out += '{\n' + this.printObject(val, indent + 1) + new Array(4 * indent + 1).join(' ') + '}';
                    }
                } else if (typeof val === 'function') {

                } else {
                    out += '"' + val + '"';
                }
                out += ',\n';
            }
        }

        return out;
    }

    render() {


        let out = this.printObject(this.state.categories, 0);
        console.log(out);

        return (
            <div>
                <pre>{out}</pre>
            </div>
        )
    }
}


module.exports = Categories;