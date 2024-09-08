

const Login = () => {
  return (
    <div>
      <div className="row p-5">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
          />
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <button className="btn   rounded-pill main-btn p-4 " to={"/login"}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login
