class Node{
  constructor(value=null){
    this.value = value;
    this.keys = new Map();
    this.end = 0;
  }

  isEnd(){
    return this.end > 0;
  }

  setEnd(){
    this.end++;
  }
}

class Trie{
  constructor(){
    this.root = new Node();
  }

  insert(string, node = this.root){
        if(string.length === 0){
              node.setEnd();
        }else{
          if(!node.keys.has(string[0])) node.keys.set(string[0],new Node(string[0]));
          return insert(string.substring(1), node.keys.get(string[0]));
        }
  }

  isWord(word,node=this.root){
      if(node.isEnd() && word.length === 0) return true;
      if(node.keys.has(word[0])) return word(string.substring(1), node.keys.get(string[0]));
      else return false;
  }

}

let trie = new Trie();

trie.insert("hat");
trie.insert("harish");


trie.isWord("hat")
