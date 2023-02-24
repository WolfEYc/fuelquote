import { IQuote } from "../Models/Quote";
import { GetUser } from "./globaluser";

export const GetQuotes = async () => {
    const user = GetUser()

    console.log(user)
    
    if(user == null) return []

    const res = await fetch("/api/quote",
    {
        method: "PUT",
        body: JSON.stringify(user._id),
        headers: {
            "Content-Type": "application/json"
        }
    })

    console.log(res)

    let quotes: IQuote[] = []

    if(!res.ok) return quotes

    console.log(res.body)

    quotes = await res.json()

    return quotes;
}