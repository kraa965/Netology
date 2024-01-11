const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className={'w-full flex justify-end'}>
      <button
        className="material-icons text-gray-600 flex justify-end items-center h-12 px-20 cursor-pointer"
        onClick={onSwitch}>
        {icon}
      </button>
    </div>
  );
};

export default IconSwitch;
