import React, { Component } from 'react'
import axios from 'axios';

class editPost extends Component {
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

   componentDidMount(){
    axios.get('http://localhost:5000/posts/single/'+this.props.match.params.id)
    .then(response =>{
        this.setState({
            title:response.data.title,
            content: response.data.content,
        })
    })
    .catch(function(error){
        console.log(error);
    })
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

        const exercise ={
            title: this.state.title,
            content: this.state.content
        }
        console.log(exercise);
        
        axios.post('http://localhost:5000/posts/'+this.props.match.params.id,exercise)
        .then(res => console.log(res.data));

     window.location ='/';
    }
    render() {
        return (
            <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
                
                
              
            <div className="form-group">
                       <label>Title: </label> 
                       <input
                       type="text"
                       className="form-control"
                       value={this.state.title}
                       onChange={this.onChangeTitle}
                       />
                    </div>
                    <div className="form-group">
                       <label>Content: </label> 
                       <textarea
                       className="form-control"
                       value={this.state.content}
                       onChange={this.onChangeContent}
                       />
                    </div>

                <div className="form-group">
                    <input type="submit" value="Edit Post" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}

export default editPost
