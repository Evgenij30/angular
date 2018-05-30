import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  @Input() title:string;
  @Output() onChangeClick = new EventEmitter();

  counts:number;
  constructor(){
      console.log('5555');
  }

  ngOnInit(){
    this.counts = 0;
  }

 onBtnClick(){

        this.onChangeClick.emit(++this.counts);
       // console.log('clicked');
    }

}
