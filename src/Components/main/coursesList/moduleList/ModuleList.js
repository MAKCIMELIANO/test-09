import PropTypes from "prop-types";

const ModuleList = ({ modules }) => {
  return (
    <ul>
      {modules.map((moduleItem) => (
        <li key={modules.key}>
          <h4>{moduleItem.name}</h4>
          <iframe
            width="560"
            height="315"
            src={moduleItem.webinar}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href={moduleItem.repository}>Repository link</a>
        </li>
      ))}
    </ul>
  );
};

export default ModuleList;

ModuleList.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      webinar: PropTypes.string,
      repository: PropTypes.string,
    })
  ),
};
