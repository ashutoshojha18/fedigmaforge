import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBlog } from '../context/BlogContext';

const Blog = () => {
  const { blogs, addBlog, deleteBlog } = useBlog();
  const [showCMS, setShowCMS] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Fedigma Team'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(formData);
    setFormData({ title: '', excerpt: '', content: '', author: 'Fedigma Team' });
    setShowCMS(false);
  };

  return (
    <section className="blog">
      <div className="container">
        <div className="blog-header-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Latest Insights
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay updated with the latest trends, insights, and tips from the world of technology
          </motion.p>

          <button 
            className="btn cms-toggle"
            onClick={() => setShowCMS(!showCMS)}
          >
            {showCMS ? 'Hide' : 'Manage'} Blog Posts
          </button>
        </div>

        {showCMS && (
          <motion.div 
            className="blog-cms-inline"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <form onSubmit={handleSubmit} className="cms-form-inline">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  required
                />
              </div>
              <textarea
                placeholder="Short excerpt..."
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                rows="2"
                required
              />
              <textarea
                placeholder="Full content..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows="4"
                required
              />
              <button type="submit" className="btn">Add Blog Post</button>
            </form>
          </motion.div>
        )}
        
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.article 
              key={blog.id} 
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="blog-footer">
                  <span className="author">By {blog.author}</span>
                  <div className="blog-actions-inline">
                    <Link to={`/blog/₹{blog.id}`} className="read-more">
                      Read More →
                    </Link>
                    {showCMS && (
                      <button 
                        className="delete-btn"
                        onClick={() => deleteBlog(blog.id)}
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;