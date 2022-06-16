import Grid from "@mui/material/Grid";

function Item2(props) {
  return (
    <Grid item xs={1} sm={1} md={1} lg={1}>
      <div className="item-box">
        <img src={props.data.img_url} />
      </div>
    </Grid>
  );
}

export default Item2;
