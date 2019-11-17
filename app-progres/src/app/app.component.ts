import { Component, OnInit } from '@angular/core';
import { SProgressDataService } from './shared/s-progress-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    this.loadBarData();
  }

  constructor(
    public progressDataService: SProgressDataService
  ){ }

  title = 'app-progres';
  currentNumber = 0;
  limit = 0;
  barDataList: any = [];
  barDataListButtons: any = [];
  
  
  updateProgress(incData){
    
    
    let newBarPercent= this.currentNumber+incData;
    if ( newBarPercent > this.limit ){
      this.currentNumber = this.limit;
    }else{
      this.currentNumber= newBarPercent;
    }
  }

  loadBarData() {
     this.progressDataService.getList().subscribe(response => {
      console.log(response);
      this.barDataList = response;
      this.barDataListButtons = this.barDataList[0].buttons;
      this.limit = this.barDataList[0].barlimit;
      console.log(this.limit);
      
      
    })
  }


}
