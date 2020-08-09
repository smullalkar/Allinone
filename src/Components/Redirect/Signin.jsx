import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
        }
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        let uname = 'admin'
        let pword = 'admin'
        const {username, password} = this.state
        if(username === uname && password === pword){
            this.props.handleClick(this.props.history)
        }
        else{
            alert('Please enter correct username and password')
        }
    }

    render(){
        const {username, password} = this.state
        // const {isAuth} = this.props
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-10 offset-lg-4 offset-md-4 offset-sm-3 offset-1'>
                        <div>
                            <div className="form-group">
                                <label className='text-light'>Username</label>
                                <input type="text" name='username' className="form-control" value={username} onChange={this.handleChange}/>
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label className='text-light'>Password</label>
                                <input type="password" name='password' className="form-control" value={password} onChange={this.handleChange}/>
                            </div>
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-warning">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin