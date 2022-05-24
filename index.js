class Formatter {
   static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

   static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-' ]+/g, '');
   }

   static titleize(string) {
      return string
         .split(' ')
         .map((word, index) => {
            return index != 0 && ['the','a','an','but','of','and','for','at','by','from'].includes(word) //prettier-ignore
               ? this.sanitize(word)
               : this.capitalize(word);
         })
         .join(' ');
   }
}
