import React, { useState } from 'react';
import NavBar from './NavBar';
import CreatePost from './CreatePost';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
   
    {
      id: 2,
      title: 'North Korea: Latest missile simulated nuclear counterattack',
      content: ' The South Korean and Japanese militaries detected the short-range missile being launched Sunday '
      ,
    },
   
    
   
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-container">
        <h1 className="title">Jenry's First React Blog!</h1>
        <p className="subtitle"></p>
        <div className="post-container">
          {posts.map(post => (
            <div key={post.id} className="post">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <a href={`/posts/${post.id}`} className="view-btn">View</a>
            </div>
          ))}
        </div>
        <CreatePost addPost={addPost} />
      </div>
    </div>
  );
}

export default App;
