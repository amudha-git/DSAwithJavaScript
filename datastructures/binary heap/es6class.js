class MaxBinaryHeap{
  constructor(){
    this.values = [];
    this.length = 0;
  }

  get length(){
    return this._length;
  }

  set length(value){
    this._length = value;
  }

  insert(value){
    this.values[this.length++] = value;
    console.log(this.length)
    this.bubbleUp();
  }

  bubbleUp(){
      let childIndex = this.length - 1;
      const child = this.values[childIndex];
      while(childIndex > 0){
        let parentIndex = Math.floor((childIndex - 1)/2);
        const parent = this.values[parentIndex];
        if(child <= parent) break;
        this.values[childIndex] = parent;
        this.values[parentIndex] = child;
        childIndex = parentIndex;
      }
      return childIndex;
  }
}
