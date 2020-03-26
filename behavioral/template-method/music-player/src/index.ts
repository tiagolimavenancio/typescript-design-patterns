import PlayList from "./classes/PlayList";
import ModoDeReproducao from "./constants/ModoDeReproducao";

function start() {
    const minhaPlayList = new PlayList(ModoDeReproducao.porNome);

    minhaPlayList.adicionarMusica("Everlong", "Foo Fighters", "1997", 5);
    minhaPlayList.adicionarMusica("Song 2", "Blur", "1997", 4);
    minhaPlayList.adicionarMusica("American Jesus", "Bad Religion", "1993", 3);
    minhaPlayList.adicionarMusica("No Cigar", "Milencollin", "2001", 2);
    minhaPlayList.adicionarMusica("Ten", "Pearl Jam", "1991", 1);

    console.log('=== Lista por Nome de Musica ===');
    minhaPlayList.mostrarListaDeReproducao();

    console.log("\n=== Lista por Autor ===");
    minhaPlayList.setModoDeReproducao(ModoDeReproducao.porAutor);
    minhaPlayList.mostrarListaDeReproducao();

    console.log("\n=== Lista por Ano ===");
    minhaPlayList.setModoDeReproducao(ModoDeReproducao.porAno);
    minhaPlayList.mostrarListaDeReproducao();

    console.log("\n=== Lista por Estrela ===");
    minhaPlayList.setModoDeReproducao(ModoDeReproducao.porEstrela);
    minhaPlayList.mostrarListaDeReproducao();
}

start();