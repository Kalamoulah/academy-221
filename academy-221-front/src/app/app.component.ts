import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academy-221-front';

  ngOnInit(){
    initFlowbite
  }
}
