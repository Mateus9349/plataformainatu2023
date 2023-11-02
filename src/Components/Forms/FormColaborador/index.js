const FormColaborador = () => {
    return(
        <div className="funcionario-cadastro-inativo div-form" >
            <form action="" className="extra">

                <label for="">Nome:</label>
                <input data-nomeFuncionario type="text" placeholder="Insira seu nome"/>

                <label for="">Idade:</label>
                <input  type="number"/>

                <label>Sexo</label>
                <select data-sexoFuncionario name="sexo">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>

                <label for="">Comunidade:</label>
                <input  type="text" placeholder="comunidade/distrito/rio/igarapé"/>

                <label for="">Função:</label>
                <input type="text" placeholder="Ex.Operador de máquina"/>

                <label for="">Valor Hora:</label>
                <input type="number" placeholder=" Valor/hora R$"/>

                <label for="">Diária:</label>
                <input type="number" placeholder=" Valor/hora R$"/>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormColaborador;