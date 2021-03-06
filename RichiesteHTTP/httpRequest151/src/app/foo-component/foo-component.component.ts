import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo-component.model';
@Component({
  selector: 'app-foo-component',
  templateUrl: './foo-component.component.html',
  styleUrls: ['./foo-component.component.css']
})
export class FooComponentComponent implements OnInit {
   data: Object;
   data2: Object;
   loading: boolean;
   o :Observable<Object>;
   fooData : Foo[];
   oFoo : Observable<Foo[]>;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  makeRequest(): void {
     //Notifichiamo che stiamo attendendo dei dati
     this.loading = true;
     //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la
     //risposta
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = d; //Notifico l’oggetto ricevuto dal server
     this.loading = false;  // Notifico che ho ricevuto i dati
   }
   makeCompactPost(): void {
   this.loading = true;
   this.http
     .post('https://jsonplaceholder.typicode.com/posts',
       JSON.stringify({
         body: 'bar',
         title: 'foo',
         userId: 1
       })
     )
     .subscribe(data => {
       this.data = data;
       this.loading = false;
     });

 }
 makeTypedRequest() : void
 {
   //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
   this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
   this.oFoo.subscribe(data => {this.fooData = data;});
 }





}
