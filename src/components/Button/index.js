import styled from 'styled-components';

const Button =  styled.button`
    width: 40%;
    margin: 20px auto;
    text-align: center;
    display: block;
    font-size: 1.166em;
    padding: 10px 10px 15px 10px;
    background: rgba(76,76,76,1);
    background: -moz-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(76,76,76,1)), color-stop(45%, rgba(71,71,71,1)), color-stop(54%, rgba(0,0,0,1)), color-stop(100%, rgba(19,19,19,1)));
    background: -webkit-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: -o-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: -ms-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: linear-gradient(to bottom, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
    border: 1px solid #ccc;
    color: #fff;
    border-radius: 3px;
`;

const ButtonSeemore = styled.button`
    width: 30%;
    margin: 20px auto;
    text-align: center;
    display: block;
    font-size: 1.166em;
    padding: 20px 20px 25px 20px;
    background: rgba(76,76,76,1);
    background: -moz-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(76,76,76,1)), color-stop(45%, rgba(71,71,71,1)), color-stop(54%, rgba(0,0,0,1)), color-stop(100%, rgba(19,19,19,1)));
    background: -webkit-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: -o-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: -ms-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    background: linear-gradient(to bottom, rgba(76,76,76,1) 0%, rgba(71,71,71,1) 45%, rgba(0,0,0,1) 54%, rgba(19,19,19,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
    color: #fff;
    border-radius: 3px;
    border: 1px solid #d8c111;
    padding: 10px 10px 15px 10px;
`;

export {Button, ButtonSeemore}