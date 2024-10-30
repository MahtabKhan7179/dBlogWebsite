import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "./blogReducer";
import { useNavigate } from "react-router-dom";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Fab, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


function InputArea(props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs)
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addBlog({ id: blogs[blogs.length - 1].id + 1, title, description }));
    navigate('/');
  }

  const [showInputArea, setInputArea] = useState(true);

  return (
    <div className="form">
      <form className="create-note" type="submit" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)} type="text" name="title"
          placeholder="Enter title of your blog"
        />
        {showInputArea &&
          <textarea
            onChange={(e) => setDescription(e.target.value)} type="text" name="description"
            placeholder="Enter your description"
            rows="3"
          />
        }
        {showInputArea &&
          (<Zoom in={showInputArea}>
            <Fab onClick={handleSubmit}>
              <AddCircleRoundedIcon />
            </Fab>
          </Zoom>
          )
        }
      </form>
    </div>
  );
}

export default InputArea;