import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ConfirmSignUp(props) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        placeholder="Confirmation Code"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        style={styles.input}
      />
      <Button onClick={props.ConfirmSignUp} title="Confirm Sign Up" />
    </div>
  );
}

export default ConfirmSignUp;
