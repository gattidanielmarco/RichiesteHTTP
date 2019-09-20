import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { AppComponent } from './app.component';
import { FooComponentComponent } from './foo-component/foo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
