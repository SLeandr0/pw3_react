const terceiroComponente = () => {
    const professor = {
        nome: "Gabriel",
        curso: "Desenvolvedor",
        formacao: "Professor",
        idade: 19,
        titular: true
    }

    return (
            <>
            <p>
                <h3>Professor</h3>
                <strong>Nome: </strong>{professor.nome}<br />
                <strong>Curso: </strong>{professor.curso}<br />
                <strong>Formação: </strong>{professor.formacao}<br />
                <strong>Idade: </strong>{professor.idade}<br />
                <strong>Tirular: </strong>{professor.titular}
            </p>
            </>
    );
}

export default terceiroComponente;

// nome curso formação idade e titular