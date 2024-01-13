import { useState } from 'react';
import { Toolbar } from './Toolbar.jsx';
import { ProjectList } from './ProjectList.jsx';

export const Portfolio = ({ projectList }) => {
  const filterButtonList = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const [filteredListProjects, setFilteredListProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (event) => {
    const select = event.target.textContent;

    if (select === 'All') {
      setFilteredListProjects(projectList);
    } else {
      setFilteredListProjects(
        projectList.filter(item => item.category === select)
      );
    }
    setSelected(select);
  };

  return (
    <div className="flex flex-col w-fit mx-auto">
      <Toolbar
        filters={filterButtonList}
        selected={selected}
        onSelectFilter={filter}
      />
      <ProjectList projects={filteredListProjects} />
    </div>
  );
};
