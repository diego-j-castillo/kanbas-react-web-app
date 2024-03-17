import React, { useState, useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  const [result, setResult] = useState(0);
  const fetchSum = async (a :any, b :any) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a :any, b :any) => {
    const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters in URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      {/* 3.1 */}
      <h4>Calculator</h4>
      <input className="form-control w-50" type="number" value={a} 
        onChange={(e) => setA(parseInt(e.target.value))} />
      <input className="form-control w-50" type="number" value={b} 
        onChange={(e) => setB(parseInt(e.target.value))} />
      <h4>Fetch Result</h4>
      <button className="btn btn-primary" onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button className="btn btn-danger" onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>
      <input value={result} type="number" readOnly />
      <h4>Path Parameters</h4>
        <a className="btn btn-primary" href={`http://localhost:4000/a5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a className="btn btn-danger" href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a className="btn btn-success" href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
          Muliply {a} x {b}
        </a>
        <a className="btn btn-warning" href={`http://localhost:4000/a5/divide/${a}/${b}`}>
          Divide {a} / {b}
        </a>
        <h4>Query Parameters</h4>
        <a className="btn btn-primary"
          href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>
        <a className="btn btn-danger"
          href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Substract {a} - {b}
        </a>
        <a className="btn btn-success"
          href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
          Multiply {a} * {b}
        </a>
        <a className="btn btn-warning"
          href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
          Divide {a} / {b}
        </a>
    </div>
  );
};
export default EncodingParametersInURLs;