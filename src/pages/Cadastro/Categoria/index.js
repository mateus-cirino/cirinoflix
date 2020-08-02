import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import PageDefault from '../../../templates/PageDefault';
import Form from '../../../components/Form/styles';
import FormField from '../../../components/Form/components/FormField';
import { ButtonForm } from '../../../components/Button/styles';
import CategoryTable from '../../../components/CategoryTable';

function Categoria() {
  const valoresIniciais = {
    id: '',
    titulo: '',
    descricao: '',
    cor: '',
  };
    // este state é responsável pela manipulacao das categorias [categorias]
  const [categorias, setCategorias] = useState([]);

  // já esse state é responsável pelos valores do objeto categoria {titulo: descricao: cor}
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
  },[]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function validacao() {
    return values.titulo !== ''
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

  function editarCategoria(categoria) {
    console.log(categoria); //falta fazer essa parte
  }

  function excluirCategoria(categoriaASerExcluida) {
    setCategorias(
      _.remove(categorias, (categoria) => categoria !== categoriaASerExcluida),
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
            Cadastro de categoria
          </h1>
          <FormField
            label="Titulo da categoria"
            type="text"
            name="titulo"
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
          <CategoryTable categorias={categorias} edicao={editarCategoria} exclusao={excluirCategoria} />
        </div>
      </div>
    </PageDefault>
  );
}

export default Categoria;
