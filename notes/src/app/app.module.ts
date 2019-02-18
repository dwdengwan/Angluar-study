import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {MyModuleRoutingModule} from './my-module/my-module-routing.module'

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02LianxiComponent } from './demo02-lianxi/demo02-lianxi.component';
import { Demo03DirctivesComponent } from './demo03-dirctives/demo03-dirctives.component';
import { Demo04LianxiComponent } from './demo04-lianxi/demo04-lianxi.component';
import { Demo05BindingsComponent } from './demo05-bindings/demo05-bindings.component';
import { Demo06PipesComponent } from './demo06-pipes/demo06-pipes.component';
import { SexPipe } from './sex.pipe';
import { Demo07LianxiComponent } from './demo07-lianxi/demo07-lianxi.component';
import { Demo08CartComponent } from './demo08-cart/demo08-cart.component';
import { Demo08HeaderComponent } from './demo08-header/demo08-header.component';
import { Demo09ChatroomComponent } from './demo09-chatroom/demo09-chatroom.component';
import { Demo09InputComponent } from './demo09-input/demo09-input.component';
import { Demo10FatherComponent } from './demo10-father/demo10-father.component';
import { Demo10SonComponent } from './demo10-son/demo10-son.component';
import { Demo11TestComponent } from './demo11-test/demo11-test.component';
import { Demo12LianxiComponent } from './demo12-lianxi/demo12-lianxi.component';
import { Demo13XiongdaComponent } from './demo13-xiongda/demo13-xiongda.component';
import { Demo13XiongerComponent } from './demo13-xionger/demo13-xionger.component';
import { Demo13XiongbaComponent } from './demo13-xiongba/demo13-xiongba.component';
import { Demo14HttpComponent } from './demo14-http/demo14-http.component';
import { Demo15ListComponent } from './demo15-list/demo15-list.component';
import { Demo15ItemComponent } from './demo15-item/demo15-item.component';
import { Demo16LoginComponent } from './demo16-login/demo16-login.component';
import { Demo16RegisterComponent } from './demo16-register/demo16-register.component';
import { Demo16RegisteComponent } from './demo16-registe/demo16-registe.component';
import { Demo16MainComponent } from './demo16-main/demo16-main.component';
import { Demo16NotFoundComponent } from './demo16-not-found/demo16-not-found.component';
import { Demo17CartComponent } from './demo17-cart/demo17-cart.component';
import { Demo17OrderConfirmComponent } from './demo17-order-confirm/demo17-order-confirm.component';
import { Demo17SubmitComponent } from './demo17-submit/demo17-submit.component';
import { Demo18ListComponent } from './demo18-list/demo18-list.component';
import { Demo18LisComponent } from './demo18-lis/demo18-lis.component';
import { Demo18DetailComponent } from './demo18-detail/demo18-detail.component';
import { Demo19LoginComponent } from './demo19-login/demo19-login.component';
import { Demo19MailComponent } from './demo19-mail/demo19-mail.component';
import { Demo19InboxComponent } from './demo19-inbox/demo19-inbox.component';
import { Demo19OutboxComponent } from './demo19-outbox/demo19-outbox.component';
import { Demo20AdminComponent } from './demo20-admin/demo20-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02LianxiComponent,
    Demo03DirctivesComponent,
    Demo04LianxiComponent,
    Demo05BindingsComponent,
    Demo06PipesComponent,
    SexPipe,
    Demo07LianxiComponent,
    Demo08CartComponent,
    Demo08HeaderComponent,
    Demo09ChatroomComponent,
    Demo09InputComponent,
    Demo10FatherComponent,
    Demo10SonComponent,
    Demo11TestComponent,
    Demo12LianxiComponent,
    Demo13XiongdaComponent,
    Demo13XiongerComponent,
    Demo13XiongbaComponent,
    Demo14HttpComponent,
    Demo15ListComponent,
    Demo15ItemComponent,
    Demo16LoginComponent,
    Demo16RegisterComponent,
    Demo16RegisteComponent,
    Demo16MainComponent,
    Demo16NotFoundComponent,
    Demo17CartComponent,
    Demo17OrderConfirmComponent,
    Demo17SubmitComponent,
    Demo18ListComponent,
    Demo18LisComponent,
    Demo18DetailComponent,
    Demo19LoginComponent,
    Demo19MailComponent,
    Demo19InboxComponent,
    Demo19OutboxComponent,
    Demo20AdminComponent
  ],
  imports: [
    MyModuleRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
