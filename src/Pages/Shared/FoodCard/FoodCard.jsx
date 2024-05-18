
const FoodCard = ({item}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={item?.image} alt="food" />
  <p className="absolute bg-[#111827] text-white px-5 py-2 right-0 top-0">${item?.price}</p>
  </figure>
  <div className="card-body bg-[#F3F3F3]">
    <h2 className="card-title text-center">{item?.name}</h2>
    <p className="">{item?.recipe}</p>
    <div className="flex w-full flex-col justify-center items-center">
                <button className="btn btn-outline w-fit h-fit bg-[#E8E8E8] border-0 mt-10 border-b-4 border-[#BB8506] text-[#BB8506] rounded-lg ">ADD TO CARD</button>
                </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;