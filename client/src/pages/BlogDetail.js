import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBlog } from '../context/BlogContext';

const BlogDetail = () => {
  const { id } = useParams();
  const { getBlogById } = useBlog();
  const blog = getBlogById(id);

  if (!blog) {
    return (
      <div style={{paddingTop: '80px', textAlign: 'center', padding: '200px 0'}}>
        <h2 style={{color: 'var(--mustard)'}}>Blog not found</h2>
        <Link to="/blog" className="btn">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{paddingTop: '80px'}}>
      <section className="blog-detail">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            
            <div className="blog-header">
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                <span>•</span>
                <span>By {blog.author}</span>
              </div>
              <h1>{blog.title}</h1>
            </div>
            
            <div className="blog-content">
              <p>{blog.content}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;