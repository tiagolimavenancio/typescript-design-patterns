import Observer from "../interface/Observer";
import ConcreteSubject from "./ConcreteSubject";

export default class ConcreteObserverB implements Observer {
    update(subject: ConcreteSubject): void {
        if(subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }   
}