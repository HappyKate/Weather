import React from "react";
import { Button } from "reactstrap";

const Form = props => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Город" />
    <Button color="secondary mt-3 md-3">Полулчить погоду</Button>
  </form>
);
export default Form;
