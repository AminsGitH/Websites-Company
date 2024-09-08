import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      
      <div className="our-work pt-5 pb-5 text-center">
        <div className="container">
          <section className="main-title mt-5 mb-5 position-relative">
            <FontAwesomeIcon
              className="mb-4 fa-6x"
              icon="fa-solid fa-network-wired"
              style={{ color: "#FFD43B" }}
            />
            <h2>Our Projects</h2>
            <p className="text-black-50 text-uppercase">Prepare to be amazed</p>
          </section>

          <ul className="d-flex justify-content-center list-unstyled">
            <li className="active rounded-pill">All</li>
            <li>Design</li>
            <li>Ecommerce</li>
            <li>Portifolio</li>
            <li>Branding</li>
          </ul>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="/src/images/Screenshot 2024-08-25 104223.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="/src/images/Screenshot 2024-08-25 104342.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="https://cdn.hackr.io/uploads/posts/attachments/1683704157c2lIUSQChl.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="https://images.milanote.com/milanote/752a997a-9d50-474d-b4d7-745540f0a4b4_website-design-plan-example.png?auto=compress,format"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="https://pomagency.com/wp-content/uploads/2019/12/projects-1030x694.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="https://w3layouts.com/wp-content/uploads/2023/04/UI-Portfolio-Website-Template-scaled-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8V8fqoyF3UMmbG6LA5ObaYFuSY_Dbg-FJA&s"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-project="Application">
                <img
                  src="https://cdn.shopify.com/s/files/1/0902/5292/files/Twitter.jpg?v=1638979734"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link className="btn  rounded-pill main-btn text-uppercase p-3" to={"/projects"}>
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects
