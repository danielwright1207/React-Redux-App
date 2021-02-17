const Character = ({ image, species, name, gender, status, location }) => {
  return (
    <div className="cards">
      <img src={image} alt="character image" />
      <h3>Name: {name}</h3>
      <h5>Gender: {gender}</h5>
      <h6>Species: {species}</h6>
      <h5>Status: {status}</h5>
      <h6>Location: {location.name}</h6>
    </div>
  );
};

export default Character;
