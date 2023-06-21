import withComponent from "../utils/withComponent";

function Button(props) {
  console.log(props);
  return (
    <div>
      <h3>x + {props.counter}</h3>
      <p>{props.nomor}</p>
      <button onClick={props.handlerNomor}>tambah</button>
    </div>
  );
}

export default withComponent(Button);
