export const ProjectList = ({ projects }) => {
  return (
    <div className={'grid grid-cols-3 w-fit gap-2 h-fit items-center'}>
      {projects.map((item, index) => (
        <div key={index} className={'w-fit'}>
          <img src={item.img} alt={item.category} />
        </div>
      ))}
    </div>
  );
};
