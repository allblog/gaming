import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.css';

export default class Main extends Component{
  state = {
    videos: [
      {_id: "001", channelName: "Plenitude Gamer", channelAvatar: "https://yt3.ggpht.com/a/AATXAJxrOUD7d4YJD5UW8TsYQ2C0tddeKEThPScTMSNycQ=s48-c-k-c0xffffffff-no-rj-mo", videoName: "O FUTURO DA FRANQUIA BATTLEFIELD", videoViews: 558, videoTime: "10:3", videoImage: "https://i.ytimg.com/vi/KzykHNGPZws/maxresdefault.jpg"},
      {_id: "002", channelName: "Girl Player", channelAvatar: "https://media.istockphoto.com/vectors/cute-gamer-girl-vector-id547533296", videoName: "gameplay of LOL", videoViews: 107423, videoTime: "05:27", videoImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAngogNCPVlgwdfKYTXnS-5l9wQqZVdLZeSA&usqp=CAU"},
      {_id: "003", channelName: "ProPlayer", channelAvatar: "https://img2.gratispng.com/20180713/xhu/kisspng-republic-of-gamers-gaming-computer-pc-game-video-g-asus-logo-5b48e8fb1bc6a4.0008905715315048911138.jpg", videoName: "Apresentação do setup", videoViews: 65307, videoTime: "12:07", videoImage: "https://i.ytimg.com/vi/s1slo-a9Vvc/maxresdefault.jpg"},
      {_id: "004", channelName: "Controle 2", channelAvatar: "https://network.bbtv.com/pt/wp-content/uploads/sites/2/2014/10/ControleDois-Orange.jpg", videoName: "Controle 2 Animado -REI DO GANG BEASTS com Authentic, Leon, Edu e Caue", videoViews: 25804, videoTime: "02:14", videoImage: "https://i.ytimg.com/vi/hCT6QTXk3UY/maxresdefault.jpg"},
      {_id: "005", channelName: "Republica Coisa de Nerd", channelAvatar: "https://yt3.ggpht.com/a/AATXAJzar-OfBvtc5OUKHkESyTntlo16u431Th3R84f9=s900-c-k-c0xffffffff-no-rj-mo", videoName: "ME DÁ UMA MOEDA! - Mario Maker 2", videoViews: 65307, videoTime: "12:07", videoImage: "https://i.ytimg.com/vi/iz7bqqiO8x8/maxresdefault.jpg"},
      {_id: "006", channelName: "NVIDIA GeForce Brasil", channelAvatar: "https://yt3.ggpht.com/a/AATXAJyYt2zLxhA9EsYXvQH8FZ90ziHprXP1aVVuwO9SQQ=s100-c-k-c0xffffffff-no-rj-mo", videoName: "Minecraft RTX ON/OFF Demonstração em Gameplay", videoViews: 65307, videoTime: "01:30", videoImage: "https://i.ytimg.com/vi/SYIe2-ym0pQ/maxresdefault.jpg"}],
    videosAlta: [
      {_id: "005", channelName: "NVIDIA GeForce Brasil", channelAvatar: "https://yt3.ggpht.com/a/AATXAJyYt2zLxhA9EsYXvQH8FZ90ziHprXP1aVVuwO9SQQ=s100-c-k-c0xffffffff-no-rj-mo", videoName: "Minecraft RTX ON/OFF Demonstração em Gameplay", videoViews: 65307, videoTime: "01:30", videoImage: "https://i.ytimg.com/vi/SYIe2-ym0pQ/maxresdefault.jpg"},
      {_id: "004", channelName: "Republica Coisa de Nerd", channelAvatar: "https://yt3.ggpht.com/a/AATXAJzar-OfBvtc5OUKHkESyTntlo16u431Th3R84f9=s900-c-k-c0xffffffff-no-rj-mo", videoName: "ME DÁ UMA MOEDA! - Mario Maker 2", videoViews: 65307, videoTime: "12:07", videoImage: "https://i.ytimg.com/vi/iz7bqqiO8x8/maxresdefault.jpg"},
      {_id: "003", channelName: "Controle 2", channelAvatar: "https://network.bbtv.com/pt/wp-content/uploads/sites/2/2014/10/ControleDois-Orange.jpg", videoName: "Controle 2 Animado -REI DO GANG BEASTS com Authentic, Leon, Edu e Caue", videoViews: 25804, videoTime: "02:14", videoImage: "https://i.ytimg.com/vi/hCT6QTXk3UY/maxresdefault.jpg"},
      {_id: "002", channelName: "ProPlayer", channelAvatar: "https://img2.gratispng.com/20180713/xhu/kisspng-republic-of-gamers-gaming-computer-pc-game-video-g-asus-logo-5b48e8fb1bc6a4.0008905715315048911138.jpg", videoName: "Apresentação do setup", videoViews: 65307, videoTime: "12:07", videoImage: "https://i.ytimg.com/vi/s1slo-a9Vvc/maxresdefault.jpg"},
      {_id: "001", channelName: "Girl Player", channelAvatar: "https://media.istockphoto.com/vectors/cute-gamer-girl-vector-id547533296", videoName: "gameplay of LOL", videoViews: 107423, videoTime: "05:27", videoImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAngogNCPVlgwdfKYTXnS-5l9wQqZVdLZeSA&usqp=CAU"}],
    canais: [
      {_id: "002", personName: "Diana Zambrozuski", personImage: "https://conteudo.imguol.com.br/c/entretenimento/96/2020/06/30/diana-zambrozusky-streamer-1593543499582_v2_600x800.jpg", personFollowers: "500737"},
      {_id: "003", personName: "Say_Clips", personImage: "https://www.tiktok.com/api/img/?itemId=6835715332968041734&location=0", personFollowers: "4590"},
      {_id: "004", personName: "Ayu Brazil", personImage: "https://pbs.twimg.com/media/DIkZwDSXkAEKiwa.jpg", personFollowers: "973590"},
      {_id: "005", personName: "Republica Coisa de Nerd", personImage: "https://criadoresid.com/wp-content/uploads/2016/10/Captura-de-Tela-2020-02-17-a%CC%80s-16.41.06.png", personFollowers: "856321"},
      {_id: "006", personName: "Edukof", personImage: "https://criadoresid.com/wp-content/uploads/2016/10/Captura-de-Tela-2020-02-13-a%CC%80s-16.33.42.png", personFollowers: "685314"},
      {_id: "007", personName: "Tazercraft", personImage: "https://allmanaque.com//uploads/images/tazercraft_divulgacao.jpg", personFollowers: "1356243"}
    ],
    listaCanaisMargin: 0
  }

  mover(objeto, valor){
    let {listaCanaisMargin} = this.state;
    let div = document.getElementById(objeto);

    let tamanho = div.clientWidth/9;
    if(valor > 0 && listaCanaisMargin > (tamanho*3)*-1){
      listaCanaisMargin = parseInt(listaCanaisMargin - tamanho);
      div.style.marginLeft = `${listaCanaisMargin}px`;
    }
    if(valor < 0 && listaCanaisMargin < 0){
      listaCanaisMargin = parseInt(listaCanaisMargin + tamanho);
      div.style.marginLeft = `${listaCanaisMargin}px`;
    }
    this.setState({listaCanaisMargin})
  }

  render(){
    const {videos, canais, videosAlta} = this.state;
    return(
      <Container>

        <Row>
          <Col lg="12">
            <Row>
              <Col lg="12">
                <h2 className="text-white mt-5 h5">Canais sugeridos</h2>
                <hr/>
              </Col>
            </Row>

              <Row>

                <span className="seta seta-esquerda" onClick={()=>{ this.mover('lista-canais', -1); }}><i className="fas fa-arrow-circle-left"></i></span>
                <Col className="canais-sugeridos" lg="12">
                  <Row id="lista-canais">
                {videos.map(video => (
                  <Col lg="2" md="3" sm="3" key={video._id} className="video-card text-white col-12">
                    <div className="video-card-imagem" style={{backgroundImage: `url(${video.videoImage})`}}> <span className="video-card-videotime">{video.videoTime}</span> </div>
                    <div className="video-card-avatar" style={{backgroundImage: `url(${video.channelAvatar})`}}></div>
                    <div className="video-card-body">
                      <span className="video-card-title" title={video.videoName}>{video.videoName}</span>
                      <span className="video-card-channelname">{video.channelName}</span>
                      <span className="video-card-videoviews">{video.videoViews}</span>
                    </div>
                  </Col>
                ))}
                </Row>

              </Col>
              <span className="seta seta-direita" onClick={()=>{ this.mover('lista-canais', +1); }}><i className="fas fa-arrow-circle-right"></i></span>
              </Row>

          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <Row>
              <Col lg="12">
                <h2 className="text-white mt-5 h5">Canais sugeridos</h2>
                <hr/>
              </Col>
            </Row>
            <Row className="card-gamer-master">
            {canais.map(canal => (
              <Col lg="2" md="3" key={canal._id} className="card-gamer text-white col-4">
                <div className="card-gamer-image" style={{backgroundImage: `url(${canal.personImage})`}}>
                  <span className="card-gamer-nome">{canal.personName}</span>
                  <span className="card-gamer-seguidores">{canal.personFollowers}</span>
                </div>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>


        <Row>
          <Col lg="12">
            <Row>
              <Col lg="12">
                <h2 className="text-white mt-5 h5">Em alta</h2>
                <hr/>
              </Col>
            </Row>

              <Row>
                <span className="seta seta-esquerda" onClick={()=>{ this.mover('lista-em-alta', -1); }}><i className="fas fa-arrow-circle-left"></i></span>
                <Col className="canais-sugeridos mb-5" lg="12">
                  <Row id="lista-em-alta">
                {videosAlta.map(video => (
                  <Col lg="2" md="2" sm="3" key={video._id} className="video-card text-white">
                    <div className="video-card-imagem" style={{backgroundImage: `url(${video.videoImage})`}}> <span className="video-card-videotime">{video.videoTime}</span> </div>
                    <div className="video-card-avatar" style={{backgroundImage: `url(${video.channelAvatar})`}}></div>
                    <div className="video-card-body">
                      <span className="video-card-title" title={video.videoName}>{video.videoName}</span>
                      <span className="video-card-channelname">{video.channelName}</span>
                      <span className="video-card-videoviews">{video.videoViews}</span>
                    </div>
                  </Col>
                ))}
                </Row>

                </Col>
                <span className="seta seta-direita" onClick={()=>{ this.mover('lista-em-alta', +1); }}><i className="fas fa-arrow-circle-right"></i></span>
              </Row>

          </Col>
        </Row>

      </Container>
    )
  }
}
