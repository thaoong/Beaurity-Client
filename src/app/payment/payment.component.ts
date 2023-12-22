import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CosmeticService } from '../SERVICES/cosmetics.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../SERVICES/customers.service';
import { OrdersService } from '../SERVICES/orders.service';
import { AuthService } from '../SERVICES/auth.service';
import { Orders } from '../Interfaces/Order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  selectedItems: any[] = [];
  orderId!: string;
  cartItems: any;
  errMessage: string = '';
  quantityItem: number = 0;
  displayNumberItem: boolean = true;
  totalPrice: number = 0;
  discountCode: string = '';
  discountPrice: number = 0;
  prePrice: number = 0;
  price: number = 25000;
  deliveryFee: number = 25000;
  isChecked_Confirm: boolean = false;
  isChecked_COD: boolean = false;
  isChecked_MoMo: boolean = false;
  isChecked_Banking: boolean = false;
  orders: any;
  order = new Orders();
  isDonePayment: boolean = false;

  customers: any;
  deliveries: any;
  currentUser: any;
  constructor(
    private _service: CosmeticService,
    private _customerService: CustomersService,
    private _authService: AuthService,
    private _orderService: OrdersService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private route: ActivatedRoute
  ) 
  {
    this._service.getCart().subscribe({
      next: (data) => {
        this.cartItems = data;
        this.quantityItem = this.cartItems.length;
        if (this.cartItems.length > 0) {
          this.displayNumberItem = false;
        }

        for (let item of this.selectedItems) {
          const price: number = parseFloat(
            item.Price.replace(' đ/Hộp', '').replace('.', '')
          );
          this.totalPrice += price * item.quantity;
        }

        this.prePrice = this.totalPrice + this.discountPrice;
        this.price = this.prePrice + this.deliveryFee;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });

    this._customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });

    this.currentUser = this._authService.getCurrentUser();
  }

  checkBanking() {
    this.isChecked_Banking = true;
    this.isChecked_MoMo = false;
    this.isChecked_COD = false;
  }
  checkCOD() {
    this.isChecked_Banking = false;
    this.isChecked_MoMo = false;
    this.isChecked_COD = true;
  }
  checkMoMo() {
    this.isChecked_Banking = false;
    this.isChecked_MoMo = true;
    this.isChecked_COD = false;
  }
  applyDiscountCode() {
    if (this.discountCode == '666666') {
      this.discountPrice = this.totalPrice * 0.05;
    } else {
      this.discountPrice = 0;
    }
    this.prePrice = this.totalPrice + this.discountPrice;
    this.price = this.prePrice + this.deliveryFee;
  }

  onComplete() {
    this.order.OrderID = Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
      this.order.CustomerName = this.currentUser.Name,
      this.order.OrderDate = new Date().toLocaleDateString(),
      this.order.ShipDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      this.order.Status = 'Chờ xác nhận',
      this.order.Phone = this.currentUser.phonenumber,
      this.order.Email = this.currentUser.Mail,
      this.order.Address = this.currentUser.Address,
      this.order.TotalPrice = this.price,
      this.order.PrePrice = this.prePrice,
      this.order.DeliveryFee = this.deliveryFee,
      this.order.DiscountPrice = this.discountPrice,
      this.order.OrderCosmetic = this.cartItems
    if (this.isChecked_COD) {
      this.order.PaymentMethod = 'Thanh toán khi nhận hàng';
    } else if (this.isChecked_Banking) {
      this.order.PaymentMethod = 'Thanh toán qua thẻ ATM nội địa/ Internet Banking';
    } else if (this.isChecked_MoMo) {
      this.order.PaymentMethod = 'Thanh toán qua ví điện tử Momo';
    }

    if (this.isChecked_Confirm) {
      if (this.isChecked_COD) {
        this.isDonePayment = true;
        // Delete the cart items
        //this._service.deleteCart();
        // Navigate to the order detail page
        //this.router.navigate(['/app-orderdetail']);
      } else if (this.isChecked_Banking) {
        this.router.navigate(['/app-payment-banking']);
      } else if (this.isChecked_MoMo) {
        this.router.navigate(['/app-payment-momo']);
      } else {
        alert('Vui lòng chọn phương thức thanh toán');
      }
    } else {
      alert('Vui lòng đồng ý với điều khoản và điều kiện của chúng tôi');
    }


    if (this.isChecked_COD || this.isChecked_Banking || this.isChecked_MoMo) {
      if (this.isChecked_Confirm) {
        this._orderService.postOrder(this.order).subscribe({
          next: (data) => {
            this.order = data;
          },
          error: (err) => {
            this.errMessage = err;
          }
        });
      } else {
        return;
      }
    }
  }



  // viewOrderDetail() {

  //   if (this.isChecked_Confirm) {
  //     if(!this.isChecked_COD){
  //       return false
  //     }
  //     else{
  //       this._orderService.getOrders().subscribe({
  //         next: (data) => {
  //           this.orders = data;

  //           this.router.navigate(['/app-orderdetail/detail/', this.orders[this.orders.length - 1]._id]);
  //         },
  //         error: (err) => {
  //           this.errMessage = err;
  //         }
  //       });
  //       return
  //     }
  //   }
  //   else{ return false}

    // this._orderService.getOrders().subscribe({
    //   next: (data) => {
    //     this.orders = data;

    //     this.router.navigate(['/app-orderdetail/detail/', this.orders[this.orders.length - 1]._id]);
    //   },
    //   error: (err) => {
    //     this.errMessage = err;
    //   }
    // });
    // for(let item of this.cartItems){
    //   this._service.removeFromCart(item._id).subscribe(
    //     response => {
    //       console.log(response);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }
  // }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedItems = JSON.parse(params['selectedItems']);
    });
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
    });
  }

  //popup
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() confirmed = new EventEmitter<boolean>();

  //viewDetail(orderId: string) {
    //this.confirmed.emit(true);
    //this.router.navigate(['/app-order-detail/detail/', orderId]).then(() => {
      //window.scrollTo({ top: 0, behavior: 'smooth' });
    //});
 // }

  goHome() {
    this.confirmed.emit(false);
    this.router.navigate(['/app-home']);
  }
  findSum(item: any): string {
    const price: number = parseFloat(item.Price.replace(' VNĐ', '').replace('.', ''));
    const sum: number = price * item.quantity;
    return sum.toString(); // Convert the sum to a string without formatting
  }
  
}