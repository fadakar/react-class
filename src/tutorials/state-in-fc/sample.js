import React, { useState, useEffect } from "react";

function Sample({ message }) {
  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState("My Description");

  const incrementHandler = () => {
    setCounter(counter + 1);
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  /**
   * const [state, setState] = useState(init)
   *
   * {state}
   * setState(new value)
   *
   * useEffect(callback function, dependencies)
   * useEffect(() => {
   *     mounting and after updating each dependencies
   *     return () => {
   *       unmounting and before updateing each dependencies
   *     }
   *   }, [states or props])
   */

  /* sample 1 */
  //   useEffect(() => {
  //     console.log("1. Mount and After Update for any state or props");
  //     return () => {
  //       console.log("1-1. Unmount and Before Update any state or props");
  //     };
  //   });

  /* sample 2 */
  //   useEffect(() => {
  //     console.log("2. Mount and After Update depend on counter");
  //     return () => {
  //       console.log("2-1. Unmount and Before Update counter");
  //     };
  //   }, [counter]);

  /* sample 3 */
  //   useEffect(() => {
  //     console.log("3. Mount and After Update depend on description");
  //     return () => {
  //       console.log("3-1. Unmount and Before Update description");
  //     };
  //   }, [description]);

  /* sample 4 */
  //   useEffect(() => {
  //     console.log('4. Mount and After Update depend on description or counter');
  //     return () => {
  //       console.log('4-1. Unmount and Before Update description or counter');
  //     };
  //   }, [description, counter]);

  /* sample 5 */
  useEffect(() => {
    console.log("5. Mount");
    return () => {
      console.log("5-1. Unmount");
    };
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      {message}
      <hr />
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button
        onClick={() => {
          setDescription(`${description}, add some desc`);
        }}
      >
        Add Descripioon
      </button>
      <p>Counter : {counter}</p>
      <p>
        Description : <b>{description}</b>
      </p>
    </div>
  );
}

export default Sample;
