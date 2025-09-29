// App.js
import LoginPage from "./pages/loginPage";
import LoginAnimation from "./pages/animation";

function App() {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="container-fluid min-vh-100 d-flex align-items-center"
    >
      <div className="row w-100">
        <div
          style={{ backgroundColor: "#7F5EFF" }}
          className="col-12 col-lg-8 d-flex align-items-center justify-content-center"
        >
          <LoginAnimation />
        </div>

        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
          <LoginPage />
        </div>
      </div>
    </div>
  );
}

export default App;
