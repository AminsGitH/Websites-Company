import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="blog pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative text-center">
            <FontAwesomeIcon
              className="mb-4 fa-6x"
              icon="fa-solid fa-network-wired"
              style={{ color: "#FFD43B" }}
            />
            <h2>Read Our Blog</h2>
            <p className="text-black-50 text-uppercase">New Stories</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card w-100">
                <img
                  src="/src/images/blog.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <span className="text-black-50">6 Sept. 2024.</span>
                  <h5 className="card-title">Some Blog</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card w-100">
                <img
                  src="/src/images/blog.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <span className="text-black-50">6 Sept. 2024.</span>
                  <h5 className="card-title">Some Blog</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card w-100">
                <img
                  src="/src/images/blog.png"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <span className="text-black-50">6 Sept. 2024.</span>
                  <h5 className="card-title">Some Blog</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Link
              className="btn   rounded-pill main-btn p-4 "
              to={"/login"}
            >
              More Stories
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
