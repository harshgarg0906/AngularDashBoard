import { Component, OnInit ,Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  @Input() percetntage:string;
  chartOptions={}
  Highcharts=Highcharts;
  constructor() { }

  ngOnInit(): void {

    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text:null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside:true
      },
      legends:{
        enabled:false
      },
      credits:{
        enabled:false
      },
      exporting:{
       enabled:false
      },
      series: [{
        data:[71,78,37,65]
      }]
  };
  HC_exporting(Highcharts);
   setTimeout(()=>{
     window.dispatchEvent(
       new Event('resize')
     )
   },300)
  }

}
