import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../post/Post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../full-post/FullPost";

class AllPosts extends Component {

    postService = new PostService();

    state = {posts: []}

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts})
    }


    render() {

        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value =><Post item={value} key={value.id}/> )
                }
                <Switch>
                    <Route path={url + '/:id' } render={(props)=>{
                        let {match: {params: {id}}}= props;
                        return <FullPost id ={id} key={id}/>;
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(AllPosts);