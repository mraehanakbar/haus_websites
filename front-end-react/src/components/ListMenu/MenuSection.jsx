const MenuSection = ({ title, content }) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-10/12 mt-12">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-5 md:grid-cols-5 md:gap-x-12 md:gap-y-10 mt-12">
          {content}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
