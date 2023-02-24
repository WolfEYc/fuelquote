"use client"

import { useEffect, useState } from "react";
import globalUser from "../hooks/globaluser"
import { IUser } from "../Models/User";



export const UserDisplay = () => {
    
    const [currentUser, setUser] = useState<IUser>()

    useEffect(() => {

        const { user } = globalUser;

        if(user == null){
            window.location.replace("/")
        } else {
            setUser(user)
        }

    }, [])

    if(currentUser == null){
        return <h1>Not logged in</h1>
    }

    return(
        <div className="flex flex-col">
            <div>{currentUser._id}</div>
            <div>{currentUser.username}</div>
            <div>{currentUser.password}</div>
            <div>{currentUser.address1}</div>
            {currentUser.address2 ? <div>{currentUser.address2}</div> : <></>}
            <div>{currentUser.city}</div>
            <div>{currentUser.state}</div>
            <div>{currentUser.zipcode}</div>
        </div>
    )
}