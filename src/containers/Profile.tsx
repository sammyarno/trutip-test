import { VFC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { usePokemonContext } from "../context/pokemon";
import { ReduxStore } from "../models/store";
import { dispatch } from "../store";
import { removeOwnedPokemon } from "../store/pokemon/actions";
import '../styles/profile.scss';

const Profile: VFC = () => {
  // const { ownedPokemons, removeOwnedPokemon } = usePokemonContext();
  const { ownedPokemons } = useSelector((store: ReduxStore) => store.pokemon);

  const handleRemovePokemon = (id: number) => {
    dispatch(removeOwnedPokemon(id));
  }

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
                <Button variant="outline-danger" size="sm" onClick={() => handleRemovePokemon(pokemon.id)}>Release</Button>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Profile;
