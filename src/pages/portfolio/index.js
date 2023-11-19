import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import psychotrop from '../../assets/images/psychotrop/detail_touch.jpg'
import nightlife from '../../assets/images/nightlifeconversations/table_perspective.jpg'
import crossroads from '../../assets/images/crossroads/overview.jpg'
import sugarheist from '../../assets/images/sugarheist/gameplay3.jpg'
import shapeshifting from '../../assets/images/shapeshifting/detail_button.jpg'
import seasons from '../../assets/images/seasons/overview.png'

export const Portfolio = () => {
  let images=[]
  images['nightlife'] = nightlife;
  images['psychotrop'] = psychotrop;
  images['seasons'] = seasons;
  images['shapeshifting'] = shapeshifting;
  images['sugarheist'] = sugarheist;
  images['crossroads'] = crossroads;
  
  // const handleToggle = () => {
  //   setActive(!isActive);
  //   document.body.classList.toggle("ovhidden");
  // };

  return (
    <HelmetProvider>
      <Container className="About-header">
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet> */}
        {/* <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mmy-4 ml-0b-4"> projects </h1>{" "}
            <hr className="t_border  text-left" />
          </Col>
        </Row> */}
        <Row>
          {/* <Col lg="4">
          <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                  <Link  onClick={handleToggle} to="/" className="my-2">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-2"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-2">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-2"> Contact</Link>
                  </li>
                </ul>
              </div>
          </Col> */}
          <Col lg="8">
          <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={images[data.img]} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <Link to={"project/"+data.img}>view project</Link>
                </div>
              </div>
              );
            })}
          </div>
        </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
