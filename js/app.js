'use strict'
var first=prompt('Q1: Have I traveled abroad?');
switch(first.toLowerCase()){
    case 'yes':case 'y':alert('correct');break;
    case 'no': case 'n': alert('Wrong');
}
console.log('Q1 = '+first);

var second=prompt('Q2: do I like the soccer ?');
switch(second.toLowerCase()){
    case 'yes':
    case 'y': alert('correct');break;
    case 'no': 
    case 'n': alert('Wrong');
}
console.log('Q2 = '+second);


var third=prompt('Q3: Do I have beautiful voice?');
switch(third.toLowerCase()){
    case 'yes':case 'y':alert('Wrong');break;
    case 'no': case 'n': alert('correct');
}
console.log('Q3 = '+third);

var fourth=prompt('Q4:Do I like movies ?');
switch(fourth.toLowerCase()){
    case 'yes':case 'y':alert('correct');break;
    case 'no': case 'n': alert('Wrong');
}
console.log('Q4 = '+fourth);

var fifth=prompt('Q5: Do I like to smoking ?');
switch(fifth.toLowerCase()){
    case 'yes':case 'y':alert('Wrong');break;
    case 'no': case 'n': alert('correct');
}
console.log('Q5 = '+fifth);




