import { ViewChild } from '@angular/core';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { AuthService } from '../SERVICES/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../SERVICES/profile.service';
import { Profile } from '../Interfaces/profile';
import { Customers, Delivery } from '../Interfaces/Customer';
import { Orders } from '../Interfaces/Order';
import { OrdersService } from '../SERVICES/orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  // @Input() customer = new Customers();
  // changelog: string[] = [];
  isLoggedIn = true;
  currentUser: any;
  errMessage: string = '';
  customers: any;
  delivery = new Delivery();

  orders: [] = [];
  cusOrders: any;

  customer = new Customers();
  deliverys: any;

  public setProfile(c: Customers) {
    this.customer = c;
  }

  public setDelivery(d: Delivery) {
    this.delivery = d;
  }

  constructor(
    private authService: AuthService,
    private _orderService: OrdersService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private _service: ProfileService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.currentUser = this.authService.getCurrentUser();

    this._orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        // for(let or of this.orders){
        //   if(or['Phone'] == this.currentUser.phonenumber){
        //     this.cusOrders.push(or);
        //   }
        // }
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
    this._orderService.getOrderCustomer(this.currentUser.Name).subscribe({
      next: (data) => {
        this.cusOrders = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });

  }

  viewOrderDetail(orderId: any) {
    this.router.navigate(['/app-order-detail/detail/', orderId]);
  }

  Name: any;
  phonenumber: any;
  Mail: any;
  Address: any;
  Gender: any;
  BOD: any;

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('CurrentUser')!);
    if (user) {
      this._service.getCustomer(user.phonenumber).subscribe({
        next: (data) => {
          this.customer = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
      this._service.getDelivery(user.phonenumber).subscribe({
        next: (data) => {
          this.delivery = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('OnChanges');
  //   console.log(JSON.stringify(changes));
  //   for (const propName in changes) {
  //     const change = changes[propName];
  //     const to  = JSON.stringify(change.currentValue);
  //     const from = JSON.stringify(change.previousValue);
  //     const changeLog = `${propName}: changed from ${from} to ${to} `;
  //     this.changelog.push(changeLog);
  // }}
  // searchCustomer(){
  //   this._service.getCustomer(this.customer.Phone).subscribe({
  //     next:(data)=>{this.customers=data},
  //     error:(err)=>{this.errMessage=err}
  //   })
  // }

  postDelivery() {
    this._service.postDelivery(this.delivery).subscribe({
      next: (data) => {
        this.delivery = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.adding = false;
    this.addNewAddress = true;
  }
  id: any = 'address';
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id);
  }

  st: any = 'status--all';
  tabStatus(sts: any) {
    this.st = sts;
    console.log(this.st);
  }

  avatarUrl = 'assets/image/profile/avt.png';

  editing = false;

  edit() {
    this.editing = true;
    this.adding = false;
    this.editingAddress = false;
  }

  putCustomer() {
    this._service.updateCustomer(this.customer).subscribe({
      next: (data) => {
        this.customer = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  saveInfor() {
    this.editing = false;
  }

  onFileSelected(event: any, customer: Customers) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      customer.Image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  cancelEdit() {
    // this.customer.CustomerName = this.customer.CustomerName;
    // this.customer.Gender =  this.customer.Gender;
    // this.customer.Phone = this.customer.Phone;
    // this.customer.BOD = this.customer.BOD;
    // this.customer.Mail = this.customer.Mail;
    this.editing = false;
  }

  defaultAddress = 'true';

  nameAddressAdd: string = '';
  phoneAddressAdd = '';
  addressDeliveryAdd: string = '';

  nameAddressNew: string = '';
  phoneAddressNew = '';
  addressDeliveryNew: string = '';

  adding = false;
  addNewAddress = false;

  addAddress() {
    this.nameAddressAdd = ' ';
    this.phoneAddressAdd = ' ';
    this.addressDeliveryAdd = ' ';

    this.adding = true;
    this.editing = false;
    this.editingAddress = false;
  }

  // saveAddress(){
  //   this.nameAddressNew = this.nameAddressAdd;
  //   this.phoneAddressNew=this.phoneAddressAdd;
  //   this.addressDeliveryNew = this.addressDeliveryAdd;

  //   this.adding= false;
  //   this.addNewAddress=true
  // }

  cancelAddress() {
    this.adding = false;
  }
  // edit địa chỉ
  nameAddressEdit: string = ' ';
  phoneAddressEdit = '';
  addressDeliveryEdit: string = '';
  editingAddress = false;

  editAddress() {
    // this.nameAddressEdit = this.Name;
    // this.phoneAddressEdit = this.phonenumber;
    // this.addressDeliveryEdit = this.Address;

    this.editingAddress = true;
    this.adding = false;
    this.editing = false;
  }

  putDelivery() {
    this._service.updateDelivery(this.delivery).subscribe({
      next: (data) => {
        this.deliverys = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.editingAddress = false;
  }

  saveEditAddress() {
    this.delivery.Address = this.deliverys.Address; 
    
    // this.Name = this.nameAddressEdit;
    // this.phonenumber = this.phoneAddressEdit;
    // this.Address = this.addressDeliveryEdit;
  }
  cancelEditAddress() {
    this.Name = this.Name;
    this.phonenumber = this.phonenumber;
    this.Address = this.Address;

    this.editingAddress = false;
  }
}