import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "./runtime.js";
import notebook from "./main.js";
import "./style.css";
function Visualiser() {
  const resetButtonRef = useRef();
  const viewOptionsRef = useRef();
  const rSquaredPlotRef = useRef();
  const regressionPlotRef = useRef();
  const widthRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "viewOptions") return new Inspector(viewOptionsRef.current);
      if (name === "rSquaredPlot")
        return new Inspector(rSquaredPlotRef.current);
      if (name === "regressionPlot")
        return new Inspector(regressionPlotRef.current);
      if (name === "resetButton") return new Inspector(resetButtonRef.current);
      if (name === "width") return new Inspector(widthRef.current);
      return ["animation"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <div className="container">
      <h3 className="item">
        Improve your intuition about the behaviour of linear regression!
      </h3>
      <div className="item" ref={viewOptionsRef} />
      <div className="item" ref={rSquaredPlotRef} />
      <div className="item" ref={regressionPlotRef} />
      <div className="item" ref={widthRef} />
      <div className="item" ref={resetButtonRef} />
      <p className="item">
        Credit: <a href="https://observablehq.com/">@observablehq</a>
      </p>
      <br />
      <section className="item">
        Here are the interactions that are possible:
      </section>
      <br />
      <ul>
        <li>
          <b>Click</b> anywhere on the plot to insert a new data point.
        </li>
        <li>
          <b>Drag</b> any data point to modify its position.
        </li>
        <li>
          <b>Click</b> any data point to remove it from the plot.
        </li>
      </ul>
      <br />
      <section>
        The best-fit line will adjust accordingly to minimize the mean-squared
        error on the current data points. The R<sup>2</sup> value is also
        displayed.
      </section>
    </div>
  );
}

export default Visualiser;
