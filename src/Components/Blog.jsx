import React from "react";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Retrieve stored blogs from local storage
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);



  

  return (
    <>
      <div className="container mx-auto flex justify-between">
        {blogs.map((blog, index) => {
          return(  <div className="border-black border-2 h-80 w-96">
            <div className="image">
              <img
                className=" w-96 h-40 border-blue-400 border-2"
                src={blog.image}
                alt=" not found"
              />
            </div>
            <div className="all">
              <h1 className="text-2xl font-bold">{blog.title}</h1>
              <p>
                {blog.description}
              </p>
            </div>
          </div>
        )
        })}
        </div>
    </>
  );
};
export default Blog;

// import React, { useEffect, useState } from "react";

// const Blog = () => {

//   return (
//     <div>
//       {blogs.map((blog, index) => (
//         <div key={index}>
//           <h2>{blog.title}</h2>
//           <p>{blog.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;
