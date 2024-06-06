import React, { useState } from "react";
import Quiz from "./Quiz";

export default function Head() {
  const [show, setShow] = useState(false);

  const ShowName = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* navbar */}
      <nav class="navbar bg-dark">
        <div class="container">
          <a class="navbar-brand text-white" href="#">
            <img
              src="https://cdn.britannica.com/mendel-resources/3-117/images/games/games_nav_logo.png?v=3.117.4"
              alt="Bootstrap"
              width="250"
            />
          </a>
        </div>
      </nav>

      <div className="d-flex justify-content-center mt-4">
        <div class="card" style={{ width: "50rem" }}>
          <div
            class="card-body rounded"
            style={{
              height: 650,
              backgroundImage:
                "url('https://media.istockphoto.com/id/1128222520/photo/map-of-united-states-of-america-on-national-flag-background-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=MOy-zRT0s_dxwkGZpV_XoXqqXZL2LolZXMmM9M5cXAU=')",
            }}
          >
            <div
              class="card text-center position-absolute top-50 start-50 translate-middle"
              style={{ width: "20rem" }}
            >
              <div class="card-body">
                <h5 class="card-title fs-2">
                  What's That <br /> Symobol Mean?
                </h5>
                {!show && <button className="btn btn-secondary fs-5" onClick={ShowName}>Start</button>}
                {show && <Quiz />}
              </div>
              <h5>5 Questions</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
