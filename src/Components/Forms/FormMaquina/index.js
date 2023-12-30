const FormMaquina = () => {
    return (
        <div className="maquinario-cadastro-inativo div-form">
            <form action="" className="extra alinhar-horizontal-form-maquinas">

                <div>
                    <label for="">Nome:</label>
                    <input type="text" placeholder="Insira seu nome" />

                    <label for="">Tipo da maquina</label>
                    <select>
                        <option value="higienizadora">Higienizadora</option>
                        <option value="seletora">Seletora</option>
                        <option value="quebradora">Quebradora</option>
                        <option value="secadora">Secadora</option>
                        <option value="despolpadora">Despolpador</option>
                        <option value="destiladora">Destiladora</option>
                        <option value="trituradora">Trituradora</option>
                        <option value="prensa">Prensa</option>
                        <option value="filtro">Filtro</option>
                    </select>

                    <label for="">Energia</label>
                    <select>
                        <option value="kw">Rede Elétrica</option>
                        <option value="diesel">Motor Estacionário</option>
                    </select>

                    <label for="">Potência</label>
                    <input type="number" placeholder="kW" />

                    <label for="">Valor</label>
                    <input type="number" placeholder="0,00 R$" />
                </div>

                <div>
                    <label for="">Data de Aquisição</label>
                    <input type="date" />

                    <label for="">Vida Útil</label>
                    <input type="number" />

                    <label for="">Dias trabalhados</label>
                    <input type="number" />

                    <label for="">Horas trabalhadas</label>
                    <input type="number" />

                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormMaquina;