// import axios from "axios";
import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Card from "./Card";

const Index = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios("http://localhost:3001/posts").then((json) => setPosts(json.data));
  // }, []);

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
