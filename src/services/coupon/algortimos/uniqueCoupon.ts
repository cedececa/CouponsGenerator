import { Algoritmo } from "./algoritmo.interface";

export class UniqueCoupon implements Algoritmo {
  begin(): string {
    return (
      this.randomFourChars() + this.randomFourChars() + this.randomFourChars()
    );
  }
  private randomFourChars(): string {
    return Math.floor((1 + Math.random()) * 65536)
      .toString(16)     // show the number in hexadecimal value
      .substring(1);    // get last 4 chars
  }
}
