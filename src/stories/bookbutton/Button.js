import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Likebutton = styled.button`
  border: 0;
  background-color: transparent;
  z-index: 1;
  transition: all 0.2s;
  svg {
    cursor: pointer;
    color: #dfdfdf;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 3px 4px 3px);
  }
  &.storybook-button--primary svg {
    color: #ffd361;
  }
`;

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Likebutton
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      <FaStar size={24} />
    </Likebutton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
