import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PackageOffersComponent } from './components/package-offers/package-offers.component';
import { DiamondComponent } from './components/packages/diamond/diamond.component';
import { EmeraldComponent } from './components/packages/emerald/emerald.component';
import { GoldComponent } from './components/packages/gold/gold.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'package-offers', component: PackageOffersComponent },
  { path: 'package-gold', component: GoldComponent },
  { path: 'package-emerald', component: EmeraldComponent },
  { path: 'package-diamond', component: DiamondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
