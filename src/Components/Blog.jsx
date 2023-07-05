import React from "react";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="border-black border-2 h-80 w-96">
        <div className="image">
          <img className=" w-96 h-40 border-blue-400 border-2"
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
            alt="image not found"
          />
        </div>
        <div className="all">
          <h1 className="text-2xl font-bold">Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat totam est, ea nostrum praesentium provident voluptate dolores aliquid ullam rem, assumenda ipsa!</p>
        </div>
      </div>
      <div className="border-black border-2 h-80 w-96">
        <div className="image">
          <img className=" w-96 h-40 border-blue-400 border-2"
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
            alt="image not found"
          />
        </div>
        <div className="all">
          <h1 className="text-2xl font-bold">Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat totam est, ea nostrum praesentium provident voluptate dolores aliquid ullam rem, assumenda ipsa!</p>
        </div>
      </div>
      <div className="border-black border-2 h-80 w-96">
        <div className="image">
          <img className=" w-96 h-40 border-blue-400 border-2"
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
            alt="image not found"
          />
        </div>
        <div className="all">
          <h1 className="text-2xl font-bold">Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat totam est, ea nostrum praesentium provident voluptate dolores aliquid ullam rem, assumenda ipsa!</p>
        </div>
      </div>

    </div>
  );
};

export default Blog;