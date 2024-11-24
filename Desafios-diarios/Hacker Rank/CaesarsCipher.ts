function caesarCipher(s: string, k: number): string {
   // Reduzir o deslocamento ao intervalo do alfabeto
   const shift = k % 26;
   let encrypted = '';

   // Iterar sobre cada caractere da string
   for (let char of s) {
       if (char >= 'a' && char <= 'z') {
           // Caractere minúsculo
           const newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
           encrypted += newChar;
       } else if (char >= 'A' && char <= 'Z') {
           // Caractere maiúsculo
           const newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
           encrypted += newChar;
       } else {
           // Não é letra, preservar como está
           encrypted += char;
       }
   }

   return encrypted;
}
