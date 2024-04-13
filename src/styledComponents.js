import styled from 'styled-components'

export const AppContainer = styled.div`
height:100vh;
width:100vw;
background-color:#223a5f;
padding:10px;
display:flex;
flex-direction:column;
align-items:center;


`
export const ScoreCardContainer = styled.div`
width:80vw;
height:23vh;
border:1px solid #ffffff;
padding:7px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
border-radius:10px;
@media screen and (min-width:768px){
width:70vw;
height:25vh;
}
`
export const RockPaperScissorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:20px;

`

export const RockPaperScissorText = styled.h1`
color:#ffffff;
font-size:20px;
width:10vw;
@media screen and (min-width:768px){
    color:#ffffff;
    font-size:30px;
    width:10vw;
}

`
export const ScoreContainer = styled.div`
height:17vh;
width:22vw;
background-color:#ffffff;
border:none;

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
border-radius:10px;

@media screen and (min-width:768px){
    height:20vh;
    width:20vw;  
}

`
export const ScoreText = styled.p`
color:#223a5f;
font-size:12px;
font-familiy:'Roboto';
@media screen and (min-width:768px){
    color:#223a5f;
    font-size:30px;
    font-familiy:'Roboto';
}
@media screen and (width>=576px and width<768px){
    color:#223a5f;
    font-size:20px;
    font-familiy:'Roboto';
}

`
export const ScoreCount = styled.p`
color:#223a5f;
font-size:17px;
font-weight:700;
font-family : Roboto;
@media screen and (min-width:768px){
    color:#223a5f;
    font-size:40px;
    font-weight:700;
}
@media screen and (width>=576px and width<768px){
    color:#223a5f;
    font-size:30px;
    font-weight:700;
}
`
export const RockPaperScissorButtonsContainer = styled.div`
width:70vw;
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
align-items:center;

@media screen and (min-width:768px){
    width:50vw;
    margin-top:40px;
}
`

export const Buttons = styled.button`

border:none;
background-color:transparent;
margin:15px;
border-radius:130px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border:none;
@media screen and (min-width:768px){
    height:18vh;
    width:20vw;
}
`
export const ButtonImage = styled.img`
height:18vh;
width:20vw;

`

export const RulesButton = styled.button`
    border:none;
    background-color:#ffffff;
    color:223a5f;
    padding:10px;
    font-size:15px;
    border-radius:8px;
    align-self:flex-end;
@media screen and (min-width:768px){
    border:none;
    background-color:#ffffff;
    color:223a5f;
    padding:15px;
    font-size:30px;
    border-radius:8px;
    align-self:flex-end;
}
`
export const RulesImage = styled.img`
height:50vh;
width:60vw;
`
export const RulesContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#ffffff;
padding:20px;
border-radius:7px;
`
export const WinOrLossText = styled.p`
font-size:25px;
color:#ffffff;
@media screen and (min-width:768px){
    font-size:45px;
    color:#ffffff;
}

`
