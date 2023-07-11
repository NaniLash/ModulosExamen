export function ButtonsDanger(props) {
  return (
    <>
      <button className="btn btn-danger fw-bold ms-2">{props.name}</button>
    </>
  );
}

export function Buttonsinfo(props) {
  return (
    <>
      <button className="btn btn-info text-white fw-bold ms-2">
        {props.name}
      </button>
    </>
  );
}

export function ButtonsPrimary(props) {
  return (
    <>
      <button type="button" class="btn btn-primary">
        {props.name}
      </button>
    </>
  );
}
