import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ card }) => {
  const { name, image, price, recipe, _id } = card;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, refetch] = useCart();
  // const from = location.state?.from?.pathname || "/";

  const handleAddToCart = (card) => {
    console.log(card);
    if (user && user?.email) {
      const cartItem = {
        cartId: _id,
        email: user?.email,
        name,
        image,
        price,
        recipe,
      };
      axios.post("http://localhost:5000/add-to-cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `Added ${name}  Successfully!!`,
            icon: "success",
            draggable: true,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are login in your account?",
        text: "Please login first then add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login!!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(card)}
            className="btn border-0 border-b-2 btn-outline block mx-auto uppercase"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
