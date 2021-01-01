import React, {Component} from 'react';
import CommentComponent from '../comment/CommentComponent';
import {CommentServices} from "../services/CommentServices";
import './AllComments.css';



class AllComments extends Component {

    commentServices = new CommentServices()
    state = {comments: [], chosenComment: null };

    componentDidMount() {

        // fetch('https://jsonplaceholder.typicode.com/comments')
        //     .then(value => value.json())
        //     .then(value => {
        //         this.setState({comments: value});
        //     });
        this.commentServices.getAllComments().then(value => this.setState({comments: value}))
    }
    selectThisComment = (id) => {
        // let chosenComment = this.state.comments.find(value => value.id === id);
        // this.setState({chosenComment})
        this.commentServices.getCommentsById(id)
            .then(value => this.setState({chosenComment: value}))
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