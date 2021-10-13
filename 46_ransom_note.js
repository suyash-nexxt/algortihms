// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

const checkMagazine = (magazine, note) => {
  // Write your code here
  let obj = {};

  for (let i = 0; i < magazine.length; i++) {
    if (obj.hasOwnProperty(magazine[i])) {
      obj[magazine[i]] += 1;
    } else {
      obj[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < note.length; i++) {
    if (obj.hasOwnProperty(note[i])) {
      obj[note[i]] -= 1;
    } else {
      return 'No';
    }
  }

  for (const prop in obj) {
    if (obj[prop] < 0) {
      return 'No';
    }
  }

  return 'Yes';
};

let magazine = ['give', 'me', 'one', 'grand', 'today'];

let note = ['give', 'one', 'grand', 'today', 'su'];

checkMagazine(magazine, note); // Yes
