import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstchildComponent } from './Components/firstchild/firstchild.component';
import { SecondchildComponent } from './Components/secondchild/secondchild.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstchildComponent,
    SecondchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
