import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { Container } from "@components/Container";
import { SPACING, COLORS } from "@components/constants";

const lightBlueGrey = "#C5CCD3";

export const FooterWrapper = styled(Container)`
  padding: ${SPACING.xl} 11.3rem;
  max-width: 140rem;
`;

export const FooterMain = styled.div``;

export const FooterDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, auto);
    justify-items: flex-start;
  }
`;

export const FooterItemTitle = styled.div`
  font-family: Merriweather;
  font-size: 2.1rem;
  line-height: 3.2rem;
  font-weight: bold;
  color: ${COLORS.textHeading};

  margin-bottom: 2.8rem;
`;

export const FooterItemList = styled.ul`
  /* margin: 1rem 0 0 0; */
`;

export const FooterItem = styled.li`
  list-style-type: none;
  margin-bottom: 1.6rem;

  font-family: Mulish;
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: normal;
  color: ${COLORS.textBodyGrey};

  a {
    line-height: inherit;
    color: inherit;
    font-family: inherit;
    line-height: inherit;
    user-select: none;
    text-decoration: none;
  }

  &:hover {
    color: ${COLORS.primary};
  }
`;

export const FooterSecondary = styled.div`
  margin-top: ${SPACING.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoWrapper = styled(Link)`
  margin-right: 4.2rem;
`;

export const FooterCopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PrivacyPolicy = styled(Link)`
  font-family: Mulish;
  color: ${COLORS.textBodyGrey};
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${COLORS.primary};
  }
`;
export const FooterCopyright = styled.p`
  font-family: Mulish;
  color: ${COLORS.textBodyGrey};
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: normal;
`;

export const LeftAlign = styled.div`
  display: flex;
`;

export const NewsletterWrapper = styled.div`
  width: 40rem;
`;

export const NewsletterTitle = styled.h2`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 3.2rem;
  color: ${COLORS.textHeading};
`;

export const NewsletterInput = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 2.4rem;

  input[type="email"] {
    border: none;
    background-color: #fff;
    line-height: 4rem;
    width: 80%;
    text-indent: 10px;
    font-size: 15px;
    font-family: Mulish;
    border-bottom: 1px solid #8ca8be;

    &:focus {
      outline: none;
    }

    label {
      position: absolute;
      bottom: 10px;
      left: 0;
      color: ${COLORS.textDisable};
    }
  }
`;

export const NewsletterButton = styled.div`
  width: 20%;
  color: #15141a;

  font-size: 15px;
  line-height: 2.4rem;
  font-family: Mulish;
  cursor: pointer;
  font-weight: normal;
  text-align: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}

  &:hover {
    color: ${COLORS.primary};
  }
`;
