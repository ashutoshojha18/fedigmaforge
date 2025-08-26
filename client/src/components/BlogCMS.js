import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogCMS = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      content: "Web development is evolving rapidly with new technologies...",
      date: "March 15, 2024",
      author: "Fedigma Team"
    },
    {
      id: 2,
      title: "Mobile App Development Best Practices",
      excerpt: "Essential guidelines for creating successful mobile applications.",
      content: "Creating successful mobile applications requires...",
      date: "March 10, 2024",
      author: "Fedigma Team"
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Fedigma Team'
  });

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setBlogs(blogs.map(blog => 
        blog.id === editingId 
          ? { ...blog, ...formData, date: new Date().toLocaleDateString() }
          : blog
      ));
      setEditingId(null);
    } else {
      const newBlog = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString()
      };
      setBlogs([newBlog, ...blogs]);
    }
    setFormData({ title: '', excerpt: '', content: '', author: 'Fedigma Team' });
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author
    });
    setEditingId(blog.id);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div style={{paddingTop: '80px'}}>
      <section className="blog-cms">
        <div className="container">
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog Management
          </motion.h1>

          <div className="cms-layout">
            <div className="cms-form">
              <h2>{editingId ? 'Edit Blog' : 'Add New Blog'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Excerpt</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    rows="3"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    rows="6"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="btn">
                    {editingId ? 'Update Blog' : 'Add Blog'}
                  </button>
                  {editingId && (
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({ title: '', excerpt: '', content: '', author: 'Fedigma Team' });
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="cms-list">
              <h2>Existing Blogs</h2>
              <div className="blog-items">
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog-item">
                    <h3>{blog.title}</h3>
                    <p className="blog-meta">{blog.date} • By {blog.author}</p>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-actions">
                      <button 
                        className="btn-small"
                        onClick={() => handleEdit(blog)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn-small btn-danger"
                        onClick={() => handleDelete(blog.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCMS;