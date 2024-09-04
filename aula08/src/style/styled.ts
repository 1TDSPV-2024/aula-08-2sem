import styled from "styled-components"

export const MeuH1 = styled.h1`
    background-color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    width: 80%;
    border: 2px solid #0f0;
`

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
`

// Estilizando o Footer
export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const MainContent = styled.main`
  padding: 20px;
  margin-top: 60px; // Espaço para o Header
  margin-bottom: 40px; // Espaço para o Footer
`

// Estilizando o contêiner do menu
export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`

// Estilizando a lista de itens do menu
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

// Estilizando o item de lista
export const MenuItem = styled.li`
  display: inline;
`

// Estilizando o item de link
export const MenuLink = styled.a`
  color:#fff;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
`
export const MinhaTabela = styled.table`
  border-collapse:collapse;
    border: 2px solid red;
    margin:0 auto;
    width: 60vw;
    font-size: 20px;
    
    & 
      a {
        text-decoration: none;
        color: #fff;
      }

      & 
        tr:nth-child(odd) {
          background-color: green;
          color: white

        }
        & 
        tr:nth-child(even) {
          background-color: lightgreen;
          color: white
        }

        & tr:hover{
          background-color: #436d43;
          color: white;
        }



    &
      thead{
        background-color: black;
        & 
          th {
            border:2px solid #ff0000;
            color: #fff;
            text-align: center;
          }
          
        }
        
        & 
          tbody {
            background-color: green;
            color: #fff;

            & 
              td {
                border: 2px solid red;
                text-align: center;

              }


          }

          &
            tfoot {
              background-color: green;
              text-align: center;
              color: #fff;
            }
        `