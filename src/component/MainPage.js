import img from "../img/truck.png";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import alert from '../img/alert.png'
import collection from '../img/collection.png'
import paperless from '../img/paperless.png'
import '../style/main.css'

function MainPage() {
  return (
    <div>
      <div className="main-container">
        <Row style={{ backgroundImage: `url(${img})`, height: "700px" }} className="main-page">
          <Col style={{ padding: "48px" }}>
            <div className="container main-card center">
              <h4 className="white fowe800 text36 center">A Smarter Way to Manage Your Waste </h4>
              <h5 className="text24 white fowe500 mabo32 center">
                Eco-friendly waste management for a sustainable future, because every small effort
                counts towards making the world a better place.
              </h5>
              <button className="btn_secondary_green round"> Learn more</button>
            </div>
          </Col>
        </Row>
      </div>
      {/* END  */}
      <div className="container mato64 cards-section">
        <Row>
          <Col>
            <div className="card-img center rounded">
              <img className="mato64 center" src={collection} alt="Card image cap" />
              <div class="card-content mato64">
                <h5 className="text24 white fowe800">Collection Schedule</h5>
                <p className="white text14">
                  You get a custom collection schedule for your registered waste and receive
                  reminders about the schedule collection date and time.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-img center rounded">
              <img className="mato64" src={paperless} alt="Card image cap" />
              <div className="card-content mato64">
                <h5 className="text24 white fowe800">Paperless Billing</h5>
                <p className="white text14">
                  The app comes with a payment gateway to allow users to pay for waste collection
                  services. It can also generate receipts for you to keep.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-img center rounded">
              <img class="mato64" src={alert} alt="Card image cap" />
              <div class="card-content mato64">
                <h5 className="text24 white fowe800">Text Alerts</h5>
                <p class="white text14">
                  Receive text alerts about any potential service delays, inclement weather and your
                  regular pickup schedule.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default MainPage;