import React from "react";
import "../styles.css";
import Base from "./Base";

const Home = () => {
  return (
    <Base>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/enggbooks-7f009.appspot.com/o/books.jpg?alt=media&token=9a6110fe-5031-4e43-bf0e-949ac938a94b"
        className="img-fluid height-100 rounded-top"
        alt="Books"
      />
      <div className="jumbotron text-center">
        <h1 className="display-4">EnggBooks</h1>
        <p className="lead">For students, by students</p>
        <hr className="my-4" />
        <p>Download your books now!</p>
        <a className="btn btn-dark btn-lg" href="#" role="button">
          Download Now
        </a>
      </div>

      <div className="container-fluid text-center why">
        <h1 className="why-head">Why this Website?</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-3 mt-3 ml-3">
              <div className="card-body">
                <h2 className="card-title">01</h2>
                <h5 className="card-subtitle mb-2 text-muted">
                  Current Situation
                </h5>
                <p className="card-text">
                  In this current COVID-19 Situation, we are not able to go out
                  to buy books .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 mt-3 ml-3">
              <div className="card-body">
                <h2 className="card-title">02</h2>
                <h5 className="card-subtitle mb-2 text-muted">Need</h5>
                <p className="card-text">
                  Many students are not able to study just because of lack of
                  books.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 mt-3 ml-3">
              <div className="card-body">
                <h2 className="card-title">03</h2>
                <h5 className="card-subtitle mb-2 text-muted">Our goal</h5>
                <p className="card-text">
                  To make available excellent study material for all students
                  easily without spending much time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3 mt-3 ml-3">
              <div className="card-body">
                <h2 className="card-title">04</h2>
                <h5 className="card-subtitle mb-2 text-muted">Our aim</h5>
                <p className="card-text">
                  We aim to make textbooks and reference books available to
                  every engineering student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScpBR3C9QTUuBONDDRt155_It8RhJU19hGfaviLKuylCVSp8w/viewform?embedded=true"
        width="100%"
        height="750"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Base>
  );
};

export default Home;
