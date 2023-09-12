import { useState } from "react"

const ListaDados = () => {
    
    const [user, setUser] = useState([
        {id: 1, nome: 'Astolfo Roberto Caruzo', idade: 26},
        {id: 2, nome: 'Roberto Dinis Silva', idade: 26},
        {id: 3, nome: 'Dijalma dos Santos', idade: 26},
        {id: 4, nome: 'Crépola Jude', idade: 26},
        {id: 5, nome: 'Tafael Sante', idade: 26},
        {id: 6, nome: 'João de Jesus', idade: 21},
        {id: 7, nome: 'Marcos Santomé', idade: 31},
        {id: 8, nome: 'Thoma Shelby', idade: 35},
    ])

    const apagarUsuario =() =>{
        const aleatorio = Math.floor(Math.random() * user.length)

        setUser((prev) => {
            console.log(prev)
            return prev.filter((itemUser) => aleatorio !== user.id)
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>idade</th>
                </tr>
                {user.map((tableItem) =>(
                    <tr key={tableItem.id}>
                        <td>{tableItem.id}</td>
                        <td>{tableItem.nome}</td>
                        <td>{tableItem.idade}</td>
                    </tr>
                ))}
            </table>
            <div>
                <button onClick={apagarUsuario}>Elimina usuário - aleatorio</button>
            </div>
        </div>
        
    )
}

export default ListaDados