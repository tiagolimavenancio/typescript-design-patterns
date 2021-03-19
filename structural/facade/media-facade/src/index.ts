import express from 'express'
import Facade from './interfaces/Facade';

const app = express();

function start() {
    console.log('##### Configurando subsistemas #####');
    const facade = new Facade();

    console.log("##### Utilizando subsistemas #####");
	facade.renderImage("imagem.png");
	facade.playAudio("teste.mp3");
	facade.readInput();
}

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});