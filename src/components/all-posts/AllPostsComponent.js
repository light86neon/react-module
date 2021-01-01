import React, { Component } from 'react';
import PostComponent from '../post/PostComponent';
import './AllPosts.css'
class AllPostsComponent extends Component {

    state = {posts: [], chosenPost: null};


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

    selectThisPost = (id) =>{
        let chosenPost =this.state.posts.find(value => value.id === id);
        this.setState({chosenPost})
    }


    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                <h1 className={'posts'}> All Posts Page </h1>
                {
                    posts.map(value => (<PostComponent
                        item={value}
                        key={value.id}
                        selectThisPost={this.selectThisPost}
                        status={false}
                    />))
                }
                <hr/>
                {
                    chosenPost && <PostComponent item = {chosenPost} status={true}/>
                }
            </div>
        );
    }
}

export default AllPostsComponent;