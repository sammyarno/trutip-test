import { VFC } from "react";
import { Spinner, Placeholder, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import qs from 'query-string';
import useFetchPokemons from "../hooks/useFetchPokemons";
import '../styles/list.scss';
import { DATA_PER_PAGE } from "../utils/constants";

const List: VFC = () => {
  const { loading, data, refetch } = useFetchPokemons();
  const navigate = useNavigate();

  const handlePokemonClick = (name = '') => {
    navigate(`/detail/${name}`);
  };

  const handleLoadClick = () => {
    const queryString = qs.parseUrl(data.meta.nextUrl || '').query;

    refetch({
      limit: Number(queryString.limit) + DATA_PER_PAGE,
      offset: 0,
    })
  }

  return (
    <div className="list page">
      <h1 className="mb-3">
        Pokemon List
        <br/>
        <h6 className="text-muted">owned: 3</h6>
      </h1>
      <p className="text-end mb-3">
        <small>
          Results: {loading ? <Placeholder xs={1} /> : data.meta.count}
        </small>
      </p>
      <div className="list-container">
        {
          loading 
          ? (
            <div className="text-center">
              <Spinner animation="border" size="sm" />  
            </div>
          ) : data.items.map(item => (
            <div className="list-item px-3 py-2" onClick={() => handlePokemonClick(item.name)} key={item.name}>
              <p><b>{item.name}</b></p>
            </div>
          ))
        }

        {
          !loading && data.meta.nextUrl && (
            <div className="action-wrapper">
              <Button className="outline-success" onClick={handleLoadClick}>Load More</Button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default List;
