console.log('working');
alert('welcome to the control flow lab, lets go to the shops');
var item = prompt('what would you like to buy?(fruit/veg/cereal)');

if (item === 'fruit') {
  var fruit = prompt("we have a variety of fruit,which fruit would you like? (apples/oranges/grapes--or a combination such as 'applesandoranges')");
  if (fruit==='apples'){
    alert('apples are £2')
  }
  else if (fruit ==='oranges'){
    alert('oranges are £3')}
  else if (fruit ==='grapes'){
    alert('grapes are £1')}
  else if (fruit==='applesandoranges'){
    alert('apples and oranges are £5')}

  else if (fruit==='applesandgrapes'){
    alert('apples and grapes are £4')
  }
  else{
    alert('out of stock')
  }
  // this is an inefficient way of listing all combinations but it works...

}



else if (item === 'veg'){
  var veg =prompt('we have a variety of veg, which veg would you like? (carrots/peas/broccoli)');
  if (veg ==='carrots') {
  alert('carrots are £2') }
  else if (veg ==='peas') {
  alert('peas are £3') }
  else if (veg ==='broccoli') {
  alert('broccoli is £1')}
  else {alert('out of stock')}

}

else if (item === 'cereal') {
  var cereal = prompt('we have a variety of cereal, which cereal would you like (kellogs/cocopops/goldennuggets)')
  if (cereal==='kellogs'){
  alert('kellogs is £2')}
  else if (cereal ==='cocopops'){
  alert('cocopops are £3')}
  else if (cereal==='goldennuggets'){
  alert('goldennuggets is £1')}
  else {alert('out of stock')}
}

else {
  alert(`sorry we are sold out of ${item}`)
}

// if (item === 'fruit') {
//   var fruit =prompt('we have a variety of fruit,which fruit would you like? (apples/oranges/grapes)');

//   if (fruit === 'apples'); {
//     alert('apples are £2');
//
//   }
//   if (fruit === 'oranges'); {
//     alert('oranges are £1');
//   }
//     if (fruit ==='grapes'); {
//     alert('grapes are £3');
//   }
//
//
//
// }
// else if (item === 'veg') {
//   alert('we have a variety of veg, which veg would you like?');
//   prompt('peas, carrots or broccoli ');
//
//   if (item === 'peas'); {
//     alert('peas are £2');
//   }
//   if (item === 'carrots'); {
//     alert('carrots are £1');
//   }
//    if (item ==='broccoli'); {
//     alert('broccoli is £3');
//   }
//
//
// }else if (item === 'cereal') {
//   alert('we have a variety of cereal, which cereal would you like?');
//   prompt('cocopops, kellogs or goldennuggets ');
//
//   if (item === 'cocopops'); {
//     alert('cocopops are £2');
//   }
//   if (item === 'kellogs'); {
//     alert('kellogs are £1');
//   }
//    if (item ==='grapes'); {
//     alert('goldennuggets are £3');
//   }
// }
// else {
//   // alert('sorry we are sold out of' + item)
//   alert(`sorry we are sold out of ${item}`);
// }






console.log(item);

// strings
// alerts
// prompts
// integers/floats
// operators (+ - * /)
// booleans
// array
// object (bonus)
// if/else
// switch

// i go to the shops
