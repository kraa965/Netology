export const ProjectList = ({ projects }) => {
  return (
    <div className={'grid grid-cols-3 gap-2 items-center'}>
      {projects.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.category} className={'h-auto max-w-full '} />
        </div>
      ))}
    </div>
  );
};
