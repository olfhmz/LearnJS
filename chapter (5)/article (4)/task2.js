
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

let mid = Math.floor((styles.length - 1) / 2);
styles[mid] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');
