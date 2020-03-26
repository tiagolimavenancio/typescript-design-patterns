import Subject from "../interface/Subject";
import Observer from "../interface/Observer";

export default class ConcreteSubject implements Subject {
    
    public state: number;
    private observers:  Observer[] = [];

    attach(observer: Observer): void {
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    notify(): void {
        console.log('Subject: Notifying observers...');
        for(const observer of this.observers) {
            observer.update(this);
        }
    }
    
    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}