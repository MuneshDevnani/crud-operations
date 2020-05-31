import React, { Component } from 'react'
import axios from 'axios';

class createPost extends Component {
    constructor(props){
        super(props);

        this.onChangeTitle= this.onChangeTitle.bind(this);
        this.onChangeContent= this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state ={
            title:'',
            content:''
        }
    }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        });
    }
    onChangeContent(e){
        this.setState({
            content:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const post ={
            title: this.state.title,
            content: this.state.content
        }
        console.log(post);
        
        axios.post('http://localhost:5000/posts/post',post)
        .then(res => console.log(res.data));
        console.log(this.state);
        

     window.location ='/';
    }

    render() {
        return (
            
            <div>
                <h3>Create New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                       <label>Title: </label> 
                       <input
                       type="text"
                       required
                       className="form-control"
                       value={this.state.title}
                       onChange={this.onChangeTitle}
                       />
                    </div>
                    <div className="form-group">
                       <label>Content: </label> 
                       <textarea
                       required
                       className="form-control"
                       value={this.state.content}
                       onChange={this.onChangeContent}
                       />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Post" className="btn btn-primary" />

                    </div>
                </form>
            </div>
        )
    }
}

export default createPost;
