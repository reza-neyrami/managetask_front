import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`


/* Column col-Data */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

/** Html Css class-Global */

  body {
    height: 100%;
    width: 100%;
    font-family: 'fateme';
  }

 

  body.fontLoaded {
    font-family: 'fateme','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    background-color: rgb(250, 250, 250);
    min-width: 100%;
    direction: rtl;
    margin:auto;
  }


  p,
  label {
    font-family: 'fateme' ;
    line-height: 1.5em;
  }

/* Column */
.section {
    clear: both;
    margin: 0px;
    padding: 0px;
  }

  .col {
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
  }
  .col:first-child {
    margin-left: 0 !important;
  }
  .grid_1_of_2 {
    width: 49.2%;
  }
  .grid_2_of_2 {
    width: 100%;
  }
  /* Row */
  .row:before,
  .row:after {
    content: '';
    display: table;
  }
  .row:after {
    clear: both;
  }
  .row {
    width: 100%;
    max-width:75rem; /* max Width of row, Change to what you like */
    margin:0 auto;
    }

  /* Full Width below 768 pixels */
  @media only screen and (max-width: 768px) {
    .col {
      margin: 1% 0 1% 0%;
    }
    [class*='grid_'] {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*='col-'] {
      width: 100%;
    }
  }

  .divace {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    position: relative;
    font-family: 'fateme';
    /* font: menu; */
    font-variant-caps: petite-caps;
    font-size: 15px;

  }





`;

export default GlobalStyle;

export const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  label {
    font-size: 0.8em;
    color: #888;
  }
`;

export const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > :not(.space) {
    flex: 1;
  }

  :not(:last-of-type) {
    margin-bottom: 1.5em;
  }

  .space {
    width: 1em;
  }

`;
