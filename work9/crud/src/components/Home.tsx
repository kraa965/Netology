import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/dateUtils";
import "./Home.css";
import { Post } from "../interface/interface.ts";

const Home: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="home-container">
      <h1>Главная страница</h1>
      <Link to="/posts/new" className="create-post-button">
        Создать пост
      </Link>
      <div className="post-list">
        {posts.length === 0 ? (
          <div className="placeholder-post">
            <p>Здесь пока нет постов. Создайте свой первый пост!</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-details">
                <p>{`ID: ${post.id}`}</p>
                <p>{`Содержание: ${post.content}`}</p>
                <p>{`Дата создания: ${formatTimestamp(post.created)}`}</p>
                <Link to={`/posts/${post.id}`} className="view-post-button">
                  Просмотреть пост
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
