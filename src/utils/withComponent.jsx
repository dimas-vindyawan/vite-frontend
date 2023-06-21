import React from "react";
import { useState } from "react";

function withComponent(OriginComponent) {
  return (props) => {
    const [nomor, setNomor] = useState(0);

    const handlerNomor = () => {
      setNomor(nomor + props.counter);
    };

    return (
      <OriginComponent nomor={nomor} handlerNomor={handlerNomor} {...props} />
    );
  };
}

export default withComponent;
