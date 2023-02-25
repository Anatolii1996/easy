import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
import { db } from "../firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const Detail = () => {
  const [posts, setPosts] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const q = query(collection(db, "Pages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setPosts(todosArr);
    })
    return () => unsubscribe()
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
