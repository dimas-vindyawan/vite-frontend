import React from "react";
import { useState } from "react";

function withComponent(OriginComponent) {
  return (props) => {
    const [nomor, setNomor] = useState(0);

    const plusNomor = () => {
      setNomor(nomor + props.counter);
    };

    const minNomor = () => {
      setNomor(nomor - props.counter);
    };

    return (
      <OriginComponent
        nomor={nomor}
        plusNomor={plusNomor}
        minNomor={minNomor}
        {...props}
      />
    );
  };
}

export default withComponent;
