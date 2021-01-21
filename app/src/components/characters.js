const Character = ({ image, species, name, gender, status }) => {
  //   const handleClick = () => {
  //     getCharacter();
  //   };
  //   if (error) {
  //     return <h2>Got an error: {error}</h2>;
  //   }
  //   if (isFetching) {
  //     return <h2>Fetching character </h2>;
  //   }
  return (
    <div className="cards">
      <img src={image} />
      <h3>Name: {name}</h3>
      <h5>Gender: {gender}</h5>
      <h6>Species: {species}</h6>
      <h5>Status: {status}</h5>
    </div>
  );
};

export default Character;
