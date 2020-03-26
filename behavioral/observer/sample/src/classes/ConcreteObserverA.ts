import Observer from "../interface/Observer";
import ConcreteSubject from "./ConcreteSubject";

export default class ConcreteObserverA implements Observer {
    update(subject: ConcreteSubject): void {
        if(subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}