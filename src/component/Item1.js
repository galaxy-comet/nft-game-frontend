import Grid from "@mui/material/Grid";

function Item1(props) {
  return (
    <Grid item xs={1} sm={1} md={1} lg={1}>
      <div className="item-box">
        <img src={props.data.img_url} />
        <div className="item-num">{props.data.count}</div>
      </div>
    </Grid>
  );
}

export default Item1;
