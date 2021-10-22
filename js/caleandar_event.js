var events = [
  {'Date': new Date(2021, 7, 2), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 7, 15), 'Title': '공휴일-광복절'},
  {'Date': new Date(2021, 7, 16), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 8, 6), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 8, 20), 'Title': '공휴일-추석'},
  {'Date': new Date(2021, 8, 21), 'Title': '공휴일-추석'},
  {'Date': new Date(2021, 8, 22), 'Title': '공휴일-추석'},
  {'Date': new Date(2021, 9, 3), 'Title': '공휴일-개천절'},
  {'Date': new Date(2021, 9, 4), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 9, 9), 'Title': '공휴일-한글날'},
  {'Date': new Date(2021, 9, 11), 'Title': '대체공휴일'},
  {'Date': new Date(2021, 9, 18), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 10, 1), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 10, 15), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 11, 6), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 11, 20), 'Title': '정기휴관일'},
  {'Date': new Date(2021, 11, 25), 'Title': '공휴일-크리스마스'},
];

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
