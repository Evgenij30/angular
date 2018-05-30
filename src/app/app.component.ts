import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello13';
    changeTitle(counts: number){
       console.log(counts);
        this.title = 'hello';
    }
}
