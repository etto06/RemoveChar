/*
 * definisco una funzione,
 * dandogli il nome di rimuovi_carattere,
 * essa si aspetta che gli vengano passatti due argomenti  "str" e "char_pos"
*/
function remove_character(str, char_pos) {
  /*    Logica della funzione
   * substring è una funzione integrata in js, passandogli una stringa esso ti restituirà una nuova stringa,
   * e passandogli come parametri l'indice del carattere di dove si vuole partire e dove arrivare, essa restituirà
   * la parte del contenuto della stringa che ci interessa
   * ESEMPIO: 'Mozilla' 1, 3 => 'oz'
   * tutto questo senza modificare la stringa originale
   */
  /*
   * Estraggo la parte primaria della stringa,
   * dal primo carattere fino a all'indice (char_pos) che gli abbiamo passato
   * il tutto viene salvato nella varibile part1
   */
  part1 = str.substring(0, char_pos);
  /*
   * Estraggo la parte secondaria della stringa,
   * dal primo carattere fino a all'indice (char_pos+1) che gli abbiamo passato
   * il tutto viene salvato nella varibile part2
   */
  part2 = str.substring(char_pos + 1, str.length);
  /*
   * restituisco le due parti unendole
   */
  return part1 + part2;
}
/*
 * richiamo della funzione passandogli gli argomenti:
 * - "Python" = str
 * -    3     = posizione del carattere dove vogliamo interagire
 * usiamo console.log per stampare il risultato che ci viene restituito dalla funzione
*/
console.log(remove_character("Python", 3));
