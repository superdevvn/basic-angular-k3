import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';
import { InoutService } from './inout.service';
import { ProductService } from '../product/product.service';
import { WarehouseService } from '../warehouse/warehouse.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-inout-detail',
  templateUrl: './inout-detail.component.html',
  styleUrls: ['./inout-detail.component.css']
})
export class InoutDetailComponent implements OnInit {
  id: number;
  inout: any = {};
  whs: any[];
  users: any[];
  products: any[];
  types: any[];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private inoutService: InoutService,
    private notifyService: NotifyService,
    private loadingService: LoadingService,
    private productService: ProductService,
    private warehouserService: WarehouseService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.warehouserService.getWhs().then((whs: any) => {
        this.whs = whs;
        if (this.id == 0) {
          this.inout.WarehouseId = whs[0].Id;
        }
      });
      this.userService.getUsers().then((users: any) => {
        this.users = users;
        if (this.id == 0) {
          this.inout.UserId = users[0].Id;
        }
      });
      this.productService.getProducts().then((products: any) => {
        this.products = products;
        if (this.id == 0) {
          this.inout.ProductId = products[0].Id;
        }
      });
      this.types = [
        { value: 0, name: "Import" },
        { value: 1, name: "Export" },
        { value: 2, name: "Sale" }
      ];
      if (this.id == 0) {
        this.inout.Type = this.types[0].value;
      };
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.inoutService.getInOut(this.id).then(inout => {
          this.inout = inout;
          this.loadingService.stop();
        }).catch(err => {
          this.notifyService.error("Loading failed!");
        })
      };
    });
  }

  cancel() {
    this.router.navigate(['main/inout-list']);
  }

  save() {
    this.inoutService.saveInOut(this.inout).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/inout-detail", res.Id]);
      this.notifyService.success("Saving successful!");
      this.router.navigate(["main/inout-list"]);
    }).catch(err => {
      this.notifyService.error("Saving failed!");
    });
  }
}
