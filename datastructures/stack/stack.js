class Stack{
    constructor(){
      this.stack = [];
      this.top = 0;
    }

    push(val){
      this.stack[this.top] = val;
      return ++this.top;
    }

    pop(){
      if(this.top === 0 ) throw new Error("stack is empty");
      this.top--;
      let result = this.stack[this.top];
      this.stack = this.stack.splice(0,this.top);
      return result;
    }

    size(){
      return this.top;
    }

    display(){
      for(let element of this.stack) console.log(element);
    }
}


let _ = new Stack();
_.push('1')
_.push('2')
_.pop()
_.pop()
_.pop()
_.display();
console.log(_)
