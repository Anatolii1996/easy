import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const [posts, setPosts] = useState([]);
  const { title } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/posts/`).then((json) => setPosts(json.data));
  }, []);
  let post = {};
  posts.forEach((el) => {
    if (el.title === title) {
      post = el;
    }
  });
  return (
    <div className="detail_wrap">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt="image" />
      <p>{post.description}</p>
      <div className="expert_comment">
          <h2>Expert comment</h2>
          <p>{post.expertComment}</p>
      </div>
    </div>
  );
};
export default Detail;
