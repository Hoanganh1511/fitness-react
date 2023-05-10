import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  width:100%;
  scroll-behavior: smooth;
}
html{
    font-family:"Poppins";
}
body {
  margin: 0;
  height:2000px;

}
p,a,ul,li,h6,h5,h4,h3,h2,h1{
        margin:0;
        padding:0;
}

::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.container{
    width:100%;
    max-width:1676px;
    margin:0 auto;
    .wrapper{
        padding:0 80px;
    }
}
@media only screen and (max-width:2000px){
    .container{
        .wrapper{
            padding:0 290px;
        }
    }
}
@media only screen and (max-width:1650px){
    .container{
        max-width: 1670px;
        .wrapper{
            padding:0 100px;
        }
    }
}
@media only screen and (max-width:1440px){
    .container{
        max-width: 1430px;
    }
}
@media only screen and (max-width:1200px){
    .container{
        max-width: 1200px;
        .wrapper{
            padding:0 15px;
        }
    }
}
@media only screen and (max-width:992px){
    .container{
        max-width: 930px;
        padding: 0 15px;
    }
}
@media only screen and (max-width:767px){
    .container{
        max-width: 100%;
        .wrapper{
            padding:0 15px;
        }
    }
}

@keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`
