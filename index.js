class Formatter {
   static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

   static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-' ]+/g, '');
   }

   static titleize(string) {
      let alwaysLowerCase = [
         'the',
         'a',
         'an',
         'but',
         'of',
         'and',
         'for',
         'at',
         'by',
         'from',
      ];
      return string
         .split(' ')
         .map((word, index) => {
            return index != 0 && alwaysLowerCase.includes(word)
               ? this.sanitize(word)
               : this.capitalize(word);
         })
         .join(' ');
   }
}
