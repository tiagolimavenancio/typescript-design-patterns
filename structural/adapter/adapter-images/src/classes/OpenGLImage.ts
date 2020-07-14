export default class OpenGLImage {
  public glCarregarImagem(arquivo: string): void {
    console.log(`Imagem ${arquivo} carregada.`);
  }

  public glDesenharImagem(posicaoX: number, posicaoY: number): void {
    console.log("OpenGL Image desenhada");
  }
}
