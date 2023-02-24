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
    <div>
      <h1>{post.title}</h1>
      <img src="" alt="" />
      <p></p>
      <h2></h2>
      <p></p>
    </div>
  );
};
export default Detail;
