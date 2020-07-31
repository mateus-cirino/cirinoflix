import React from 'react';
import PageDefault from '../../templates/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Dados from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageDefault
      style={{ backgroundColor: '#141414' }}
    >
      <BannerMain
        videoTitle={Dados.categorias[0].titulo}
        videoDescription="Um pouco mais sobre os desenvolvedores"
        url={Dados.categorias[0].videos[0].url}
      />
      <Carousel
        category={Dados.categorias[0]}
      />
      <Carousel
        category={Dados.categorias[1]}
      />
    </PageDefault>
  );
}

export default Home;
