import { Client } from "ssh2";
import { useEffect } from "react"

function SSH() {
  function test() {
    const c = new Client()
  }
  
  useEffect(() => {
    console.log("mount")
    test()
    
    return () => {
      console.log("unmount")
    }
  }, [])
  return (
    <p>hi</p>
  )
}

export default function Index() {
  
  return (
    <div className="text-nord5 w-full flex flex-col items-center">
      <h1 className="text-4xl">SSH</h1>
      <SSH />
    </div>
  )
}
