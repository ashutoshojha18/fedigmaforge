import React, { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      content: "Web development is evolving rapidly with new technologies...",
      date: "March 15, 2024",
      author: "Fedigma Team",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mobile App Development Best Practices",
      excerpt: "Essential guidelines for creating successful mobile applications.",
      content: "Creating successful mobile applications requires...",
      date: "March 10, 2024",
      author: "Fedigma Team",
      readTime: "7 min read"
    }
  ]);

  const addBlog = (blog) => {
    const newBlog = {
      ...blog,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      readTime: "5 min read"
    };
    setBlogs([newBlog, ...blogs]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => 
      blog.id === id ? { ...blog, ...updatedBlog } : blog
    ));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const getBlogById = (id) => {
    return blogs.find(blog => blog.id === parseInt(id));
  };

  return (
    <BlogContext.Provider value={{
      blogs,
      addBlog,
      updateBlog,
      deleteBlog,
      getBlogById
    }}>
      {children}
    </BlogContext.Provider>
  );
};