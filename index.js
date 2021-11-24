class SortedList {

  constructor() {

        this.items = [],
        this.length = 0

  }

  add(item) {
    let old_items = this.items;
    old_items.push(item);
    let sorting = old_items.sort((a, b) => a - b);
    
      this.items =  sorting;
      this.length = this.items.length;
    

   
  }
  get(pos) {

    if(pos > this.length - 1) {
      throw new Error('OutOfBounds');
    }

    else{
      return this.items[pos];
    }

  }
  max() {

    if(this.length === 0){
      throw new Error('EmptySortedList');
    }

    else{
     return Math.max(...this.items);
    }

  }
  min() {

    if(this.length === 0){
      throw new Error('EmptySortedList');
    }

    else{
     return Math.min(...this.items);
    }


  }
  avg() {

    if(this.length === 0){
      throw new Error('EmptySortedList');
    }

    else{
      return this.sum()/this.length;
      
    }
    
   
  }

  sum() {

   
      let sum = this.items.reduce((a,b) => {
        return b+a;
      },0)

      return sum;
    }
  
  
  
};

const object=new SortedList();
module.exports = SortedList;
