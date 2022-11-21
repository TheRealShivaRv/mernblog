import { FC } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { common_date_generator } from "../../utils";

type PostHeadProps = {
  id: number;
  title: string;
  date: Date | string;
  author: string;
  category: string | string[];
  thumbnail: string;
};

const PostHead: FC<PostHeadProps> = (props) => {
  return (
    <Grid2 container style={{ margin: "30px 0px" }}>
      <Grid2 xs={6} md={3}>
        <img src={props.thumbnail} width="320" height="240" />
      </Grid2>
      <Grid2 xs={6} md={9}>
        <h1>{props.title}</h1>
        <p>
          <span>Written by:- {props.author}</span> <br />
          <span>Published On:- {common_date_generator(props.date)}</span>
          <br />
          <span>Category:- {props.category}</span>
        </p>
      </Grid2>
    </Grid2>
  );
};

export default PostHead;
