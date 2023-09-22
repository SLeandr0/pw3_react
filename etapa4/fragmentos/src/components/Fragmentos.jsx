// EXTENÇÃO - es7 + react

const Fragmentos = ({marca, km, modelo, usado, ano}) => {
    const tableStyle = {
        margin: '0 auto',
    }
  return (
    <>
    <h2>Componentes e Props</h2>
    <h3>Carro ordenado:</h3>
    <table style={tableStyle}>
        <tr>
            <th>Marca</th>
            <th>KM</th>
            <th>Modelo</th>
            <th>Usado</th>
            <th>Ano</th>
        </tr>
        <tr>
            <td>{marca}</td>
            <td>{km}</td>
            <td>{modelo}</td>
            <td>{usado ? "Usado" : "Novo"}</td>
            <td>{ano}</td>
        </tr>
    </table>
    </>
  )
}

export default Fragmentos