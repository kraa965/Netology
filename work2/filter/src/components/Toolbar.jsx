export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="flex gap-2 my-5">
      {filters.map((item) => (
        <button
          onClick={onSelectFilter}
          key={item}
          className={item === selected ? 'active bg-[#555555] text-white px-3 ' : 'border py-2 px-3 text-[#55595f] border-[#404040]'}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
