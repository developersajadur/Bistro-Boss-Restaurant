
const MenuItem = ({menu}) => {
    const {_id,price,category,image,recipe,name} = menu;
    return (
        <div className="flex items-center gap-5">
            <img style={{borderRadius: "0 200px 200px 200px"}} src={image} className="w-28" />
            <div className="]">
                <h4 className="text-xl text-[#151515 uppercase">{name} ---------</h4>
                <p className="text-base text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;