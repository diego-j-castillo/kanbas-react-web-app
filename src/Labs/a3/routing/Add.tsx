import React from "react";
import { useParams } from "react-router";

function Add() {
  const { a, b } = useParams();
  return (
    <div>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
export default Add;