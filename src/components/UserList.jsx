import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const {users} = props;

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
                    key={index}
                />
            })}
        </div>
    );
}

export default UserList;