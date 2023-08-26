import segundoComponente from "./segundoComponente";

const primeiroComponente = () => {
    return (
        <>
        <div>
            <h2>Primeiro Componente</h2>
            <segundoComponente />
            {4 + 4}
            {}
        </div>
        </>
    );
}

export default primeiroComponente;