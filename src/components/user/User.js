import React, {Component} from 'react';

import {Link,withRouter} from "react-router-dom";


class User extends Component {



    render() {
    let {match: {url},item} = this.props;


        console.log(url)
        return (
            <div>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(User);
// export default User;