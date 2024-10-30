import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useDispatch, useSelector } from "react-redux";
import { Fab } from '@mui/material';
import { deleteBlog } from "./blogReducer";

export default function Note(note) {
    var [isMouseOver, setMouseOver] = useState(false)

    // console.log(note);

    const dispatch = useDispatch();
    function handleDelete(event) {
        event.preventDefault();
        dispatch(deleteBlog({
            id: note.id,
        }));
    }

    return (
        <div className="note" style={{ fontSize: isMouseOver ? "1.4em" : "1.2em" }}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <Fab >
                <span><DeleteIcon onClick={handleDelete} /></span>
            </Fab>
            <Fab>
                <Link to={`/edit/${note.id}`} >
                    <EditNoteIcon />
                </Link>
            </Fab>
        </div>
    )
}