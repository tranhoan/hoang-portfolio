import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type Props = {
  href: string;
  children?: React.ReactNode;
};
const CustomLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <ProjectLink>{children}</ProjectLink>
    </Link>
  );
};
export const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--primaryBlue);
  margin-right: 2rem;
  &:after {
    content: '';
    display: block;
    width: 20%;
    height: 2px;
    border-radius: 8px;
    transition: width 0.7s var(--easing);
    background-color: var(--primaryBlue);
    margin-left: 2%;
  }
  &:hover::after {
    width: 80%;
  }

  &:visited {
    color: inherit;
  }
`;
export default CustomLink;
