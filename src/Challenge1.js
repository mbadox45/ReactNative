let myNumber, myArray, myObject, myWord, myBool;

myNumber = 10
myArray = ['tomy', 'aundry', 'salman', 'rio']
myObject = null;
myWord = 'string'
myBool = false


const boolean = (bool) => myBool = bool;

console.log(boolean(false))

class Mamalia {
    constructor(bool){
        this.myBool = bool;
    }
    boolean() {
        return this.myBool;
    }
}


class Cow extends Mamalia {
    constructor(bool) {
      super(); 
      this.myBool = bool;
    }
  
    boolean() {
      return this.myBool;
    }
  
    testword() {
      return (this.myWord = "test");
    }
  }
  
  const c_cow = new Cow(true);
  console.log(c_cow.testword());