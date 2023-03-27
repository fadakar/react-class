import React from 'react'
import { FunctionComponent1 } from "./function-components";
import { FunctionComponent2 } from "./function-components";
import { FunctionComponent3 } from "./function-components";

import { ClassComponet1 } from "./class-components";
import { ClassComponet2 } from "./class-components";

import { ImportantText } from "./function-components";

const ReactComponent = () => {
    const fc1 = FunctionComponent1();
    console.log(fc1);
  
    const fc2 = FunctionComponent2({
      title: "Hello FC",
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    });
    return (
      <div>
        {fc1}
        <FunctionComponent1 />
  
        {fc2}
        <FunctionComponent2
          title="Hello FC"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        />
  
        <FunctionComponent2 message="Boot Camp 1402" title="React Course" />
  
        <FunctionComponent2 message="Boot Camp 1402" title="React Course">
          This is a content of compoonent
        </FunctionComponent2>
        <FunctionComponent2 message="Boot Camp 1402" title="React Course">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </FunctionComponent2>
        <FunctionComponent2 message="Boot Camp 1402" title="React Course">
          <ImportantText content={"This is an important text"} />
        </FunctionComponent2>
  
        <FunctionComponent3 message={"Bood camp 1402- day 2"} />
        <FunctionComponent3 message={"Bood camp 1402- day 2"}>
          <ImportantText content={"This is an important text"} />
        </FunctionComponent3>
  
        <hr />
  
        <ClassComponet1 />
        <ClassComponet2 message="Boot Camp 1402" title="React Course" />
        <ClassComponet2 message="Boot Camp 1402" title="React Course">
          <ImportantText content={"This is an important text"} />
        </ClassComponet2>
      </div>
    );
}

export default ReactComponent