import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        let {item, selectThisComment, status} = this.props;
        return (
            <div>
                {status || <>{item.id} - {item.email}</>}
                {status && <> {item.id} - {item.body}</>}
                <button onClick={()=>selectThisComment(item.id)}>choose comment</button>
            </div>
        );
    }
}

export default CommentComponent;