import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = props =>(
    <tr>
        <td>{props.post.title}</td>
        <td>{props.post.content}</td>
    <td>
    <Link to={"/edit/"+props.post._id}>edit</Link> | <a href="#" onClick={() => {props.deletePost(props.post._id) }}>delete</a>
    </td>
</tr>
)

class AllPosts extends Component {
    constructor(props){
        super(props);
        this.deletePost = this.deletePost.bind(this);

        this.state ={posts : []};
    }
    componentDidMount(){
        axios.get('http://localhost:5000/posts/posts')
        .then(response => {
            this.setState({posts: response.data})
            console.log(response.data);
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deletePost(id){
        axios.delete('http://localhost:5000/posts/'+id)
        .then(res => console.log(res.data));
        this.setState({
            posts:this.state.posts.filter(pl => pl._id !== id)
        })
    }
    postList(){
        return this.state.posts.map(currentpost => {
            return <Post post={currentpost} deletePost={this.deletePost} key={currentpost._id} />
        })
    }
    render() {
        return (
            <div>
            <h3>Posts</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                 <tbody>
                   { this.postList()}
                 </tbody>
            </table>
          </div>
        )
    }
}

export default AllPosts
