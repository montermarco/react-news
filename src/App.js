import React, { Component, Fragment } from 'react';
import Header from './componentes/Header';
import News from './componentes/News';
import Form from './componentes/Form';

class App extends Component {

  state={
    news: []
  };


  //recomendable llamar la API en aqui
  componentDidMount(){
    this.feedNews();
  }

  feedNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=c4abdcd476024514b1cb41ff566925a7`;
    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    });
  }

  render(){
    return (

      <Fragment>
        <Header title="Monter News"/>
        
        <div className="container white contenedor-noticias">
            <Form feedNews={this.feedNews}/>
            <News news={this.state.news} />
        </div>
      </Fragment>
    );
  }
};

export default App;
