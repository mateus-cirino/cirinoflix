import React, {useState} from 'react';
import PageDefault from '../../../templates/PageDefault';
import Form from '../../../components/Form/style.js';
import FormField from '../../../components/Form/components/FormField';
import {ButtonForm} from '../../../components/Button/style.js';

function Categoria() {
    const valoresIniciais = {
        nome: "",
        descricao: "",
        cor: "#0000"
    };
    //este state é responsável pela manipulacao das categorias [categorias]
    const [categorias, setCategorias] = useState([]);

    //já esse state é responsável pelos valores do objeto categoria {nome: descricao: cor}
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
            ...categorias,
            values
        ]);
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setValue(
            name,
            value
        );
    }

    return (
        <PageDefault>
            <Form onSubmit={handleSubmit}>

                <FormField 
                    label='Nome da categoria'
                    type='text'
                    name='nome' 
                    onChange={handleChange}/>

                <FormField 
                    label='Descrição da categoria'
                    type='textarea'
                    name='descricao' 
                    onChange={handleChange}/>
                
                <FormField 
                    label='Cor da categoria'
                    type='color'
                    name='cor' 
                    onChange={handleChange}/>

                <div style={{margin: "10px"}}>
                    <ButtonForm type='submit'>
                        Adicionar
                    </ButtonForm>
                </div>

                <div>
                    <ul>
                        {categorias.map((categoria, index) => {
                            return (<li key={`${categoria.nome}${index}`}>{categoria.nome}</li>);
                        })}
                    </ul>
                </div>
            </Form>
        
        </PageDefault>
    );
}

export default Categoria;