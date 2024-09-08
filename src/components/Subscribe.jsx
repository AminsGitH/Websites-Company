const Subscribe = () => {
  return (
    <>
      <div className="subscribe pt-5 pb-5 text-center text-md-start">
        <div className="container">
          <form className="row align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="fw-bold fs-5">Subscribe to our newsletter</div>
            </div>
            <div className="col-md-6 col-lg-7 ">
              <input
                className="w-100 p-2 bg-transparent text-light"
                type="text"
                placeholder="Enter Your E-mail"
              />
            </div>
            <div className="col-md-6 col-lg-2 ">
              <input
                className="btn rounded-pill mt-sm-3"
                type="submit"
                value="subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
