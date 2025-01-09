import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    // payment confirmation
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonimus",
            name: user?.displayName || "anonimus",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transsion id ", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save the payment in the database when a user buy the food and sumbit the amount in his card
        // create a object first what is the save in the databse?
        const paymentInfo = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuCartIds: cart.map((item) => item.cartId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", paymentInfo);
        console.log("payment send to the database", res.data);
        refetch();
        if (res?.data?.paymentResult?.insertedId) {
          toast.success("Payment Succesfully");
          navigate("/dashboard/payment-history");
        } else {
          toast.error(res?.data?.code);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bg-yellow-800 text-white mt-3"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <div
        className={`${
          error &&
          "border-2 border-red-500 py-6 px-2 rounded-lg my-5 w-72 mx-auto"
        } ${
          transactionId &&
          "border-2 border-green-500 py-6 px-2 rounded-lg my-5 w-72 mx-auto"
        }`}
      >
        {error && (
          <p className="text-red-500 text-center">{error && `! ${error}`} </p>
        )}
        {transactionId && (
          <p className="text-green-500 text-center">
            {" "}
            Your TransactionId is: {transactionId}
          </p>
        )}
      </div>
    </form>
  );
};

export default CheckOutForm;
