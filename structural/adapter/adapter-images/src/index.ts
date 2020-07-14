import SDLImagemAdapter from "./classes/SDLImagemAdapter";
import OpenGLImagemAdapter from "./classes/OpenGLImagemAdapter";
import ImagemTarget from "./interfaces/ImagemTarget";

function start() {
  let imagem: ImagemTarget = new SDLImagemAdapter();
  imagem.carregarImagem("teste.png");
  imagem.desenharImagem(0, 0, 10, 10);

  imagem = new OpenGLImagemAdapter();
  imagem.carregarImagem("teste.png");
  imagem.desenharImagem(0, 0, 10, 10);
}

start();
