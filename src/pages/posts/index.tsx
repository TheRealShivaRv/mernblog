import { FC, useEffect, useState } from "react";
import PostItem from "./PostItem";

const fetchPostsData = async () => {
  try {
    const res = await fetch("http://localhost:3001/posts");
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err);
  }
};

export const Posts: FC = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostsData().then((data: any) => {
      setPosts(data);
      console.log(data);
    });
  }, []);

  return (
    <ul>
      {posts.map((item: any) => (
        <li>
          <PostItem data={item}/>
        </li>
      ))}
    </ul>
  );
};
