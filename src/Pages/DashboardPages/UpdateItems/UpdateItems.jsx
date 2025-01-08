import toast from "react-hot-toast";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const img_hosting_key = import.meta.env.VITE_IMAGE_BB_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const UpdateItems = () => {
  const { _id, category, image, name, price, recipe } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        toast.success(`${data.name} update to the menu item`);
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Update your item"
        subHeading="New feature "
      ></SectionTitle>
      <div className="space-y-6 px-6 md:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              defaultValue={name}
              {...register("name", { required: true, maxLength: 15 })}
              type="text"
              placeholder="recipe name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="">
                  Select your category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* Price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                defaultValue={recipe}
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </label>
          </div>
          <div>
            <input
              //   defaultValue={image}
              {...register("image")}
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>

          <button className="btn mt-6 bg-[#A16207] text-white hover:text-[#A16207]">
            Update Items <FaEdit></FaEdit>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
