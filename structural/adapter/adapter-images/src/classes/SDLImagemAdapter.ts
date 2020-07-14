import ImagemTarget from "../interfaces/ImagemTarget";
import SDLSurface from "./SDLSurface";

export default class SDLImagemAdapter extends SDLSurface
  implements ImagemTarget {
  carregarImagem(nomeDoArquivo: string): void {
    this.sdlCarregarSurface(nomeDoArquivo);
  }

  desenharImagem(
    posX: number,
    posY: number,
    largura: number,
    altura: number
  ): void {
    this.sdlDesenharSurface(largura, altura, posX, posY);
  }
}
