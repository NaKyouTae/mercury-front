import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public data: any = [
    { no: 1, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 2, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 3, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 4, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 5, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 6, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 7, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 8, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 9, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 10, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 11, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 12, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 13, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 14, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 15, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 16, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 17, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 18, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 19, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 20, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 21, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 22, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 23, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 24, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 25, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 26, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 27, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 28, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 29, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 30, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 31, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 32, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 33, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 34, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 35, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 36, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 37, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 38, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 39, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 40, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 41, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 42, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 43, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 44, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 45, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 46, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 47, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 48, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 49, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 50, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 51, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 52, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 53, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 54, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 55, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 56, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 57, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 58, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 59, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 60, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 61, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 62, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 63, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 64, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 65, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 66, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 67, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 68, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 69, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 70, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 71, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 72, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 73, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 74, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 75, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 76, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 77, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 78, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 79, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 80, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 81, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 82, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 83, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 84, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 85, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 86, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 87, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 88, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 89, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 90, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 91, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 92, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 93, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 94, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 95, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 96, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 97, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 98, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 99, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 100, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 101, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 102, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 103, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 104, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 105, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 106, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 107, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 108, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 109, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 110, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 111, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 112, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 113, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 114, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 115, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 116, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 117, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 118, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 119, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 120, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 121, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 122, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 123, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 124, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 125, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 126, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 127, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 128, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 129, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 130, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 131, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 132, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 133, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 134, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 135, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 136, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 137, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 138, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' },
    { no: 139, name: '나규태', phone: '010-9109-2682', email: 'qppk@naver.com', tot: 500, test: 'test', insert_date: '2020-03-06 14:36' }
  ];
  public fields: any;
  public sizeList: any = [10, 20, 30, 40, 50, 100, 200];
  public size: number;
  public skip: number = 0;
  public take: number = 50;
  public tot: number = this.data.length;
  public nowPage: number;
  public dataCountStart: number = 1;
  public dataCountEnd: number = this.take;
  public pageList: Array<any> = new Array(Math.ceil(this.data.length / this.take < 1 ? 1 : this.data.length / this.take));

  constructor(private router: Router) {}

  ngOnInit() {
    this.fields = Object.keys(this.data[0]);
  }

  onBind(e: any) {
    const result = new Array();

    for (let d of this.data) {
      Object.keys(d).forEach(v => {
        if (e === v) {
          result.push(d[v]);
        }
      });
    }

    return result.slice(this.skip, this.take);
  }

  paging(e: number) {
    this.skip = 1;
    this.take = Number(this.size);
    this.dataCountStart = 1;
    this.dataCountEnd = this.take > this.data.length ? this.data.length : this.take;
    this.pageList = new Array(Math.ceil(this.data.length / this.take < 1 ? 1 : this.data.length / this.take));
  }

  reSize(e: number) {
    this.size = e;
    this.paging(this.nowPage === undefined ? 1 : this.nowPage);
  }
}
