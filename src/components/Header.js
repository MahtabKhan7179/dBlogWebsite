// import { useState } from "react";
import Timer from "./timer";
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';

export default function Header(){
   
    return(<header>
        <h1><BookTwoToneIcon /> dBlog <Timer /></h1>
    </header>
    )
}