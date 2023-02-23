import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/posts").then((json) => setPosts(json.data));
  }, []);

  return (
    <div className="app_content">
      {posts.map(({ title, imageUrl }) => {
        return (
          <Link to="/card"  className="card app_card">
            <Card title={title} imageUrl={imageUrl} key={imageUrl} />
          </Link>
        );
      })}
    </div>
  );
};
export default Index;
