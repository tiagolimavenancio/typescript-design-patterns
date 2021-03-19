import express from 'express';
import Facade from './classes/Facade';
import Subsystem1 from './classes/Subsystem1';
import Subsystem2 from './classes/Subsystem2';

const app = express();

function start() {
    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();
    const facade = new Facade(subsystem1, subsystem2);

    console.log(facade.operation());
}

const port = 3000;
app.listen(port , () => {
    console.log(`Server running on port ${port}`);
    start();
})
