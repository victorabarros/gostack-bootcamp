import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;  // Template literals

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    
    /* hover é efeito de quando passa o mouse por cima */
    /* no caso escurece 20% em .2 seg */
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  /* Ancora */
  a {
    background: #FFF;
    border-radius: 5px;
    width: 100%auto;
    padding: 24px;
    display: block;
    text-decoration: none;
  
    display: flex;
    align-items: center;

    /* desloca p direita 10px em .2 seg quando passa o mouse por cima */
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    /* depois da primeira ancora em diante tem que haver um distanciamento */
    & + a {
      margin-top: 16px;
    }

    img {
      stroke-width: 64px;
      height: 64px;
      border-radius: 50%50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    /* fi icon */
    svg {
      margin-left: auto;
      color: #CBCBD6;
    }
  }
`;
