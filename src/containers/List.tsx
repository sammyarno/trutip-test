import { useCallback, useEffect, VFC } from "react";
import { 
  // Spinner, Placeholder, 
  Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import qs from "query-string";
// import useFetchPokemons from "../hooks/useFetchPokemons";
import "../styles/list.scss";
import { DATA_PER_PAGE } from "../utils/constants";
// import { usePokemonContext } from "../context/pokemon";
import { dispatch } from "../store";
import { fetchPokemons } from "../store/pokemon/actions";
import { ReduxStore } from "../models/store";
import { useSelector } from "react-redux";

const List: VFC = () => {
  // const { loading, data, refetch } = useFetchPokemons();
  // const { ownedPokemons } = usePokemonContext();
  const { pokemonList: data, ownedPokemons } = useSelector((store: ReduxStore) => store.pokemon);
  const navigate = useNavigate();

  const handlePokemonClick = (name = "") => {
    navigate(`/detail/${name}`);
  };

  const handleLoadClick = async () => {
    const queryString = qs.parseUrl(data.meta.nextUrl || "").query;

    dispatch(
      await fetchPokemons({
        limit: Number(queryString.limit) + DATA_PER_PAGE,
        offset: 0,
      })
    );
  };

  const getData = useCallback(async () => dispatch(await fetchPokemons()), []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="list page">
      <h1>Pokemon List</h1>
      <h6 className="text-muted mb-3">owned: {ownedPokemons.length}</h6>
      <p className="text-end mb-3">
        <small>
          Results: {data.meta.count}
        </small>
      </p>
      <div className="list-container">
        {
          data.items.map((item) => (
            <div
              className="list-item px-3 py-2"
              onClick={() => handlePokemonClick(item.name)}
              key={item.name}
            >
              <p>
                <b>{item.name}</b>
              </p>
            </div>
          ))
        }

        {data.meta.nextUrl && (
          <div className="action-wrapper">
            <Button className="outline-success" onClick={handleLoadClick}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
