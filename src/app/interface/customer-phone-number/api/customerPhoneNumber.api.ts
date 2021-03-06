/**
 * customer-phone-number-api
 * Customer Phone Number API
 *
 * OpenAPI spec version: 1.0
 * Contact: hagar.zakaria.2011@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CustomerPhoneNumber } from '../model/customerPhoneNumber';
import { ErrorResponse } from '../model/errorResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AppConfigService } from '../../../services/app-config.service';


@Injectable()
export class CustomerPhoneNumberApi {

    public basePath ;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration,private environment: AppConfigService) {
       this.basePath = environment.config.url;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Retrieve customer phone numbers for given parameters
     * 
     * @param xCMPTenantId ID of the Tenant
     * @param xCorrelationId Correlation ID for the current external request
     * @param countryCode Country code.Example: 237
     * @param state phone number status whether it is valid for a given country or not
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findCustomerPhoneNumbers(xCMPTenantId: string, xCorrelationId: string, countryCode?: string, state?: 'VALID' | 'NOTVALID', observe?: 'body', reportProgress?: boolean): Observable<Array<CustomerPhoneNumber>>;
    public findCustomerPhoneNumbers(xCMPTenantId: string, xCorrelationId: string, countryCode?: string, state?: 'VALID' | 'NOTVALID', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CustomerPhoneNumber>>>;
    public findCustomerPhoneNumbers(xCMPTenantId: string, xCorrelationId: string, countryCode?: string, state?: 'VALID' | 'NOTVALID', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CustomerPhoneNumber>>>;
    public findCustomerPhoneNumbers(xCMPTenantId: string, xCorrelationId: string, countryCode?: string, state?: 'VALID' | 'NOTVALID', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (xCMPTenantId === null || xCMPTenantId === undefined) {
            throw new Error('Required parameter xCMPTenantId was null or undefined when calling findCustomerPhoneNumbers.');
        }

        if (xCorrelationId === null || xCorrelationId === undefined) {
            throw new Error('Required parameter xCorrelationId was null or undefined when calling findCustomerPhoneNumbers.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (countryCode !== undefined && countryCode !== null) {
            queryParameters = queryParameters.set('countryCode', <any>countryCode);
        }
        if (state !== undefined && state !== null) {
            queryParameters = queryParameters.set('state', <any>state);
        }

        let headers = this.defaultHeaders;
        if (xCMPTenantId !== undefined && xCMPTenantId !== null) {
            headers = headers.set('X-CMP-Tenant-Id', String(xCMPTenantId));
        }
        if (xCorrelationId !== undefined && xCorrelationId !== null) {
            headers = headers.set('X-Correlation-Id', String(xCorrelationId));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<CustomerPhoneNumber>>(`${this.basePath}/customer/phonenumbers/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
