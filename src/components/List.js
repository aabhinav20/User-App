import React from 'react';

class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
        }
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers(){
        fetch('http://localhost:8000/users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result)=>{
            result.json().then((response)=>{
                this.setState({data: response});
            })
        })
    }
    Delete(userToDelete) {
        const userId = userToDelete._id;
        fetch(`http://localhost:8000/users/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result)=>{
            alert('User Deleted');
        }).catch((error)=>{
            alert('Cannot delete the User');
        })
    }
    render() {
        return (
            <div>
                Users List
                <br /><br />
                <div>
                {
                    this.state.data ?
                    this.state.data.map((user)=>
                    <div>
                        <span> Name: {user.name} </span>
                        <span> Mobile: {user.mobile ? user.mobile : '-'} </span>
                        <span> Email Id: {user.email} </span>
                        <span> <button onClick={()=> this.Delete(user)}> Delete </button> </span>
                    </div>
                    ) : null
                }
                </div>
            </div>
        );
    }
}

export default Registration;