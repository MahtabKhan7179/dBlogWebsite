import { createSlice } from "@reduxjs/toolkit";
import { blogList } from "./blogList";

const blogSlice = createSlice({
    name: "blogs",
    initialState: blogList,
    reducers: {
        addBlog: (state, action) => {
            state.push(action.payload)
            console.log(action)
        },
        updateBlog: (state, action) => {
            const { id, title, description } = action.payload;
            const updateBlog = state.find(f => f.id == id);

            if (updateBlog) {
                updateBlog.id = id;
                updateBlog.title = title;
                updateBlog.description = description;
            }
        },
        deleteBlog: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(f => f.id == id);

            if (uu) {
                return state.filter(f => f.id !== id)
            }
        }

    }
})

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;