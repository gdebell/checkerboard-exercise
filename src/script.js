//checkerboard exercise Gina and Jordon
// for (var i = 0; i < 63; i++) {
//   var div = document.createElement('div');
//
//   if( i % 2 === 0) {
//     div.style.backgroundColor = 'red';
//     div.style.width = '11.1%';
//     div.style.float = 'left';
//     div.style.paddingBottom = '11.1%';
//   } else {
//     div.style.backgroundColor = 'black';
//     div.style.width = '11.1%';
//     div.style.float = 'left';
//     div.style.paddingBottom = '11.1%';
//   }
//   document.body.appendChild(div)
// }

//// random color generator:

for (var i = 0; i < 63; i++) {
  var div = document.createElement('div');
    var letters = '023456789ABCDEF';
    var color ='#';
    for (var j = 0; j < 6; j++) {
     color += letters[Math.floor(Math.random() * 16)];
    div.style.backgroundColor = color + '';
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
  }

  document.body.appendChild(div)
}
