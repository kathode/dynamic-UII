export class Carousel {
  constructor() {
    this.position = 0;
    this.array = ["a", "b", "c", "d"];
  }

  getArray() {
    return this.array;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position;
  }

  next() {
    if (this.position === this.array.length - 1) {
      this.position = 0;
    } else if (this.position < this.array.length - 1) {
      this.position++;
    }
  }

  prev() {
    if (this.position === 0) {
      this.position = this.array.length - 1;
    } else if (this.position > 0) {
      this.position--;
    }
  }
}
