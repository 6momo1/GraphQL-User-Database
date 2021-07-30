
import React, { useEffect, useState} from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../GraphQL/Queries'

const GetUsers = () => {

    const { error, loading, data } = useQuery(LOAD_USERS)
    const [users, setUsers] = useState()

    useEffect( () => {
        if (data) {
            console.log(data.getAllUsers);
            setUsers(data.getAllUsers)
            console.log(users);
        }
    }, [data])

    return (
        <div>

            {users ?
                users.map( val => {
                    return (
                        <>
                        <p>{val.firstName + " " + val.lastName}</p>
                        <h6>{val.email}</h6>
                        </>
                    )
                })
                :
                <div>Loading ... </div>
            }
        </div>
    )
}

export default GetUsers