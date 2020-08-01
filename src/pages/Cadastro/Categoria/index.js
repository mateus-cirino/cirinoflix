import React, { useState, useEffect } from 'react';
import PageDefault from '../../../templates/PageDefault';
import Form from '../../../components/Form/styles';
import FormField from '../../../components/Form/components/FormField';
import { ButtonForm } from '../../../components/Button/styles';
import CategoryTable from '../../../components/CategoryTable';

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#0000',
  };
    // este state é responsável pela manipulacao das categorias [categorias]
  const [categorias, setCategorias] = useState([]);

  // já esse state é responsável pelos valores do objeto categoria {nome: descricao: cor}
  const [values, setValues] = useState(valoresIniciais);

  const isLocalHost = window.location.hostname.includes('localhost');

  const URL = isLocalHost ? 'http://localhost:8080/categorias' : 'https://cirinoflix.herokuapp.com/categorias';

  useEffect(() => {
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const reposta = await respostaDoServidor.json();
        setCategorias(reposta);
      }).catch((e) => {
        throw e;
      });
  });

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function validacao() {
    return values.nome !== ''
               && values.descricao !== ''
               && values.cor !== '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validacao()) {
      setCategorias([
        ...categorias,
        values,
      ]);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(
      name,
      value,
    );
  }

  return (
    <PageDefault>
      <div style={{
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
      >
        <Form onSubmit={handleSubmit}>
          <h1 style={{
            color: 'white',
          }}
          >
            Cadastro de Categoria
          </h1>
          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            onChange={handleChange}
          />
          <FormField
            label="Descrição da categoria"
            type="textarea"
            name="descricao"
            onChange={handleChange}
          />
          <FormField
            label="Cor da categoria"
            type="color"
            name="cor"
            onChange={handleChange}
          />
          <ButtonForm type="submit">
            Adicionar
          </ButtonForm>
        </Form>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
        >
          <h2 style={{
            color: 'white',
          }}
          >
            Categorias já cadastradas
          </h2>
          <CategoryTable categorias={categorias} />
        </div>
      </div>
    </PageDefault>
  );
}

export default Categoria;
