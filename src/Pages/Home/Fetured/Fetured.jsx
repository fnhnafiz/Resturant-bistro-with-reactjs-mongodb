import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import fetureImage from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Fetured = () => {
  return (
    <div className="featured-bg bg-fixed pt-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-8 pb-32 px-72">
        <div>
          <img src={fetureImage} alt="" />
        </div>
        <div className="space-y-6 text-white">
          <p>March 20, 2023</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur
          </p>
          <button className="btn border-0 border-b-2 btn-outline text-white uppercase">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
