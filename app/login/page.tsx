import React from "react";

export default function page() {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div className="col-md-4 col-10 m-auto m-2">
        <div className="rounded shadow p-3">
          <h2 className="text-center">Login</h2>
          <input
            type="text"
            placeholder="email"
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="password"
            className="my-2 form-control"
          />
          <input
            type="submit"
            value="Login"
            className="btn btn-success w-100"
          />
        </div>
      </div>
    </div>
  );
}
