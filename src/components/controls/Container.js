import React from "react";
import { withStyles } from "material-ui/styles";
import Title from "./Title";

const styles = () => ({
  root: {
    borderTop: "1px solid red",
    padding: "10px 5px 5px 5px",
    position: "relative"
  }
});

const Container = props => (
  <div className={props.classes.root}>
    <Title title={props.title} />
    <br />
    <div>{props.children}</div>
  </div>
);

export default withStyles(styles, { withTheme: true })(Container);
