import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material/";
import { Post } from "../../declarations";
import { common_date_generator } from "../../utils";

const PostItem: FC<{ data: Post }> = (props) => {
  const post_date = common_date_generator(props.data.date);
  return (
    <Link to={"/posts/" + props.data.id}>
      <Container maxWidth="xl">
        <div>
          <img src={props.data.thumbnail} />
        </div>
        <div>
          <h3>{props.data.title}</h3>
          <p>
            Date Published:- <span>{post_date}</span>
          </p>
          <p>
            Author:- <span> {props.data.author}</span>
          </p>
          <p>
            Category:- <span> {props.data.category}</span>
          </p>
        </div>
      </Container>
    </Link>
  );
};

export default PostItem;
