let apartmentNumber = +prompt('Введите номер квартиры');
let summ_apart = 20;
let apart_etage = 4;  
if (apartmentNumber >= 1 && apartmentNumber <= 100) { 
  let entrance = Math.ceil(apartmentNumber / summ_apart);
  let number_etage = (apartmentNumber - (entrance - 1) * summ_apart);
  const total = Math.ceil(number_etage / apart_etage);
  alert(`Ваш подъезд ${entrance} Этаж ${total}`);
} else {
  alert("Некорректный номер квартиры. Введите число от 1 до 100.");
}