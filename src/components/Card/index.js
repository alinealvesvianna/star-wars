import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
    border-radius: 5px;
    min-height: 100px;
    padding: 10px;
    width: 30%;
    margin-bottom: 2%;
    margin-right: 1%;
    background: #2f2f2f;
`;

const CardStarship = styled.div`
    margin-bottom: 1em;
    border-bottom: 1px solid #636262;
    padding: 20px;
`;

export { Card, CardStarship }