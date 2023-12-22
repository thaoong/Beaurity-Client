import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPassword2Component } from './forgot-password-2/forgot-password-2.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ConfirmSignUpComponent } from './confirm-sign-up/confirm-sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentMomoComponent } from './payment-momo/payment-momo.component';
import { PaymentBankingComponent } from './payment-banking/payment-banking.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SignUpSuccessfullyComponent } from './sign-up-successfully/sign-up-successfully.component';
import { TypeBankAccountComponent } from './type-bank-account/type-bank-account.component';
import { InforComponent } from './infor/infor.component';
import { BeauritystoryComponent } from './infor/beauritystory/beauritystory.component';
import { IngredientstoryComponent } from './infor/ingredientstory/ingredientstory.component';
import { PolicydeliveryComponent } from './infor/policydelivery/policydelivery.component';
import { PolicysecurityComponent } from './infor/policysecurity/policysecurity.component';
import { PolicypaymentComponent } from './infor/policypayment/policypayment.component';
import { ShoppinginstructionComponent } from './infor/shoppinginstruction/shoppinginstruction.component';
import { PolicywarrantyComponent } from './infor/policywarranty/policywarranty.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { SignupOtpComponent } from './sign-up/signup-otp/signup-otp.component';
import { ProductsComponent } from './products/products.component';
import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "app-home", component: HomeComponent },
  { path: "app-cart", component: CartComponent },
  { path: "app-signup", component: SignUpComponent },
  { path: "app-login", component: LoginComponent },
  { path: "app-forgot-password", component: ForgotPasswordComponent },
  { path: "app-forgot-password2", component: ForgotPassword2Component },
  { path: "app-reset-password", component: ResetPasswordComponent },
  { path: "app-sign-up-successfully", component: SignUpSuccessfullyComponent },
  { path: "app-account", component: AccountComponent },
  { path: "app-category", component: CategoryComponent },
  { path: 'app-category/:category', component: CategoryComponent },
  { path: 'categories/category/:name', component: CategoryComponent },
  { path: "app-chatbox", component: ChatboxComponent },
  { path: "app-confirm-sign-up", component: ConfirmSignUpComponent },
  { path: "app-footer", component: FooterComponent },
  { path: "app-header", component: HeaderComponent },
  { path: "app-navigation-bar", component: NavigateBarComponent },
  { path: "app-order-detail/detail/:id", component: OrderDetailComponent },
  { path: "app-payment", component: PaymentComponent },
  { path: "app-payment-momo", component: PaymentMomoComponent },
  { path: "app-payment-banking", component: PaymentBankingComponent },
  { path: "app-type-back-account", component: TypeBankAccountComponent },
  { path: "app-product-detail/:id", component: ProductDetailComponent },
  { path: "app-search-bar", component: SearchBarComponent },
  { path: "app-search-result", component: SearchResultComponent },
  { path: "app-infor", component: InforComponent },
  { path: "app-beauritystory", component: BeauritystoryComponent },
  { path: "app-ingredientstory", component: IngredientstoryComponent },
  { path: "app-policydelivery", component: PolicydeliveryComponent },
  { path: "app-policysecurity", component: PolicysecurityComponent },
  { path: "app-policypayment", component: PolicypaymentComponent },
  { path: "app-policywarranty", component: ShoppinginstructionComponent },
  { path: "app-profile", component: ProfileComponent },
  { path: "app-blog", component: BlogComponent },
  { path: "app-signup-otp", component: SignupOtpComponent },
  { path: "app-products", component: ProductsComponent },
  { path: "app-deals", component: DealsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  HomeComponent,
  CartComponent,
  SignUpComponent,
  LoginComponent,
  ForgotPasswordComponent,
  ForgotPassword2Component,
  ResetPasswordComponent,
  SignUpSuccessfullyComponent,
  AccountComponent,
  CategoryComponent,
  ChatboxComponent,
  ConfirmSignUpComponent,
  FooterComponent,
  HeaderComponent,
  NavigateBarComponent,
  OrderDetailComponent,
  PaymentComponent,
  PaymentMomoComponent,
  PaymentBankingComponent,
  TypeBankAccountComponent,
  ProductDetailComponent,
  SearchBarComponent,
  SearchResultComponent,
  InforComponent,
  BeauritystoryComponent,
  IngredientstoryComponent,
  PolicypaymentComponent,
  PolicydeliveryComponent,
  PolicysecurityComponent,
  PolicywarrantyComponent,
  ShoppinginstructionComponent,
  ProfileComponent,
  BlogComponent,
  SignupOtpComponent
]