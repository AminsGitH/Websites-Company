import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Stuff = () => {
  return (
    <>
      <div className="stuff">
        <div className="container">
          <section className="main-title mt-5 mb-5 position-relative text-center">
            <FontAwesomeIcon
              className="mb-4 fa-6x"
              icon="fa-solid fa-network-wired"
              style={{ color: "#FFD43B" }}
            />
            <h2>About us</h2>
            <p className="text-black-50 text-uppercase">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tenetur suscipit quasi eius necessitatibus eaque soluta quos eos,
              fugiat repellendus saepe laboriosam optio ullam dolorem ad
              consequatur harum, veritatis porro.
            </p>
          </section>
          <div className="description text-center m-auto text-black-50 mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            inventore enim, commodi eaque tempore, vel nisi voluptatem dolorem
            omnis natus illo, quo deleniti deserunt. Corporis, deserunt dolores.
            Itaque, enim assumenda!
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 text-center text-md-start">
              <div className="text">
                <h4>Amin's Deisgn</h4>
                <p className="text-black-50 fs-6">
                  Harum doloribus tempora aspernatur minus vitae similique
                  deleniti ex ipsa illo quas suscipit obcaecati pariatur illum
                  eum inventore, consequuntur ullam provident alias!
                </p>
                <p className="text-black-50 fs-6">
                  {" "}
                  ex ipsa illo quas suscipit obcaecati pariatur illum eum
                  inventore, consequuntur ullam provident alias!
                </p>
                <Link className="btn  rounded-pill main-btn" to={"/login"}>
                  Order Now
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="image">
                <img className='img-fluid'
                  src="https://resourceboy.com/wp-content/uploads/2023/04/perspective-sight-of-laptop-website-mockup.jpg"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stuff
