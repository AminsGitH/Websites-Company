import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Features = () => {
  return (
    <>
      <section className="features text-center pt-5 pb-5">
      <div className="container  ">
        <div className="main-title mt-5 mb-5 position-relative">
          <FontAwesomeIcon
            className="mb-4 fa-6x"
            icon="fa-solid fa-network-wired"
            style={{ color: "#FFD43B" }}
          />
          <h2>Services</h2>
          <p className="text-black-50 text-uppercase">
            We prodive professional services at
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <FontAwesomeIcon
                  icon="fa-solid fa-1 "
                  className="position-absolute bottom-0 number"
                />

                <FontAwesomeIcon
                  icon="fa-solid fa-pencil "
                  className="position-absolute bottom-0 icon fa-4x"
                />
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Responsive websites</h4>
              <p className="text-black-50 lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                mollitia illum ratione, maiores ipsam voluptate facilis error
                totam quae
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <FontAwesomeIcon
                  icon="fa-solid fa-2 "
                  className="position-absolute bottom-0 number"
                />

                <FontAwesomeIcon
                  icon="fa-solid fa-desktop"
                  className="position-absolute bottom-0 icon fa-4x"
                />
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">
                24 Hours customer Service
              </h4>
              <p className="text-black-50 lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                mollitia illum ratione, maiores ipsam voluptate facilis error
                totam quae
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <FontAwesomeIcon
                  icon="fa-solid fa-3 "
                  className="position-absolute bottom-0 number"
                />

                <FontAwesomeIcon
                  icon="fa-solid fa-plug"
                  className="position-absolute bottom-0 icon fa-4x"
                />
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">
                Ready to start your project immedietly
              </h4>
              <p className="text-black-50 lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                mollitia illum ratione, maiores ipsam voluptate facilis error
                totam quae
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Features
