import Mediator from "../interface/Mediator";

export default class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
