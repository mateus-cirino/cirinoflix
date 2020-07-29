import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'; 
import Dados from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div
      style={{'backgroundColor':'#141414'}}>
        <Menu />
        <BannerMain   
          videoTitle={Dados.categorias[0].titulo}
          videoDescription='Um pouco mais sobre os desenvolvedores'
          url={Dados.categorias[0].videos[0].url}/>
        <Carousel
          category={Dados.categorias[0]}/>
        <Carousel
          category={Dados.categorias[1]}/>
        <Footer />
    </div>
    );
}

export default Home;