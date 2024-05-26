import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        subHeading={"---What's new?---"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>

      <div className="bg-[#F3F3F3] p-8 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <div className="w-full">
            <h6 className="text-lg font-bold">Recipe name*</h6>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-sm text-red-500 font-medium -mt-4">
                Please write Recipe name
              </span>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <div className="w-full">
              <h6 className="text-lg font-bold">Category*</h6>
              <select
                {...register("category", { required: true })}
                name="category"
                className="select select-bordered capitalize text-black w-full"
              >
                <option className="text-black" disabled selected>
                  Select A Category
                </option>
                <option>salad</option>
                <option>drinks</option>
                <option>popular</option>
                <option>dessert</option>
                <option>pizza</option>
                <option>soup</option>
                <option>offered</option>
              </select>
              {errors.category && (
                <span className="text-sm text-red-500 font-medium -mt-4">
                  Please select a category
                </span>
              )}
            </div>

            <div className="w-full">
              <h6 className="text-lg font-bold">Price*</h6>
              <input
                {...register("price", { required: true })}
                type="number"
                min="0"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
              {errors.price && (
                <span className="text-sm text-red-500 font-medium -mt-4">
                  Please write a price
                </span>
              )}
            </div>
          </div>
          <div className="w-full">
            <h6 className="text-lg font-bold">Recipe Details*</h6>
            <textarea
              {...register("recipe", { required: true })}
              name="recipe"
              className="textarea textarea-bordered w-full h-40"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="text-sm text-red-500 font-medium -mt-4">
                Please write recipe details
              </span>
            )}
          </div>
          <div className="w-full">
            <h6 className="text-lg font-bold">Recipe Image*</h6>
            <input
              {...register("image", { required: true })}
              type="file"
              accept="image/*"
              className="file-input bg-transparent w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-sm text-red-500 font-medium -mt-4">
                Please upload an image
              </span>
            )}
          </div>
          <button className="btn w-fit bg-[#B58130]">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
