const Component1 = (props) => {
  return (
    <div>
      <p>Hey {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Component1;
export const Component2 = (props) => {
  return (
    <div>
      <p>Hello:{props.name}</p>
      <p>Age:{props.age} </p>
    </div>
  );
};
