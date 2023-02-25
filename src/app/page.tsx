import { Login } from "@/lib/components/login";
import { Registration } from "@/lib/components/registration";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
  
        

        <div className="md:w-8/12 bg-gray-300 h-screen">
          <Login />
          <Link href="/registrationPage">
            <button className= "p-3 mt-4 w-24 mx-auto rounded bg-green-500 hover:bg-green-700 font-bold text-lg">Register</button>
          </Link>
          
        </div>
    </div>
  )
}
