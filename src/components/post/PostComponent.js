import React, {Component} from 'react';

class PostComponent extends Component {
    render() {

        let {item, selectThisPost,status} = this.props;
        return (
            <div>
                {status || <>{item.id} - {item.title}</>}
                {status && <>{item.id} -{item.body}</>}
                <button onClick={()=> selectThisPost(item.id)}>choose post</button>
            </div>
        );
    }
}

export default PostComponent;