class Sentence {
  constructor(plainText) {
    this.plainText = plainText;
    this.formatting = [];
  }

  at(index) {
    let wordIndex = new WordIndex(index);
    this.formatting.push(wordIndex);
    return wordIndex;
  }

  toString() {
    let buffer = [];
    let text = this.plainText.split(' ');
    for (let i in text) {
      let c = text[i];
      for (let wordIndex of this.formatting) {
        if (wordIndex.isEqualPosition(i) || wordIndex.caps) {
          c = c.toUpperCase();
        }
      }
      buffer.push(c);
    }
    return buffer.join(' ');
  }
}

class WordIndex {
  constructor(index) {
    this.index = index;
    this.caps = false;
  }

  isEqualPosition(position) {
    return (position == this.index);
  }
}
