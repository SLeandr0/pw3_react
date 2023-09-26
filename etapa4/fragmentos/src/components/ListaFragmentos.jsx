import style from "./ListaFragmentos.module.css"

const ListaFragmentos = ({motos}) => {
  const tableStyle = {
    margin: '0 auto',
}
  return (
    <>
    <table className={style.lf_table}>
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
              {background: "#8fbc8f", color: "#000"}:null
            }>
                <td>{itemMoto.marca}</td>
                <td>{itemMoto.modelo}</td>
                <td>{itemMoto.km}</td>
                <td className={
                  itemMoto.usado ? style.lf_red : style.lf_green
                }>{itemMoto.usado ? "Usado" : "Novo"}</td>
                <td className={
                  itemMoto.ano >2013 ? style.lf_blue : style.lf_yellow
                }>{itemMoto.ano}</td>
            </tr>
          )
        })}
    </table>
    </>
  )
}

export default ListaFragmentos