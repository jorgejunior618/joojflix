import React from 'react';

import Data from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundColor: '#2f2f2f'}}>
      <Menu />

      <BannerMain
        videoTitle={Data.categorias[0].videos[0].titulo}
        url={Data.categorias[0].videos[0].url}
        videoDescription={"O que é front-end?"}
      />

      <Carousel
        ignoreFirstVideo
        category={Data.categorias[0]}
      />

      <Carousel
        category={Data.categorias[1]}
      />
      
      <Carousel
        category={Data.categorias[2]}
      />

      <Carousel
        category={Data.categorias[3]}
      />

      <Carousel
        category={Data.categorias[4]}
      />

      <Carousel
        category={Data.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
