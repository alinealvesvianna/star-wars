import styled from 'styled-components';


const ContainerFlex = styled.section`
  display: flex;
  flex-flow:${({row}) => row ? 'row' : 'column'};
  ${({width}) => width && `width: ${width}`};
  ${({flexWrap}) => flexWrap && `flex-wrap: wrap`};
  ${({relative}) => relative && `position: relative;`}
  margin:${({margin}) => margin ? margin : '0 auto'};
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent};`}
  ${({main}) => main && 'padding-top: 2em; width: 90%;'}

  @media (max-width: 768px){
    flex-flow:${({row}) => row ? 'column' : 'row'};
    ${({columnMobile}) => columnMobile && `flex-flow: column`};
    ${({rowMobile}) => rowMobile && `flex-flow: row`}
  }
`;


export { ContainerFlex };