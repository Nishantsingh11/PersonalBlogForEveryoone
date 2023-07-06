import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (title && desc && selectedImage) {
      const newBlog = {
        title: title,
        description: desc,
        image: selectedImage,
      };

      // Store the new blog data in local storage
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const updatedBlogs = [...storedBlogs, newBlog];
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

      setTitle("");
      setDesc("");
      setSelectedImage(null);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Convert image file to data URL

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="container mx-auto">
      <div>
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
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>
          <button
            className="border-2 bg-red-400 text-white p-2 ml-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
