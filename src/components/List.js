import React from 'react';

class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            hasAccess: false,
        }
    }
    componentDidMount() {
        this.checkAccess();
    }
    checkAccess(){
        const hasAccess = localStorage.getItem("loginAccess");
        if (hasAccess) {
            this.setState({ hasAccess });
            this.fetchUsers();
        }
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
        console.info(this.state.data);
        return (
            !this.state.hasAccess ? (
                <div className="mt-50">
                    Please Login to check Users List
                </div>
            ) : (
                <table className="table mt-50">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email Id</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data ?
                        this.state.data.map((user)=>
                            <tr>
                                <td>{user.name} </td>
                                <td>{user.mobile ? user.mobile : '-'} </td>
                                <td>{user.email} </td>
                                <td> <button onClick={()=> this.Delete(user)}> Delete </button> </td>
                            </tr>
                        ) : null
                    }
                    </tbody>
                    </table>
            ) 
        );
    }
}

export default Registration;