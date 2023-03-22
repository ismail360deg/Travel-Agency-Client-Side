import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div>
      <section className="d-flex justify-content-center">
        <div
          class="spinner-grow "
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden ">Loading...</span>
        </div>
      </section>
    </div>
  );
};

export default Loading;
