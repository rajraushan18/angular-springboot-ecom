import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  selectedSize:any;
  relatedProducts: any;

  reviews=[1,1,1,1]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private store: Store<AppState>,
    // private productService: ProductService,
    // private cartService:CartService,
  ) {
    // this.relatedProducts = productdata;
  }

  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit(){
    this.relatedProducts = mensPantsPage1
  }
  

  handleAddToCart = () => {

    this.router.navigate(['cart'])

    console.log(this.selectedSize);
  };


}
