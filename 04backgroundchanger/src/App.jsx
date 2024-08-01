import { useState } from "react"

function App() {
  const [color,setColor]=useState("aliceblue")
  return (
    <>
    <div className="w-screen h-screen" style={{background:color}}></div>
    <div className="fixed bottom-0 w-full flex flex-wrap-reverse gap-10 py-2 bg-slate-500 justify-center items-center">
      <button className="p-4 bg-green-600 text-white font-bold rounded-lg" onClick={()=>{setColor("green")}}>green</button>
      <button className="p-4 bg-red-600 text-white font-bold rounded-lg" onClick={()=>{setColor("red")}}>red</button>
      <button className="p-4 bg-blue-600 text-white font-bold rounded-lg" onClick={()=>{setColor("blue")}}>blue</button>
      <button className="p-4 bg-violet-600 text-white font-bold rounded-lg" onClick={()=>{setColor("violet")}}>violet</button>
      <button className="p-4 bg-yellow-600 text-white font-bold rounded-lg" onClick={()=>{setColor("yellow")}}>yellow</button>
      <button className="p-4 bg-pink-600 text-white font-bold rounded-lg" onClick={()=>{setColor("pink")}}>pink</button>
      <button className="p-4 bg-orange-600 text-white font-bold rounded-lg" onClick={()=>{setColor("orange")}}>orange</button>

    </div>
    </>
  )
}
export default App
