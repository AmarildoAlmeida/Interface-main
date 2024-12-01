import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
.carousel-item {
    padding-right:40px ;
}
.react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
}
.react-multiple-carousel__arrow--right{
    top: 10px;
}
.react-multiple-carousel__arrow::before {
  color: blueviolet;
}
padding-left:40px;
`;

export const Title = styled.h2`
font-size: 32px;
font-weight:800;
color: #9758A6;
padding-bottom:12px;
position: relative;
text-align: center;
margin-bottom:40px;
margin-top:20px;

&::after {
    content:'';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758A6;
    left: 47%;
} 
`;

export const ContainerItems = styled.div`
background: url('${(props) => props.imageurl}');
background-position: center;
background-size: cover; 
border-radius: 20px;

display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;
`;

export const CategoryButton = styled(Link)`
 color:#ffff;
 background-color: rgba(0,0,0,0.5); 
 padding: 10px 30px;
 border-radius: 30px;
 font-size: 22.5px;
 margin-top:50px;
 font-weight: 500;
 text-decoration: none;

 &:hover {
    background: #9758A6;
 }
`;
  