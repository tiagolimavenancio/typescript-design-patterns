import AbstractHandler from "./AbstractHandler";

export default class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request.toLowerCase() === "nut") {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}
