import React, {Component} from 'react';
import CommentComponent from '../comment/CommentComponent'
import './AllComments.css'



class AllComments extends Component {

    state = {comments: [], chosenComment: null };

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                this.setState({comments: value});
            });

    }
    selectThisComment = (id) => {
        let chosenComment = this.state.comments.find(value => value.id === id);
        this.setState({chosenComment})
    };

    render() {
        let {comments, chosenComment} = this.state;
        return (
            <div>
                <h1 className={'comment'} >All Comment Page</h1>
                {
                    comments.map(value => (<CommentComponent
                    item={value}
                    key={value.id}
                    selectThisComment = {this.selectThisComment}
                    status={false}
                    />))
                }
                <hr/>
                {
                    chosenComment && <CommentComponent item ={chosenComment}  status={true}/>
                }
            </div>
        );
    }
}

export default AllComments;