import React, { useState } from "react";

export default function Head({setNextPage}) {
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
              height: 630,
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
                  Information about USA
                </h5>
                <button className="btn btn-secondary fs-5" onClick={()=>(setNextPage(false))}>Start</button>
              </div>
              <h5>5 Questions</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}