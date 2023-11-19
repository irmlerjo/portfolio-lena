import { React } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {useParams} from "react-router-dom"
import {
  dataportfolio,
  meta
} from "../../content_option";

export const ProjectDetail = () => {
  const { handle } = useParams()
const [project,setProject] = React.useState('')
  React.useEffect(()=>{
    setProject(handle)
  },[handle])
  return (
    <Container>
      <Row>
        <p>{project}</p>
      </Row>
    </Container>
  );
};
