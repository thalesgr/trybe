import React from 'react'
import Input from './Input'

class Form extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.mouseAlert = this.mouseAlert.bind(this)
        this.clearForm = this.clearForm.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            Nome: '',
            Email: '',
            CPF: '',
            Endereço: '',
            Cidade: '',
            Estado: '',
            Casa: false,
            Apartamento: false,
            Resumo: '',
            Cargo: '',
            Descricao: ''
        }
    }

    handleChange(e) {
        const { name } = e.target;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({
            [name]: value,
        })
    }

    mouseAlert(e){
        alert('Preencha com cuidado essa informação!')
    }

    clearForm() {
        this.setState({
            Nome: '',
            Email: '',
            CPF: '',
            Endereço: '',
            Cidade: '',
            Estado: '',
            Casa: false,
            Apartamento: false,
            Resumo: '',
            Cargo: '',
            Descricao: ''
        })
    }

    submitForm() {
        const results = [...Object.values(this.state)]
    }

    render() {
        return (
            <div>
                <h1>Curriculo</h1>
                <form>
                    <fieldset className="form-group">
                        <Input name="Nome" value={this.state.Nome} type="text" onChange={this.handleChange} />
                        <Input name="Email" type="text" value={this.state.Email} onChange={this.handleChange} />
                        <Input name="CPF" type="text" value={this.state.CPF} onChange={this.handleChange} />
                        <Input name="Endereço" type="text" value={this.state.Endereço} onChange={this.handleChange} />
                        <Input name="Cidade" type="text" value={this.state.Cidade} onChange={this.handleChange} />
                        <label>
                            Estado: <select name='Estado' value={this.state.Estado} onChange={this.handleChange}>
                                <option value="">Selecione</option>
                                <option value="RJ">RJ</option>
                                <option value="SP">SP</option>
                                <option value="MG">MG</option>
                                <option value="ES">ES</option>
                            </select>
                        </label>
                        <label>
                            Casa: <input type="checkbox" value={this.state.Casa} name="Casa" onChange={this.handleChange} />
                        </label>
                        <label>
                            Apartamento: <input type="checkbox" value={this.state.Apartamento} name="Apartamento" onChange={this.handleChange} />
                        </label>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>
                            Resumo: <textarea name="Resumo" value={this.state.Resumo} onChange={this.handleChange} />
                        </label>
                        <label>
                            Cargo: <textarea name="Cargo" value={this.state.Cargo} onChange={this.handleChange} onMouseOver={this.mouseAlert} />
                        </label>
                        <label>
                            Descrição: <textarea name="Descricao" value={this.state.Descricao} onChange={this.handleChange} />
                        </label>
                    </fieldset>
                    <button onClick={this.submitForm}>Enviar</button>
                    <button onClick={this.clearForm}>Limpar</button>
                </form>
            </div>
        )
    }
}

export default Form;