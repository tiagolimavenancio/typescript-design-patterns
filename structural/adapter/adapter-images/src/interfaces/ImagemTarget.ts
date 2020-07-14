export default interface ImagemTarget {
  carregarImagem(nomeDoArquivo: string): void;
  desenharImagem(
    posX: number,
    posY: number,
    largura: number,
    altura: number
  ): void;
}
