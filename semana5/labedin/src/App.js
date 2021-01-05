import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Tecnologia from './components/Tecnologias/Tecnologia';
import logo from './img/foto.jpg';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={logo}
          nome="Fernando"
          descricao="Olá! eu sou Fernando, Desenvolvedor Web iniciante e aluno Labenu. Sou formado em engenharia, trabalhei com pesquisa por um tempo, mas me encontrei mesmo foi programando."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
          icone='https://png.pngtree.com/png-clipart/20191120/original/pngtree-email-icon-png-image_5065641.jpg'
          textoCard='fernando@labenu.com'
        />

        <CardPequeno
          icone='https://e7.pngegg.com/pngimages/888/998/png-clipart-location-logo-a1-furniture-warehouse-conlin-s-furniture-map-map.png'
          textoCard='Rua Brasil das Gerais, Ouro Preto MG. 35400-000.'
        />
      </div>
      <h2>Conhecimentos em Programação</h2>
      <div className="container-tecnologia">
        <ul>
          <Tecnologia
            tecnologia='HTML5'
            nivel='Avançado'
          />
          <Tecnologia
            tecnologia='CSS'
            nivel='Avançado'
          />
          <Tecnologia
            tecnologia='JavaScript'
            nivel='Avançado'
          />
          <Tecnologia
            tecnologia='Python'
            nivel='Avançado'
          />

        </ul>
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudante Desenvolvedor Web Fullstack."
          inicio='10/2020'
          fim="06/2021"
        />
        <CardGrande
          imagem="http://www.m4a.pt/v1/images/servicos-e-produtos/electricidade.jpg"
          nome="Eletricista"
          descricao="Eletricista residencial e comercial nos EUA."
          inicio='01/2019'
          fim="12/2020"
        />

      </div>
      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande
          imagem="https://redemat.ufop.br/sites/default/files/redemat/files/logomarca_da_redemat_-_nova-res.jpg.png?m=1557872402"
          nome="Rede Temática em Engenharia de Materiais REDEMAT"
          descricao="Mestrado em Engenharia de Materias - Engenharia de Superfícies - Corrosão"
          inicio='03/2015'
          fim="07/2017"
        />
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/b/b9/UFOP_logo.gif"
          nome="Universidade Federal de Ouro Preto"
          descricao="Estudante Engenharia Metalúrgica."
          inicio='01/2009'
          fim="12/2014"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
        <ImagemButton
          imagem="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          texto="linkedin"
        />
        <ImagemButton
          imagem="https://www.sferalabs.cc/wp-content/uploads/github-logo.png"
          texto="Github"
        />
      </div>
    </div>
  );
}

export default App;
