import { from, of, switchMap, throwError, interval } from 'rxjs';
import { map, take, first, last, reduce, catchError, mergeMap } from 'rxjs/operators';

/* MAP */
const numeridamappare = from([1, 2, 3, 4, 5]);
const add_10 = numeridamappare.pipe(map((val) => val + 10));
add_10.subscribe(console.log);
//risultato 11,12,13,14,15

/* SWITCH MAP */
const numeridaswitchmappare = from([2, 4, 6]);
const moltiplicare = numeridaswitchmappare.pipe(
  switchMap((val) => of(val, val * 2, val * 3))
); //of crea un nuovo observable
moltiplicare.subscribe(console.log);
//risultato 2,4,6,4,8,12,6,12,18

/* MERGE MAP */
const letters = of('a', 'b', 'c', 'd', 'e', 'f');
const result = letters.pipe(
  mergeMap((x) => interval(2000).pipe(map((i) => x + i))) //unisce due observable
);
result.subscribe((x) => console.log(x));
//risultato a0,b0,c0 ... a500,b500.... 

/* TAKE */
const sorgente = of(1, 2, 3, 4, 5);
const valoredaprendere = sorgente.pipe(take(2));
valoredaprendere.subscribe(console.log);
//risultato 1,2

/* FIRST */
const valori = of(1, 4, 7, 9);
const primovalore = valori.pipe(first());
primovalore.subscribe(console.log);
//risultato 1

/* LAST */
const valori1 = of(1, 4, 7, 9);
const ultimovalore = valori.pipe(last());
ultimovalore.subscribe(console.log);
//risultato 9

/* REDUCE */
const valori2 = of(1, 2, 3, 4, 5);
const reduse = valori2.pipe(reduce((x, y) => x + y));
reduse.subscribe(console.log);
//risultato 15

/* FROM */
const array = from([1, 2, 3, 4, 5]); //trasformo l'array in un observable cosi facendo posso
//sottoscrivere alla chiamata.
array.subscribe(console.log);

/* OF */
const array1 = of([1, 2, 3, 4, 5, 6, 7, 8, 9]); //crea un nuovo observable e stampa i valori in sequenza
array1.subscribe(console.log);

/* THROW ERROR / CATCH ERROR*/
const array2 = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
array2.pipe(switchMap((x) => throwError('provaaaa')),
catchError(errore=> of("ho catturato l'errore"))).subscribe(console.log, console.log);
