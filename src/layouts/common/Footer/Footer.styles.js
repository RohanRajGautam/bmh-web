import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { Container } from "@components/Container";
import { SPACING, COLORS } from "@components/constants";
import { mediaQueries } from "@components/MediaQueries";

export const FooterWrapper = styled(Container)`
  padding: ${SPACING.xl} 11.3rem;
  max-width: 140rem;

  ${mediaQueries("lg")`
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 6.7rem;
    padding-top: 13.6rem;
  `}
`;

export const FooterMain = styled.div``;

export const FooterDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 2rem;
  @media (min-width: 600px) {
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
  @media (max-width: 600px) {
    grid-gap: 8.4rem;
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

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: inherit;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 11.6rem;
  }
`;

export const LogoWrapper = styled(Link)`
  margin-right: 4.2rem;
`;

export const FooterCopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1080px) {
    margin-top: 5.2rem;
  }

  @media (max-width: 600px) {
    margin-top: 8.4rem;
    align-self: flex-end;
  }
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

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NewsletterWrapper = styled.div`
  width: 40rem;

  @media (max-width: 600px) {
    margin-top: 3.8rem;
    width: auto;
  }
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

  @media (max-width: 600px) {
    flex-direction: column;

    input[type="email"] {
      width: 100%;
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

  @media (max-width: 600px) {
      margin-top: 3.2rem;
    }
  }
`;
