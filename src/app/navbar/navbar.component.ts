import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
      <ul id="main-nav">
        <li>Home</li>
        <li>Contact</li>
        <li>News</li>
        <li>About</li>
      </ul>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
