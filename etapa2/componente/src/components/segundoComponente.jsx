import terceiroComponente from "./terceiroComponente";
const segundoComponente = () => {
    const aluno = {
        nome: "Julian",
        profissao: "Empreendedor",
        idade: 18,
        casado: true
    }

    //function opCivil(estado){
    //    if (estado == true) {
    //        "sim"
    //    }else{
    //        "não"
    //    }
    //}

    return (
        <>
            <p>
                <h3>Aluno</h3>
                <strong>Nome: </strong>{aluno.nome}<br />
                <strong>Profissao: </strong>{aluno.profissao}<br />
                <strong>Idade: </strong>{aluno.idade}<br />
                <strong>Status: </strong>{opCivil(aluno.casado)}
            </p>
            <p>
                <terceiroComponente />
            </p>
        </>
    );
}

export default segundoComponente;

// <strong>Status: </strong>(opCivil(aluno.casado))