import { FC, useEffect, useState, Fragment } from "react";
import PostHead from "./PostHead";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../../declarations";

export const Post: FC = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState<PostType | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts/" + postId)
      .then((res) => res.json())
      .then((data: PostType) => {
        setPostData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        {postData && (
          <Fragment>
            <PostHead
              id={postData.id}
              title={postData.title}
              date={postData.date}
              author={postData.author}
              category={postData.category}
              thumbnail={postData.thumbnail}
            />
            <hr />
            <p>{postData?.body}</p>
          </Fragment>
        )}
        {!postData && (
          <p>No Post found for this post id</p>
        )}
      </Container>
    </Fragment>
  );
};
