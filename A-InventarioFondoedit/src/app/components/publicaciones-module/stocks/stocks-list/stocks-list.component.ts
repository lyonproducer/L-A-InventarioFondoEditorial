import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../../../services/admin/stocks.service';
import { Stock } from '../../../../Models/Stock';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  constructor(
    public stockService:StocksService
  ) { }

  ngOnInit() {
    this.updateStockList();
  }


  updateStockList(){
    this.stockService.getStocks().subscribe(
      data => {

        this.stockService.stocks = data as Stock[];
        console.log(data);
      }
    );
  }
}
