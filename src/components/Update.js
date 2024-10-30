import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateBlog } from "./blogReducer";
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import { Fab, Zoom } from '@mui/material';

function Update() {

  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs)
  const existingBlogs = blogs.filter(f => f.id == id);
  const { title, description } = existingBlogs[0];

  const [uTitle, setTitle] = useState(title);
  const [uDescription, setDescription] = useState(description);
  const [showInputArea, setInputArea] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdate(event) {
    event.preventDefault();
    dispatch(updateBlog({
      id: id,
      title: uTitle,
      description: uDescription,
    }))
    navigate('/');
  }

  return (
    <div className="form">
      <form className="create-note" type="submit" onSubmit={handleUpdate}>
        <input
          value={uTitle} onChange={(e) => setTitle(e.target.value)} type="text" name="title"
          placeholder="Enter your Title"
        />
        <textarea
          value={uDescription} onChange={(e) => setDescription(e.target.value)} type="text"
          name="description"
          placeholder="Enter your description"
          rows="3"
        />
        {showInputArea &&
          (<Zoom in={showInputArea}>
            <Fab onClick={handleUpdate}>
              <EditNoteTwoToneIcon />
            </Fab>
          </Zoom>
          )
        }
      </form>
    </div>
  );
}

export default Update;

