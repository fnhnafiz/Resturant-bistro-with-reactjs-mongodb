const FoodCard = ({ card }) => {
  const { name, image, price, recipe } = card;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Salad" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <p className="absolute top-4 right-4 bg-black px-4 py-2 rounded-lg text-white">
          ${price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn border-0 border-b-2 btn-outline block mx-auto uppercase">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
