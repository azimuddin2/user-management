import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props{
//     name: string,
//     age: number,
//     addUser: () => void
// }

interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({user, addUser}) => {
    return (
        <div>
           {/* <h1>{name} With experience {age}</h1> */}
           <h1>Name: {user.name}</h1>
           <h2>Email: {user.email}</h2>
           <button onClick={() => addUser(user)}>Add me</button>
        </div>
    );
};

export default User;