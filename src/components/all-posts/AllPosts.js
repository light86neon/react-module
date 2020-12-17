import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService();

    async componentDidMount() {
      let posts =  await this.postService.getAllPosts();
      this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(post => <Post key={post.id} item={post}/>)}
                <div className={'switchColor'}>
                    <Switch>
                        <Route path={'/posts/:id'} render ={(props)=> {
                            console.log(props);
                            return ('tra-ta-ta')
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllPosts;