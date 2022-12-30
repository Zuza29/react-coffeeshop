const Coffee = ({ name, price, milk, img }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      {milk.type3 ? (
        <p>
          Milk: {milk.type1} or {milk.type2} or {milk.type3}
        </p>
      ) : (
        <p>
          Milk: {milk.type1} or {milk.type2}
        </p>
      )}
      <img src={img} alt={name} />
      <button type="button">Order now</button>
    </div>
  );
};

export default Coffee;
