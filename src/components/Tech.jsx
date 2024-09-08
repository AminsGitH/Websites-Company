import { Link } from "react-router-dom";

const Tech = () => {
  return (
    <>
      <div className="techs pt-5 pb-5 text-center">
        <div className="container">
          <div className="row align-items-center gap-5 ">
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                src="/src/images/logo-salesforce-png-salesforce-company-logo-png-download-600.png"
                alt=""
                className="img-fluid m-5 "
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                src="./src/images/bmw-car-company-logo-png-7.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                src="/src/images/pngtree-company-name-logo-design-for-award-picture-image_8228303.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                src="/src/images/LBC_Mark_Closed_Blk_Out.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img
                src="/src/images/The+Small+Pool+Co+300dpi.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project text-center pt-5 pb-5 text-light">
        <h2>Start Your Project Now.</h2>
        <p className="text-white-50">
          Message us with your project details and leave the rest to us.
        </p>
        <Link
          className="btn   rounded-pill main-btn p-3 mt-5 mb-5 "
          to={"/register"}
        >
          START A NEW PROJECT
        </Link>
      </div>
    </>
  );
};

export default Tech;
