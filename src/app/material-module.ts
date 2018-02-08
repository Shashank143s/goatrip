import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  imports: [MatButtonModule,MatSidenavModule],
  exports: [MatButtonModule,MatSidenavModule],
})
export class MaterialModule { }