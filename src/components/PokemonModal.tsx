import { ChangeEvent, MouseEvent, useState, VFC } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { OwnedPokemon, Pokemon } from "../models/pokemon";

interface PokemonModalProps {
  show: boolean;
  onClose: () => void;
  data: Pokemon;
  onSubmit: (pokemon: OwnedPokemon) => void;
}

const PokemonModal: VFC<PokemonModalProps> = props => {
  const { data, onClose, onSubmit, show } = props;
  const [nickname, setNickname] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmitClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();

    const pokemon: OwnedPokemon = {
      id: data.id,
      imageUrl: data.imageUrl,
      name: data.name,
      nickname: nickname || `cute ${data.name}`,
    }

    onSubmit(pokemon);
  };

  return (
    <Modal show={show} centered onHide={onClose}>
      <ModalBody>
        <h5 className="mb-3">You have successfully catch a <b>{data.name}</b>!</h5>

        <img src={data.imageUrl} alt={data.name} className="mb-2 text-center" />
        <p>Give it a name!</p>
        <input placeholder={`Cute ${data.name}`} type="text" className="w-100" onChange={handleNameChange} />
      </ModalBody>

      <ModalFooter>
        <Button variant="outline-danger" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmitClick}>Save to pokeDex</Button>
      </ModalFooter>
    </Modal>
  )
};

export default PokemonModal;

