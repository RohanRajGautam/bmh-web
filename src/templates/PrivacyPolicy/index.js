import React from "react";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import styled from "styled-components";

import { data, items } from "./data";

const Wrapper = styled.div`
  height: auto;
  padding: 5vh 5vw;
`;
const Title = styled.h2`
  font-size: 3.6rem;
`;
const Description = styled.p`
  padding: 2rem 0;
  font-size: 1.6rem;
  line-height: 1.7;
`;
const Desc = styled.p`
  padding: 1rem 0;
`;
const Item = styled.div`
  margin: 2rem 0;
`;
const ItemTitle = styled.h3`
  font-size: 2.6rem;
  color: #6ca448;
  padding-bottom: 1.5rem;
`;
const ItemDesc = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
`;

const Notice = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #302213;
  padding: 2rem 0;
`;

const PrivacyPolicy = () => {
  return (
    <Layout dark>
      <Seo title="Privacy Policy" />
      <Wrapper>
        <Title>{data.title}</Title>
        <Description>
          <Desc>{data.desc1}</Desc>
          <Desc>{data.desc2}</Desc>
          <Desc>{data.desc3}</Desc>
        </Description>
        {items.map((item, index) => (
          <Item key={index}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDesc>{item.desc}</ItemDesc>
          </Item>
        ))}
        <Notice>{data.notice}</Notice>
      </Wrapper>
    </Layout>
  );
};

export default PrivacyPolicy;
