import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { GameButtonComponent } from './components/game/game-button/game-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
