import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {

        let {item, match:{url}} = this.props;

        return (
            <div>
                {item.id} - {item.body} - <Link to = {url + '/' + item.id}>post details</Link>
            <hr/>
            </div>
        );
    }
}

export default withRouter(Post);