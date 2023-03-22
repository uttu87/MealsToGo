import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const TopSmall = styled.View`
  margintop: 4px;
`;

const TopMedium = styled.View`
  margintop: 8px;
`;

const TopLarge = styled.View`
  margintop: 16px;
`;

const LeftSmall = styled.View`
  marginleft: 4px;
`;

const LeftMedium = styled.View`
  marginleft: 8px;
`;

const LeftLarge = styled.View`
  marginleft: 16px;
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};
