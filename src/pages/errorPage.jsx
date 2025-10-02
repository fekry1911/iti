import React from "react";

export default function ErrorPage() {
  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      <div>
        <h1
          style={{ fontWeight: "500", fontSize: "110px", letterSpacing: "4px" }}
        >
          404 Not Found
        </h1>
        <p style={{ fontWeight: "400", fontSize: "16px" }}>
          Your visited page not found. You may go home page.
        </p>
      </div>
    </div>
  );
}
