const ListMenu = ({ title, imgSource }) => {
  return (
    <div className=" col-span-1">
      <img src={imgSource} width="208px" />
      <p class="font-medium text-xl mt-3">{title}</p>
    </div>
  );
};

export default ListMenu;
