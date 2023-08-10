import "./List.css";

const List = ({ project }) => {
  const { title, descript, link } = project;

  return (
    <div className="list">
      <div className="list_title">
        <a target="_blank" rel="noreferrer" href={link}>
          {title}
        </a>
      </div>
      <p className="list_descript">{descript}</p>
    </div>
  );
};

export default List;
