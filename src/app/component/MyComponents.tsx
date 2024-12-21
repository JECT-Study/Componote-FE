"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #333;
`;

export default function MyComponent() {
  return (
    <Wrapper>
      <Title>스타일 컴포넌트 적용 확인</Title>
    </Wrapper>
  );
}
