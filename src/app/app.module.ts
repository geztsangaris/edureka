import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server.component';
import { SubServerComponent } from './sub-server/sub-server.component';
import { RedComponent } from './servers/red/red.component';
import { GreenComponent } from './servers/green/green.component';
import { BlueComponent } from './servers/blue/blue.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  
  ServerComponent, 
  SubServerComponent, 
  RedComponent, 
  GreenComponent, BlueComponent ],
  providers:[],
  bootstrap:    [ AppComponent ]
})

//, SpecComponent
export class AppModule { }
