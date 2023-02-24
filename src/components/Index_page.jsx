import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/posts").then((json) => setPosts(json.data));
  }, []);

  return (
    <div className="app_content">
      {posts.map(({ title, imageUrl }) => {
        return (
          
            <Card  title={title} imageUrl={imageUrl}  key={imageUrl} />
          
        );
      })}
    </div>
  );
};
export default Index;
