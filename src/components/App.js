import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import InputArea from "./InputArea";
import Update from "./Update";


export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/edit/:id" element={<Update />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


