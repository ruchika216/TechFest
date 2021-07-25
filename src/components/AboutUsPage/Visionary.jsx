import React from "react";
import image from "../../assets/images/image.jpg";
function Visionary() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="hr-center">
            <span className="hr-text">Our Visionaries</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex flex-wrap">
            <div className="card text-center">
              <div className="card-item">
                <img className="image2" src={image} alt="hello" />
              </div>
              <h5 className="card-title">Prof. Vinay Kumar</h5>
              <p className="card-text">Director</p>
            </div>
            <div className="card text-center">
              <div className="card-item">
                <img className="image2" src={image} alt="hello" />
              </div>
              <h5 className="card-title">Prof. Vinay Kumar</h5>
              <p className="card-text">Director</p>
            </div>
            <div className="card text-center">
              <div className="card-item">
                <img className="image2" src={image} alt="hello" />
              </div>
              <h5 className="card-title">Prof. Vinay Kumar</h5>
              <p className="card-text">Director</p>
            </div>
            <div className="card text-center">
              <div className="card-item">
                <img className="image2" src={image} alt="hello" />
              </div>
              <h5 className="card-title">Prof. Vinay Kumar</h5>
              <p className="card-text">Director</p>
            </div>
            <div className="card text-center">
              <div className="card-item">
                <img className="image2" src={image} alt="hello" />
              </div>
              <h5 className="card-title">Prof. Vinay Kumar</h5>
              <p className="card-text">Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Visionary;
