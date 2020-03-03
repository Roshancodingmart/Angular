import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { SigninComponent } from "./signin/signin.component";
import { TableComponent } from "./table/table.component";
import { MovieComponent } from "./movie/movie.component";
import { CookieService } from "ngx-cookie-service";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";
import { InfoComponent } from "./info/info.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./menu/menu.component";
import { MatMenuModule } from "@angular/material/menu";
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WatchedComponent } from './watched/watched.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ListComponent } from './list/list.component';
import { DragDirective } from './dragDrop.directive';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    SigninComponent,
    TableComponent,
    MovieComponent,
    RegisterComponent,
    UserComponent,
    InfoComponent,
    MenuComponent,
    WatchlistComponent,
    FavoritesComponent,
    LoaderComponent,
    WatchedComponent,
    PlaylistComponent,
    ListComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
