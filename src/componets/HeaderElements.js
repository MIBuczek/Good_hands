import styled from 'styled-components';
import heroImg from '../assets/Home-Hero-Image.jpg';


export const HomeWrapper = styled.div`
width:100%;
display: flex;
flex-direction: row;
font-family: 'Open Sans';
`;

export const HomeImg = styled.div`
width:47%;
height:763px;
background: url(${heroImg})no-repeat;
background-size:cover;
background-position:right;
`;

export const HomeNav = styled.div`
width:53%;
height:763px;
display:flex;
flex-direction: column;
`;

export const HomePannel = styled.div`
width:80%;
margin-right: 5rem;
position:relative;
h1{
margin-top:5rem;
text-align: center;
font-size:2rem;
font-weight:400;
letter-spacing: -0.76px;
color: #3C3C3C;
}
img{
  margin-top:10px;
  margin-bottom :65px;
}
`;

export const LogInPannel = styled.div`
width:75%;
height:50%;
margin-left:auto;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
span{
  font-size:0.8rem;
  font-weight:300;
  margin-top:2.5rem;
  margin-bottom:1.5rem;
  padding-right:1rem;
}
`;

export const Romb1 = styled.div`
  position:absolute;
  top:0;
  left:50px;
  width:130px;
  height:130px;
  border: 0.75px solid #3C3C3C;
  transform: rotate(45deg);
  span{
    position:absolute;
    top:5px;
    left:10px;
    width:22px;
    height:40px;
    font-size:32px;
    display:block;
    transform: rotate(-45deg);
  }
  p{
    position:absolute;
    top:20px;
    left:10px;
    margin:0.8rem 0;
    position:absolute;
    font-size:22px;
    display:block;
    transform: rotate(-45deg);
  }
`;
export const Romb2 = styled.div`
  position:absolute;
  top:0;
  left:200px;
  width:130px;
  height:130px;
  border: 0.75px solid #3C3C3C;
  transform: rotate(45deg);
  span{
    position:absolute;
    top:5px;
    left:10px;
    width:22px;
    height:40px;
    font-size:32px;
    display:block;
    transform: rotate(-45deg);
  }
  p{
    position:absolute;
    top:20px;
    left:10px;
    margin:0.8rem 0;
    position:absolute;
    font-size:22px;
    display:block;
    transform: rotate(-45deg);
  }
`;
export const Romb3 = styled.div`
  position:absolute;
  top:0;
  left:350px;
  width:130px;
  height:130px;
  border: 0.75px solid #3C3C3C;
  transform: rotate(45deg);
  span{
    position:absolute;
    top:5px;
    left:10px;
    width:22px;
    height:40px;
    font-size:32px;
    display:block;
    transform: rotate(-45deg);
  }
  p{
    position:absolute;
    margin:0.8rem 0;
    top:20px;
    left:10px;
    position:absolute;
    font-size:22px;
    display:block;
    transform: rotate(-45deg);
  }
`;
export const Romb4 = styled.div`
  position:absolute;
  top:0;
  left:500px;
  width:130px;
  height:130px;
  border: 0.75px solid #3C3C3C;
  transform: rotate(45deg);
  font-family: 'Open Sans';
  span{
    position:absolute;
    top:10px;
    left:10px;
    width:22px;
    height:40px;
    font-size:32px;
    display:block;
    transform: rotate(-45deg);
  }
  p{
    position:absolute;
    margin:0.8rem 0;
    top:20px;
    left:10px;
    position:absolute;
    font-size:22px;
    display:block;
    transform: rotate(-45deg);
  }
`;