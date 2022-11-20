import { FC } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

type CommonDate = { day: number; month: number; year: number };

const common_date_generator = (date: CommonDate) =>
  new Date(date.year, date.month, date.day).toDateString().slice(4);

const PostHead: FC = () => {
  const writer = "Donald Biden";
  const testDate = {
    day: 25,
    month: 9,
    year: 2021,
  };

  return (
    <Grid2 container style={{ margin: "30px 0px" }}>
      <Grid2 xs={6} md={3}>
        <img src="#" width="320" height="240" />
      </Grid2>
      <Grid2 xs={6} md={9}>
        <h1>Post Title</h1>
        <p>
          <span>Written by:- {writer} </span> <br />
          <span>Published On:- {common_date_generator(testDate)}</span>
          <br />
          <span>Category:- News</span>
        </p>
      </Grid2>
    </Grid2>
  );
};

export default PostHead;
