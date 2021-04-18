import React from 'react';

class Registration extends React.Component {
    LogIn() {
        alert('Logged In!!!');
    }
    render() {
        return (
            <div>
                Login
                <br /><br />
                <div>
                    <input
                        type="text"
                        placeholder="Email Id"
                        onChange={(e)=>{this.setState({email:e.target.value})}}
                    />
                    <br /><br />
                    <input
                        type="text"
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