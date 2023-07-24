import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Container = ({ className, children }) => {
  return <section className={twMerge("container mx-auto px-4", className)}>{children}</section>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
