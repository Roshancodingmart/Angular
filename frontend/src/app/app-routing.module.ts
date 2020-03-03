import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
// import { HeaderComponent } from './header/header.component';
import { SigninComponent } from "./signin/signin.component";
import { TableComponent } from "./table/table.component";
import { UserComponent } from "./user/user.component";
import { RegisterComponent } from "./register/register.component";
import { MovieComponent } from "./movie/movie.component";
import { InfoComponent } from "./info/info.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import { WatchedComponent } from "./watched/watched.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { ListComponent } from "./list/list.component"
import { from } from "rxjs";
const routes: Routes = [
  { path: "", component: SignupComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  {
    path: "table",
    component: TableComponent,
    children: [
      { path: "user", component: UserComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  { path: "movie", component: MovieComponent },
  { path: "movie_info/:id", component:InfoComponent },
  { path: "watchlist", component:WatchlistComponent},
  { path: "favorites", component:FavoritesComponent},
  { path: "watched", component:WatchedComponent},
  { path: "playlist", component:PlaylistComponent},
  { path: "list/:id", component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
