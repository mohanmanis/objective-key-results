import styled from 'styled-components';
import { Container } from 'react-bootstrap';


export const Filter = styled("div")`
    padding: 24px 0;
`;

export const FilterCategories = styled("div")`
  display: flex;
  justify-content: space - between;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const FilterLabel = styled("label")`
  padding-left: 8px;
  padding-right: 8px;
`;

export const Wrapper = styled(Container)``
