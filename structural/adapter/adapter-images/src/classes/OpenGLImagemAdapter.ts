import OpenGLImage from "./OpenGLImage";
import ImagemTarget from "../interfaces/ImagemTarget";

export default class OpenGLImagemAdapter extends OpenGLImage
  implements ImagemTarget {
  carregarImagem(nomeDoArquivo: string): void {
    this.glCarregarImagem(nomeDoArquivo);
  }

  desenharImagem(
    posX: number,
    posY: number,
    largura: number,
    altura: number
  ): void {
    this.glDesenharImagem(posX, posY);
  }
}
