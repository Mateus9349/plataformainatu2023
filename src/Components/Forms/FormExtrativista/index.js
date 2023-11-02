const FormExtrativista = () => {
    return(
        <div className="extrativista-cadastro-inativo div-form">
            <form action="" className="extra">

                <label for="">Nome:</label>
                <input type="text" placeholder="Insira seu nome"/>

                <label>Sexo</label>
                <select name="sexo">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>

                <label for="">cpf:</label>
                <input type="text" placeholder="000.000.000-00"/>

                <label for="">Idade:</label>
                <input type="number"/>

                <label for="">Apelido:</label>
                <input type="text" placeholder="Insira o apelido (opcional)"/>

                <label for="">Comunidade:</label>
                <input type="text" placeholder="comunidade/distrito/rio/igarapé"/>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormExtrativista;