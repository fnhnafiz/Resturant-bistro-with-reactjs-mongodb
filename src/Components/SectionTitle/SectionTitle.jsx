const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto text-center my-12">
      <p className="text-[#D99904] pb-4 italic text-xl">---{subHeading}---</p>
      <h2 className="text-5xl font-bold uppercase border-y-2 py-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
