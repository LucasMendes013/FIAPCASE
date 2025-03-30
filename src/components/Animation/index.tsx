import React from "react";
import PropTypes from "prop-types";
import * as Styled from './styles';

function Lottie({ height, width, autoplay, loop, animation }) {
  return (
    <Styled.LottieAnimation
      autoPlay={autoplay}
      loop={loop}
      height={height}
      width={width}
      animation={animation}
    />
  );
}

Lottie.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  autoplay: PropTypes.bool.isRequired,
  loop: PropTypes.bool.isRequired,
  animation: PropTypes.string.isRequired,
};

export default Lottie;
