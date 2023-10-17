import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 10,
    config: { mass: 1, tension: 2, friction: 8 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

Number.propTypes = {
  n: PropTypes.number.isRequired,
};

export default Number;
