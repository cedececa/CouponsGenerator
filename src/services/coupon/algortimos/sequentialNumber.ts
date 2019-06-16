import { Algoritmo } from "./algoritmo.interface";

export class SequentialNumber implements Algoritmo {
  static next: number = 1000000;
  begin(): string {
    return SequentialNumber.generate();
  }
  private static generate(): string {
    const toBeReturned = this.next.toString();
    this.next++;
    return toBeReturned;
  }
}
