import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";
import styled from "styled-components";

const MinhaTabela = styled.table`
  border-collapse:collapse;
  border: 2px solid #ff0000;
  margin:0 auto;
  width: 70vw;
  font-size: 24px;

  &{
    text-decoration: none;
    color: #fff;
  }
  
  &
   thead{
    background-color:#514f4f;
     &
      th{
        border:2px solid #ff0000;
        color:#fff;
        text-align:left;
      }
   }

   &
    tbody{
      background-color:#514f4f;
      color:#fff;
       &
        td{
          border:2px solid #ff0000;
          text-align:center;
        }
    }

    &{
      tfoot{
        background-color: #514f4f;
        text-align: center;
        color:#fff ;
      }

      & tr:nth-child(odd){
        background-color: #a6a6a6;
        color: #514f4f;
      }

      & tr:nth-child(even){
        background-color: #252323;
        color: #bdb5b5;
      }
    }

`

export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  return (
    <div>
      <h1>Produtos Eletrônicos</h1>
      <MinhaTabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {/* COMENTÁRIO */}
          {listaProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.qtd}</td>
              <td>{produto.preco}</td>
              <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link> </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              Total de produtos : <span>{listaProdutos.length}</span>
            </td>
          </tr>
        </tfoot>
      </MinhaTabela>
    </div>
  );
}