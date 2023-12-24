import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

@Input() product:any;
@Input() showButton:any;

updateCartItem(num:Number){
  console.log("num",num)
}

// constructor(private cartService:CartService){}

// updateCartItem = (quantity: number) => {
//   this.cartService.updateCartItem({
//     cartItemId: this.product.id,
//     data: { quantity: quantity + this.product.quantity },
//   });
// };

removeCartItem(){
  console.log("remove cart item")
}


}
