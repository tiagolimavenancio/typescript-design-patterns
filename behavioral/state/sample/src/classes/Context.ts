import State from '../abstract/State';

export default class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state)
    }

    public transitionTo(state: State): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public request1(): void {
        this.state.handle1();
    }

    public request2(): void {
        this.state.handle2();
    }
}