"use client"
import { useSelector } from "react-redux"
import Dashboard from "./components/Dashboard"
import LandingPage from "./components/LandingPage"

export default function Home() {
  //checking user is authorized or not
  const userData = useSelector((state) => state.user)

  return (
    <div className="mt-4 flex justify-center items-center">
      {
       <Dashboard />
      }
    </div>
  )
}
