export default class SDLSurface {
  public sdlCarregarSurface(arquivo: string): void {
    console.log(`Imagem ${arquivo} carregada.`);
  }

  public sdlDesenharSurface(
    largura: number,
    altura: number,
    posicaoX: number,
    posicaoY: number
  ): void {
    console.log("SDL Surface desenhada");
  }
}
