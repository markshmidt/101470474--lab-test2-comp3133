import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/characterlist/characterlist';
import { CharacterDetailsComponent } from './components/characterdetails/characterdetails';

export const appRoutes: Routes = [
    { path: '', component: CharacterListComponent },
    { path: 'character/:id', component: CharacterDetailsComponent },
    { path: '**', redirectTo: '' }
];