import { useState, VFC } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PokemonModal from "../components/PokemonModal";
import { usePokemonContext } from "../context/pokemon";
import useFetchPokemon from "../hooks/useFetchPokemon";
import { OwnedPokemon } from "../models/pokemon";
import '../styles/detail.scss';

const Detail: VFC = () => {
  const { name } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { addOwnedPokemons } = usePokemonContext();

  const toggleModal = () => setShowModal(prev => !prev);

  const { loading, data } = useFetchPokemon(name);

  const handleSubmitPokemon = (pokemon: OwnedPokemon) => {
    addOwnedPokemons(pokemon);
    toggleModal();
  };

  return (
    <div className="detail page">
      <div className="text-start mb-3">
        <small className="text-success" onClick={() => navigate('/')}>go back</small>
      </div>
      <h1 className="text-capitalize mb-3">
        {name}
      </h1>
      {
        loading
        ? (
          <div className="text-center">
            <Spinner animation="border" size="sm" />  
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="text-center mb-2">
                <img src={data.imageUrl} alt={name} />
              </div>
              <Row>
                <Col xs={4} className="text-start">ID</Col>
                <Col xs={8} className="text-start text-capitalize">: {data.id}</Col>
              </Row>
              <Row>
                <Col xs={4} className="text-start">Name</Col>
                <Col xs={8} className="text-start text-capitalize">: {data.name}</Col>
              </Row>
              <Row>
                <Col xs={4} className="text-start">Base EXP</Col>
                <Col xs={8} className="text-start text-capitalize">: {data.baseExp}</Col>
              </Row>
              <Row>
                <Col xs={4} className="text-start">Height</Col>
                <Col xs={8} className="text-start text-capitalize">: {data.height}</Col>
              </Row>
              <Row>
                <Col xs={4} className="text-start">Weight</Col>
                <Col xs={8} className="text-start text-capitalize">: {data.weight}</Col>
              </Row>
            </div>

            <div className="d-grid">
              <Button variant="success" onClick={toggleModal}>CATCH</Button>
            </div>
          </>
        )
      }
      <PokemonModal show={showModal} onClose={toggleModal} data={data} onSubmit={handleSubmitPokemon} />
    </div>
  );
};

export default Detail;
