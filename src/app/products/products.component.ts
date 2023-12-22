import { Component } from '@angular/core';
import { CosmeticService } from '../SERVICES/cosmetic.service';
import { Cosmetics } from '../Interfaces/Cosmetic';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  [x: string]: any;
  category: string = '';
  categories: any[] | undefined
  cosmetics: any;
  cosmeticCategory: any;
  cosmetic = new Cosmetics();
  errMessage: string = '';
  displayProduct: boolean = true;

  constructor(public _service: CosmeticService, private router: Router, private activateRoute: ActivatedRoute) {
    this._service.getCosmetics().subscribe({
      next: (data) => {
        // Lấy danh sách các Cosmetics
        this.cosmetics = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewCosmeticDetail(f: any) {
    this.router.navigate(['app-product-detail', f._id]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }

}
