import styled from "styled-components";
import { SPACING, COLORS } from "@components/constants";
import { Container } from "@components/Container";

export const CategorySliderBlockWrapper = styled.div`
  margin-top: ${SPACING.xl};
`;

export const HeadingWrapper = styled.div`
  margin-bottom: ${SPACING.lg};
`;

export const CategorySliderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin-left: -5rem;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
