import React, {Component} from 'react';
import PostService from "../../services/PostService";

class FullPost extends Component {

    state = {post: null};

    postService  = new PostService();

    async componentDidMount(){
        let{id} = this.props;
        console.log(id)
        let post = await this.postService.post(id);

        this.setState({post});
    }

    render() {

        let {post} = this.state;
        return (
            <div>
                {
                    post && <div> {post.id} - {post.title} - {post.body}  </div>
                }
            </div>
        );
    }
}

export default FullPost;