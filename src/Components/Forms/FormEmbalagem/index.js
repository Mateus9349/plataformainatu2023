const FormEmbalagem = () => {
    return(
        <div className="embalagem-cadastro-inativo div-form">
            <form action="" className="extra">

                <label for="">Nome:</label>
                <input type="text" placeholder="saco, balde"/>

                <label for="">Valor:</label>
                <input type="number" placeholder="0,00 R$"/>

                <label for="">Quantidade</label>
                <input type="number"/>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormEmbalagem;