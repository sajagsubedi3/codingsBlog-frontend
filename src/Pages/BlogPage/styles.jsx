import styled from "styled-components";

export const BlogPage = styled.section`
  width:80vw;
  margin:auto;
  padding-top:5vh;
   
   .blogPageHead h1{
  font-size:4rem;
  color:white;
  font-family: 'Roboto', sans-serif;
  }
   .blogPageHead h1 span{
  color:${({ theme }) => theme.colors.secondaryTheme};
  font-size:3rem;
  }
   .blogPageImgSection .publishedDateText{
  font-family
  font-size:.9rem;
  color:#4b4e4f;
  font-family: 'Roboto Condensed', sans-serif;
  }

   .blogPageImgSection img{
  width:100%;
  margin:10px auto;
  border-radius:50px;
  max-height:50vh;
  }
   .blogPageBlogBody p{
  font-family: 'Roboto Condensed', sans-serif;
  white-space:pre-line;
   color:white;
  font-size:1.8rem;
  text-align:justify;
  }
  .blogPageBlogBody{
  }
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
   .blogPageHead h1{
  font-size:2rem;
  }
   .blogPageHead h1 span{
  font-size:1.5rem;
  }
 }`;
