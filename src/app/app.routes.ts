import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home';
import { TabletopMatchComponent } from './component/tabletop-match/tabletop-match';

export const routes: Routes = [
    {
        
    path: '', 
    component: HomeComponent
    },
    {
    path: 'tabletop-match', 
    component: TabletopMatchComponent
    },
    {
    path: 'home', 
    component: HomeComponent
    }

];
