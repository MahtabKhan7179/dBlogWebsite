import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog } from "./blogReducer";
import Footer from "./Footer";
import Header from "./Header";
import InputArea from "./InputArea";
import Note from "./Note";
// import "./App.css";
import { blogList } from "./blogList";



export default function App() {
  const blogs = useSelector((state) => state.blogs)
    console.log(blogs);

    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(deleteBlog({
            id: id
        }))
    }

  return (
    <div>
      <Header />
      <InputArea style={{ backgroundColor: "black" }} />
      <div className="notes">

      {blogs.map((item, index) => (
        <Note
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
          onDelete={handleDelete}
           />
      ))}
      </div>
      <Footer />
    </div>
  );
}





// export default function Home() {
    
//     return (
//         <div className="container">
//             <h2>Crud App with Json server</h2>
//             <Link to="/create" className="btn btn-success my-3">Create +</Link>

//             <table className="table">
//                 <tbody>
//                     {users.map((User, index) =>
//                         <tr key={index}>
//                             <td>{User.id}</td>
//                             <td>{User.name}</td>
//                             <td>{User.email}</td>
//                             <td>{User.about}</td>
//                             <td>
//                                 <Link to={`/edit/${User.id}`} className="btn btn-sm btn-primary">Edit</Link>
//                                 <button onClick={() => handleDelete(User.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//         </div>
//     )
// }