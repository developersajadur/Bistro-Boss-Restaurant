
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-fit mx-auto my-10">
            <p className="text-[#D99904] text-xl mb-2">{subHeading}</p>
            <h3 className="text-[#151515] text-2xl lg:text-4xl py-4 border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;