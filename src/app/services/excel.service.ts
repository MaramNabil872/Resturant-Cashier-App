import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  sheetId = '1lvPnSNbABrvp3D0Ipv-7lqkKa3wmCuaI7JO4KNFCaxI';
  constructor(private http: HttpClient) {}

  getUsers() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.get(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/Users!A:C',
      { headers }
    );
  }

  getOperations() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.get(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/Operations!A:J',
      { headers }
    );
  }

  postUser(user) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'ROWS',
      values: [[user.username, user.email, user.role]],
    };
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/Users!A:C:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS',
      body,
      { headers }
    );
  }

  postOperation(operation) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'ROWS',
      values: [
        [
          operation.operation_date,
          operation.operation_type,
          operation.operation_fromto,
          operation.operation_about,
          operation.operation_empoyee_driver_supplier,
          operation.operation_amount,
          operation.operation_doc,
          operation.operation_supplier,
          new Date(),
          localStorage.getItem('loggesInUserName')
          
        ],
      ],
    };
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/Operations!A:J:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS',
      body,
      { headers }
    );
  }

  editOperation(op, index) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'ROWS',
      values: [
        [
          op.date,
          op.type,
          op.fromto,
          op.about,
          op.empoyee_driver_supplier,
          op.amount,
          op.attachment,
          op.supplier,
          new Date(),
          localStorage.getItem('loggesInUserName')
        ],
      ],
    };

    return this.http.put(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/Operations!A' +
        index +
        ':J' +
        index +
        '?valueInputOption=RAW',
      body,
      { headers }
    );
  }

  deleteOperation(index) {
    console.log(index);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        ':batchUpdate',
      {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: '1775803711',
                dimension: 'ROWS',
                startIndex: index-1,
                endIndex: index,
              },
            },
          },
        ],
      },
      { headers }
    );
  }

  getSuppliers(){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.get(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!C:C?majorDimension=COLUMNS',
      { headers }
    );
  }
  getEmployees(){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.get(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!A:A?majorDimension=COLUMNS',
      { headers }
    );
  }
  getDrivers(){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.get(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!B:B?majorDimension=COLUMNS',
      { headers }
    );
  }

  deleteSupplier(index){
    console.log(index);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        ':batchUpdate',
      {
        requests: [
          {
            deleteRange: {
              range: {
                sheetId: '187439070',
                "startRowIndex": index-1,
                "endRowIndex": index,
                "startColumnIndex": 2,
                "endColumnIndex": 3
              },
              "shiftDimension":"ROWS"

            },
          },
        ],
      },
      { headers }
    );
  }

  deleteEmployee(index){
    console.log(index);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        ':batchUpdate',
      {
        requests: [
          {
            deleteRange: {
              range: {
                sheetId: '187439070',
                "startRowIndex": index-1,
                "endRowIndex": index,
                "startColumnIndex": 0,
                "endColumnIndex": 1
              },
              "shiftDimension":"ROWS"

            },
          },
        ],
      },
      { headers }
    );
  }

  addEmployee(employee,index){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'COLUMNS',
      values: [
        [
          employee
        ],
      ],
    };

    return this.http.put(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!A' +
        index +
        ':B' +
        index +
        '?valueInputOption=RAW',
      body,
      { headers }
    );
  }
  


  editEmployee(employee,index){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'COLUMNS',
      values: [
        [
          employee
        ],
      ],
    };

    return this.http.put(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!A' +
        index +
        ':B' +
        index +
        '?valueInputOption=RAW',
      body,
      { headers }
    );
  }

  AddSupplier(employee,index){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'COLUMNS',
      values: [
        [
          employee
        ],
      ],
    };

    return this.http.put(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!C' +
        index +
        ':D' +
        index +
        '?valueInputOption=RAW',
      body,
      { headers }
    );
  }
  editSupplier(employee,index){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'COLUMNS',
      values: [
        [
          employee
        ],
      ],
    };

    return this.http.put(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!C' +
        index +
        ':D' +
        index +
        '?valueInputOption=RAW',
      body,
      { headers }
    );
  }

  deleteDriver(index){
    console.log(index);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        ':batchUpdate',
      {
        requests: [
          {
            deleteRange: {
              range: {
                sheetId: '187439070',
                "startRowIndex": index-1,
                "endRowIndex": index,
                "startColumnIndex": 1,
                "endColumnIndex": 2
              },
              "shiftDimension":"ROWS"

            },
          },
        ],
      },
      { headers }
    );
  }

  addDriver(driver,index){
    console.log(index)
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'COLUMNS',
      values: [
        [
         driver
          
        ],
      ],
    };
    return this.http.post(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!B' + index+':C'+index+':append?valueInputOption=RAW&insertDataOption=INSERT_ROWS',
      body,
      { headers }
    );
  }

  editDriver(driver,index){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    let body = {
      majorDimension: 'COLUMNS',
      values: [
        [
        driver
        ],
      ],
    };

    return this.http.put(
      'https://sheets.googleapis.com/v4/spreadsheets/' +
        this.sheetId +
        '/values/employees!B' +
        index +
        ':C' +
        index +
        '?valueInputOption=RAW',
      body,
      { headers }
    );
  }

  checkToken(token){
    return this.http.get('https://oauth2.googleapis.com/tokeninfo?access_token='+token)
  }
}
