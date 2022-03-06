import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerPhoneNumberApi } from '../interface/customer-phone-number/api/customerPhoneNumber.api';
import { CustomerPhoneNumber } from '../interface/customer-phone-number/model/customerPhoneNumber';

@Injectable()
export class CustomerPhoneNumberService {

    constructor(private http: HttpClient,private customerPhoneNumberApi: CustomerPhoneNumberApi) {}

    public findCustonerPhoneNumbers(countryCode, state): Observable<CustomerPhoneNumber[]> {
        return this.customerPhoneNumberApi.findCustomerPhoneNumbers(
          'JumiaPay',
          'UI',
          countryCode,
          state
        );
      }
}
