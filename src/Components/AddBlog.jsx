import React from "react";
import { useState, useEffect } from "react";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs && storedBlogs.length > 0) {
      setBlogs(storedBlogs);
    }
  }, []);
  useEffect(() => {
    // Save blogs to local storage whenever it changes
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      const newBlog = {
        title: title,
        description: desc,
      };
      setBlogs([...blogs, newBlog]);
      setTitle("");
      setDesc("");
    }
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);

  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);

  };
  return (
    //    here we will add the blog
    <div className="container mx-auto">
      <div className="mt-11">
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="addBlog">Title</label>
          <input
            className="border-2 border-black"
            value={title}
            type="text"
            onChange={handleTitleChange}
          />
          <label htmlFor="addBlog">Description</label>
          <textarea
            className="border-2 border-black"
            value={desc}
            onChange={handleDescChange}
          ></textarea>
          <label htmlFor="">choose</label>
          <input type="image" alt="image" />
          <button className="border-2 bg-red-400 text-white p-2 ml-2" type="submit">
            Sumbit
          </button>
        </form>
      </div>

      {/* make a table below for showing the data which we take from user as input*/}
      <div className="mt-11">
        <table className="border-2 border-black">
          <thead>
            <tr>
              <th className="border-2 border-black">Title</th>
              <th className="border-2 border-black">Description</th>
              <th className="border-2 border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index}>
                <td className="border-2 border-black">{blog.title}</td>
                <td className="border-2 border-black">{blog.description}</td>
                <td className="border-2 border-black">Action</td>
              </tr>
            ))}
          </tbody>
        </table>    
      </div>
    </div>
  );
};

export default AddBlog;
