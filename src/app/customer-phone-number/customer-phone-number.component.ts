import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { CustomerPhoneNumberService } from '../services/customer-phone-number-service';
import {CustomerPhoneNumber} from '../interface/customer-phone-number/model/customerPhoneNumber'

@Component({
  selector: 'app-customer-phone-number',
  templateUrl: './customer-phone-number.component.html',
  styleUrls: ['./customer-phone-number.component.css']
})
export class CustomerPhoneNumberComponent implements OnInit {

  public dataSource = new MatTableDataSource<CustomerPhoneNumber>();

  public displayedColumns = ['name', 'phone'];

  public country:String="";
  public state:String="";
  constructor(private customerPhoneNumberService:CustomerPhoneNumberService) { }

  ngOnInit(): void {
    this.customerPhoneNumberService.findCustonerPhoneNumbers(null,null).subscribe(data => {
      this.dataSource.data = data;
  });

  }

  public isStateDropDownEnabled():boolean
  {
    
      return (this.country==="" || this.country==null) ;
  }

  public loadPhoneNumbers()
  {
    if(this.country==="" || this.country==null)
    {
      this.state="";
    }
    this.customerPhoneNumberService.findCustonerPhoneNumbers(this.country,this.state).subscribe(data => {
      this.dataSource.data = data;
  });
  }

}
