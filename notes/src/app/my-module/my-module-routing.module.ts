import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo16LoginComponent } from '../demo16-login/demo16-login.component'
import { Demo16RegisterComponent } from '../demo16-register/demo16-register.component'
import { Demo16MainComponent } from '../demo16-main/demo16-main.component'
import { Demo16NotFoundComponent } from '../demo16-not-found/demo16-not-found.component'
import { Demo17CartComponent } from '../demo17-cart/demo17-cart.component'
import { Demo17OrderConfirmComponent } from '../demo17-order-confirm/demo17-order-confirm.component'
import { Demo17SubmitComponent } from '../demo17-submit/demo17-submit.component'
import { Demo18ListComponent } from '../demo18-list/demo18-list.component'
import { Demo18DetailComponent } from '../demo18-detail/demo18-detail.component'
import { Demo19LoginComponent } from '../demo19-login/demo19-login.component'
import { Demo19MailComponent } from '../demo19-mail/demo19-mail.component'
import { Demo19InboxComponent } from '../demo19-inbox/demo19-inbox.component'
import { Demo19OutboxComponent } from '../demo19-outbox/demo19-outbox.component'
import {Demo20AdminComponent} from '../demo20-admin/demo20-admin.component'
import {MyGuardService} from '../my-guard.service'

// 配置路由词典:由多个路由对象构成的数组
const routes: Routes = [
  {
    path: "",
    component: Demo16LoginComponent
  },
  {
    path:'admin',
    component:Demo20AdminComponent,
    canActivate:[MyGuardService]
  },
  {
    path: 'demo19Login',
    component: Demo19LoginComponent
  },
  {
    path: 'demo19Mail',
    component: Demo19MailComponent,
    children: [
      {
        path: "",
        component: Demo19InboxComponent
      },
      {
        path: 'outbox',
        component: Demo19OutboxComponent
      }
    ]
  },
  {
    path: 'demo18List',
    component: Demo18ListComponent
  },
  {
    path: 'demo18Detail/:id',
    component: Demo18DetailComponent
  },
  {
    path: 'submit/:price',
    component: Demo17SubmitComponent
  },
  {
    path: "cart",
    component: Demo17CartComponent
  },
  {
    path: 'orderConfirm',
    component: Demo17OrderConfirmComponent
  },
  {
    path: 'main',
    component: Demo16MainComponent
  },
  {
    path: 'login',
    component: Demo16LoginComponent
  },
  {
    path: 'register',
    component: Demo16RegisterComponent
  },
  {
    path: '**',
    component: Demo16NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
