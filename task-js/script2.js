
let request = prompt("Введите количество баллов:");

if (request >= 90){
    alert('Отлично (5)');
}
else if (request <=89 && request >=70){
    alert('Хорошо (4)');
}
else if (request <=69 && request >=50){
    alert('Удовлетворительно (3)');
}
else if (request <=49  && request >=30){
    alert('Неудовлетворительно (2)');
}

else if (request <=29){
    alert('Плохо (1)');
}
else{
    alert('Такого числа нет');
}

