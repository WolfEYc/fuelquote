"use client"

import { useEffect, useState } from "react";
import { GetUser } from "../hooks/globaluser"
import { IUser } from "../Models/User";


export const UserDisplay = () => {
    
    const [user, setUser] = useState<IUser>()

    useEffect(() => {

        const newUser = GetUser()

        if(newUser == null){
            window.location.replace("/")
            return
        }

        setUser(newUser)

    }, [])

    if(user == null){
        return <h1>Not logged in</h1>
    }

    return(
        <div className="flex flex-col">
            <div>{user._id}</div>
            <div>{user.username}</div>
            <div>{user.password}</div>
            <div>{user.address1}</div>
            {user.address2 ? <div>{user.address2}</div> : <></>}
            <div>{user.city}</div>
            <div>{user.state}</div>
            <div>{user.zipcode}</div>
        </div>
    )
}