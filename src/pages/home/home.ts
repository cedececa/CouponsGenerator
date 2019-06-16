import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CouponService } from "../../services/coupon/coupon.service";
import { Coupon } from "../../services/coupon/coupon.model";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // models data
  coupons: Coupon[];
  algoritmos: string[];
  currentAlgoritmo: string;

  // GUI controls data
  segmentPage: string = "coupons";

  constructor(
    public navCtrl: NavController,
    public couponService: CouponService
  ) {
    this.coupons = couponService.generateCoupons();
    this.currentAlgoritmo = couponService.getCurrentAlgoritm();
    this.algoritmos = couponService.getAllAlgorithms();
  }

  setAlgoritmoAndUpdateCoupons(algoritmo: string) {
    this.couponService.setCurrentAlgoritm(algoritmo);
    this.currentAlgoritmo = algoritmo;
    this.updateCoupons();
  }
  private updateCoupons(){
    this.coupons = this.couponService.generateCoupons();
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.coupons.push(...this.couponService.generateCoupons(10));
      infiniteScroll.complete();
    }, 500);
  }
}
