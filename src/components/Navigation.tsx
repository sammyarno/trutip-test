import { VFC } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigation: VFC = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-tab border-top shadow">
      <Row className="py-2">
        <Col className="border-end" onClick={() => navigate('/')}>
          <p><b>LIST</b></p>
        </Col>
        <Col onClick={() => navigate('/profile')}>
          <p><b>OWNED</b></p>
        </Col>
      </Row>
    </div>
  )
};

export default Navigation;
