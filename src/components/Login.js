import React from 'react';

class Registration extends React.Component {
    LogIn() {
        if (!this.state) {
            alert('Please provide Login details!!!');
            return;
        }
        if (!this.state.email) {
            alert('Please provide Email Id!!!');
            return;
        }
        if (!this.state.password) {
            alert('Please provide Password!!!');
            return;
        }
        localStorage.setItem("loginAccess", true);
        alert('Logged In!!!');
    }
    render() {
        return (
            <div className="mt-50">
                <h3>Welcome back!</h3>
                <p>Please Login to your Account</p>
                <div>
                    <input
                        type="text"
                        key="email"
                        placeholder="Email Id"
                        onChange={(e)=>{this.setState({email:e.target.value})}}
                    />
                    <br /><br />
                    <input
                        type="text"
                        key="password"
                        placeholder="Password"
                        onChange={(e)=>{this.setState({password:e.target.value})}}
                    />
                    <br /><br />
                    <button onClick={()=> this.LogIn()}>Log In</button>
                </div>
            </div>
        );
    }
}

export default Registration;