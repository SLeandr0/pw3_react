import './ListaFragmentos.css'

const ListaFragmentos = ({motos}) => {
  const tableStyle = {
    margin: '0 auto',
}
  return (
    <>
    <table className="lf-table">
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>KM</th>
            <th>Usado</th>
            <th>Ano</th>
        </tr>
        {motos.map((itemMoto) => {
          return(
            <tr key={itemMoto.id} style={
              itemMoto.id % 2 == 0 ?
              {background: "#ccc", color: "#000"}:null
            }>
                <td>{itemMoto.marca}</td>
                <td>{itemMoto.modelo}</td>
                <td>{itemMoto.km}</td>
                <td>{itemMoto.usado ? "Usado" : "Novo"}</td>
                <td>{itemMoto.ano}</td>
            </tr>
          )
        })}
    </table>
    </>
  )
}

export default ListaFragmentos