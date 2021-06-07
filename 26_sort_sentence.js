let str = 'Myself2 Me1 I4 and3';

const sortSentence = (str) => {
  return str
    .split(' ')
    .sort((a, b) => {
      return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]);
    })
    .map((item) => {
      return item.slice(0, -1);
    })
    .join(' ');
};

sortSentence(str);

// => "Me Myself and I"
