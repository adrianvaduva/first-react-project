import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {

    render() {
        const {users, removeUser} = this.props;
        return (
            <div className="my-3 p-3 rounded box-shadow">
                <h5 className="border-bottom border-gray pb-2 mb-0">List of users:</h5>
                {users.map((user, index) => {
                    return <UserItem
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                        salary={user.salary}
                        image={user.image}
                        removeUser={removeUser}
                        key={index}
                    />
                })}
            </div>
        );
    }
}

export default UserList;