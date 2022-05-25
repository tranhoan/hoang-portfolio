import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children?: React.ReactNode;
  transitionDelay: string;
  className: string;
  as?: any;
};
const OverflowContainer: React.FC<Props> = ({
  transitionDelay,
  children,
  className,
  as,
}) => {
  return (
    <Row className={className} as={as}>
      <TextContainer delay={transitionDelay}>{children}</TextContainer>
    </Row>
  );
};

const Row = styled.div`
  overflow: hidden;
  width: fit-content;
`;

export const TextContainer = styled.div<{ delay: string }>`
  --delay: ${(props) => props.delay};

  ${Row}.flex-row & {
    display: flex;
    flex-wrap: wrap;
  }
  ${Row}.overflow-list-item & {
    display: flex;
    align-items: center;
  }
`;
export default OverflowContainer;
