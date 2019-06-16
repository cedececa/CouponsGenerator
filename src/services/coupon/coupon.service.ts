import { Configuration } from "./configuration.model";
import { Coupon } from "./coupon.model";
import * as Algoritmos from "./algortimos/index";
declare var require: any;

export class CouponService {
  private configuration: Configuration;

  constructor() {
    this.loadConfiguration();
  }
  private loadConfiguration(): void {
    this.configuration = require("./configuration.json");
  }
  generateCoupons(quantity?: number): Coupon[] {
    // handle errors
    quantity = quantity ? quantity : this.configuration.quantity;
    if(quantity<=0){
      return [];
    }
    if(Algoritmos[this.configuration.algorithm]===undefined){
      alert(`does exist this algorithm ${this.configuration.algorithm}. Please, check it.`);
      return [];
    }

    // all fine, then generate coupons
    const currentAlgoritm = new Algoritmos[this.configuration.algorithm]();
    let coupons: Coupon[] = [];
    for (let i = 0; i < this.configuration.quantity; i++) {
      coupons.push({ code: currentAlgoritm.begin() });
    }
    return coupons;
  }
  getAllAlgorithms(): string[] {
    return Object.keys(Algoritmos);
  }
  setCurrentAlgoritm(name: string) {
    this.configuration.algorithm = name;
  }
  getCurrentAlgoritm(): string {
    return this.configuration.algorithm;
  }
}
