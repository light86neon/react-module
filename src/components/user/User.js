import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {

        let {item, match: {url}} = this.props;
        return (
            <div>
                {/*{item.id}-{item.name} - <Link to={`${url} /${item. Id}`}>user details</Link>*/}
                {item.id}-{item.name} - <Link to={url + '/' + item.id}>user details</Link>
                <hr/>
            </div>
        );
    }
}

export default withRouter(User);