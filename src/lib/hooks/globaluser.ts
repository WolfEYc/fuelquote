import { IUser } from "../Models/User";

interface GlobalUser {
    user: IUser | null,
    quotes: number
}


export function SetUser(user: IUser){
    localStorage.setItem("user", JSON.stringify(user))
}

export function SetQuotes(quotes: number){
    localStorage.setItem("quotes", quotes.toString())
}

export function GetUser(){
    const userstring = localStorage.getItem("user")

    if(userstring == null) return null;

    const user: IUser = JSON.parse(userstring)

    return user
}

export function GetQuotes(){
    const quotestring = localStorage.getItem("quotes")

    if(quotestring == null) return 0;

    return parseInt(quotestring)
}
