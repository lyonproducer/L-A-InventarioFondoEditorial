import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../../../services/admin/stocks.service';
import { Stock } from '../../../../Models/Stock';
import { StocksFormComponent } from '../stocks-form/stocks-form.component';
import { MatDialog } from '@angular/material/dialog';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  p:number=1;
  
  constructor(
    public stockService:StocksService,
    public dialog: MatDialog,
    public snotify: SnotifyService
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

  
  addStock(){
    const dialogRef = this.dialog.open(StocksFormComponent, {
      width: '45%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Material dialog was closed');
    });
  }

  deleteStock(id){
    this.stockService.deleteStock(id).subscribe(
      data => {
        console.log(data);
        this.snotify.success('Eliminado correctamente',{timeout:0});
        this.updateStockList();
      }
    );
  }
  
}
