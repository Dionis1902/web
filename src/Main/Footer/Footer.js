import React from "react";

function Footer(){
    return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset mr-3">
            <i className="fab fa-facebook-f"/>
          </a>
          <a href="" className="me-4 text-reset mr-3">
            <i className="fab fa-twitter"/>
          </a>
          <a href="" className="me-4 text-reset mr-3">
            <i className="fab fa-google"/>
          </a>
          <a href="" className="me-4 text-reset mr-3">
            <i className="fab fa-instagram"/>
          </a>
          <a href="" className="me-4 text-reset mr-3">
            <i className="fab fa-linkedin"/>
          </a>
          <a href="" className="me-4 text-reset mr-3">
            <i className="fab fa-github"/>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-paw mr-1"/>
                    PetShop
              </h6>
              <p>
                Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i className="fas fa-home me-3"/> Lviv, Stepan Bandera street</p>
              <p>
                <i className="fas fa-envelope me-3"/> info@petshop.com
              </p>
              <p><i className="fas fa-phone me-3"/> +380 50 855 4833</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" >
        2021 IoT © Copyrating all right reserved, bla bla
      </div>
    </footer>
    );
}

export default Footer;