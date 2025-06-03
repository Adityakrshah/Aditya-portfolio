import { Toaster } from "@/components/ui/toaster";
import  Home from "./Pages/Home";
import NotFound  from "./Pages/NotFound"
import { BrowserRouter, Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={ <Home/>}/>
      <Route path = "*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
