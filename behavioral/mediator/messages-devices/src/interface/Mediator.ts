import Colleague from "./Colleague";

export default interface Mediator {
  enviar(mensagem: string, colleague: Colleague): void;
}
