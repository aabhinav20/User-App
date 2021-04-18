import React from 'react';

class Registration extends React.Component {
    SignUp() {
        fetch('http://localhost:8000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                if (response.errors || response.error) {
                    alert('Cannot register the User');
                } else {
                    alert('User Registered');
                }
            })
        }).catch((error)=>{
            alert('Cannot register the User');
        })
    }
    render() {
        return (
            <div>
                Registration
                <br /><br />
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e)=>{this.setState({name:e.target.value})}}
                    />
                    <br /><br />
                    <input
                        type="text"
                        placeholder="Mobile"
                        onChange={(e)=>{this.setState({mobile:e.target.value})}}
                    />
                    <br /><br />
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
                    <button onClick={()=> this.SignUp()}>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default Registration;