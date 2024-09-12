import { useState } from "react";
import Children from "./child";

const Parent = () => {
  const [name, setName] = useState<string>("");

  const displayChangeValue = (event: string) => {
    setName(event);
  };

  return (
    <>
      <Children name={name} onValueChange={displayChangeValue} />
      <br />
      <h1>{name}</h1>
    </>
  );
};

export default Parent;
