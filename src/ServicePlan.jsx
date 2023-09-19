import PropTypes from "prop-types";

const ServicePlan = ({ servicePlan }) => {
  const { name, price, features_included, features_not_included } = servicePlan;
  return (
    <div>
      <h2>{name}</h2>
      <h2>${price}/month</h2>
      <ul>
        {features_included.map((features, id) => (
          <li key={id}>{features}</li>
        ))}
      </ul>
      <ul>
        {features_not_included.map((features, id) => (
          <li key={id}>{features}</li>
        ))}
      </ul>
    </div>
  );
};

ServicePlan.propTypes = {
  servicePlan: PropTypes.object,
};

export default ServicePlan;
