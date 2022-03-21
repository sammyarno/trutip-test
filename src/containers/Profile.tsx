import { VFC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { usePokemonContext } from "../context/pokemon";
import '../styles/profile.scss';

const Profile: VFC = () => {
  const { ownedPokemons, removeOwnedPokemon } = usePokemonContext();

  return (
    <div className="profile page">
      <h1>Owned Pokemons</h1>
      <h6 className="text-muted mb-3">owned: {ownedPokemons.length}</h6>
      <Row className="pokemon-container">
        {
          ownedPokemons.map(pokemon => (
            <Col xs={6}>
              <div className="pokemon">
                <img src={pokemon.imageUrl} alt={pokemon.name} />
                <p>{pokemon.nickname}</p>
                <Button variant="outline-danger" size="sm" onClick={() => removeOwnedPokemon(pokemon.id)}>Release</Button>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Profile;
