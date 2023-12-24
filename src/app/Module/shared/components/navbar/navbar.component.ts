import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentSection:any
  isNavbarContentOpen:any

  constructor(private router:Router){

  }


  openNavbarContent(section:any){
    this.isNavbarContentOpen = true
    this.currentSection=section
  }

  closeNavbarContent(){
    this.isNavbarContentOpen=false
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickedInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickedInsideButton = true;
      }
    });

    if (modalContainer && !clickedInsideButton && this.isNavbarContentOpen) {
      // console.log(
      //   'container ---------------------- ',
      //   this.isNavbarContentOpen
      // );
      this.closeNavbarContent();
    }
  }

  navigateTo(path:any){
    this.router.navigate([path])
  }



}
