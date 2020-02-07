import React, { Component } from 'react'

import { Redirect} from 'react-router-dom';

export class Form extends Component {
    state={
        email:"",
        password:""
    }
    renderRedirect = () => {
    
        //this.props.history.push(`/target`)
        console.log("hello");
        
        return <Redirect to='/home' />;
        

      
    }
    handleSubmit=(e)=>{
        e.preventDefault();        
        this.props.formData(this.state) 
        this.setState({
            email:"",
            password:""
        })     
    }
    handleInput=(e)=> this.setState({[e.target.name]: e.target.value})
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleInput} type="email" name="email" value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={this.handleInput} type="password" name="password" value={this.state.password} className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button onClick={this.renderRedirect}  type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Form
