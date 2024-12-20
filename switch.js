var a=5;
var date=new Date().getDay();
// alert(date.getFullYear())
// alert(date.getMonth())
// alert(date.getDate())
// alert(date.getDay())
// alert(date.getHours())
// alert(date.getMinutes())
// alert(date.getSeconds())

var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
switch(date){
    case 0:
        alert(days[0])
        break;
    case 1:
        alert(days[1])
        break;
    case 2:
        alert(days[2])
        break;
    case 3:
        alert(days[3])
        break;
    case 4:
        alert(days[4])
        break;
    case 5:
        alert(days[5])
        break;
    case 6:
        alert(days[6])
        break;
    default:
        alert('Not a valid Day');
        break;
}