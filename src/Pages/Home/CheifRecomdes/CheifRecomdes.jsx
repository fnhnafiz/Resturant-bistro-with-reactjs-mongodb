import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import cardImage from "../../../assets/home/slide5.jpg";
const CheifRecomdes = () => {
  return (
    <div className="my-12">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <img
            className="w-[424px] h-[300px] object-cover"
            src={cardImage}
            alt=""
          />
          <div className="px-5 space-y-3">
            <h1 className="text-2xl font-semibold">Caeser Salad</h1>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="uppercase btn btn-outline border-0 border-b border-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            className="w-[424px] h-[300px] object-cover"
            src={cardImage}
            alt=""
          />
          <div className="px-5 space-y-3">
            <h1 className="text-2xl font-semibold">Caeser Salad</h1>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="uppercase btn btn-outline border-0 border-b border-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            className="w-[424px] h-[300px] object-cover"
            src={cardImage}
            alt=""
          />
          <div className="px-5 space-y-3">
            <h1 className="text-2xl font-semibold">Caeser Salad</h1>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="uppercase btn btn-outline border-0 border-b border-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifRecomdes;
