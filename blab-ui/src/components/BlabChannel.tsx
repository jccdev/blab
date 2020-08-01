import React from "react";
import { useParams } from "react-router-dom";

function BlabChannel(): JSX.Element {
  const { name } = useParams();
  return <div>Channel: {name}</div>;
}

export default BlabChannel;
