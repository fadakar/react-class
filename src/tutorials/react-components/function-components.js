/*
   function Componet() {
        ....
        return jsx
   }

   const Component = function () {
        ...
        return js
   }

   const Component = () => {
        ...
        return jsx
   }
*/

const style = {
  backgroundColor: "#ccc",
  textAlign: "center",
  padding: "32px",
  marginBottom: "20px",
};

export const FunctionComponent1 = () => {
  return (
    <div style={style}>
      <h2>Hello Function Componet</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        doloremque nihil et rem fuga totam odit optio, mollitia porro corporis
        voluptate, adipisci sed ad maxime placeat tenetur facere numquam
        quibusdam!
      </p>
    </div>
  );
};

export const FunctionComponent2 = (props) => {
     console.log(props)
  return (
    <div style={style}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      {props.children}
    </div>
  );
};

export const FunctionComponent3 = ({ title = "React Course", message, children }) => {
  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{message}</p>
      {children}
    </div>
  );
};

export const ImportantText = ({ content }) => {
  return (
    <p>
      <strong>{content}</strong>
    </p>
  );
};
