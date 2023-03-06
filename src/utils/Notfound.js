import React from "react";
import { Link } from "react-router-dom";
// import Layout from "../components/layout/Layout";

function Notfound() {
  return (
    // <Layout>
    <div>
      <div className="page-wrap d-flex flex-row align-items-center my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 mt-5 d-block">404</span>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <Link
                to={"/"}
                replace
                style={{ textDecoration: "none", color: "white" }}
                className="btn btn-secondary"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
}

export default Notfound;
