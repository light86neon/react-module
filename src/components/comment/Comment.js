import React, {Component} from 'react';

import {Link,withRouter} from "react-router-dom";


class Comment extends Component {



    render() {
        let {match: {url}, item} = this.props;


        console.log(url)
        return (
            <div>
                {item.id} - {item.body} - <Link to={`${url}/${item.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(Comment);