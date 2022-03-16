function anagram(array) {
    
    var pair = {};
    var res = [];
    
    if (array.length === 0) return false;
    
    for (var i = 0; i < array.length; i++) {

        var word = array[i];
        var chara = "chara" + word.length;
        
        if (pair[chara] === undefined) {
            pair[chara] = {};
        }
    
        pair[chara][word] = true;

    }

    var notPair = [];

    for (const words in pair) {

        var char = {};
        var group = [];
        
        if (pair.hasOwnProperty(words)) {

            const bit = pair[words];
            
            for (const text in bit) {
                
                var x;
                var test = true;
                
                for (let j = 0; j < text.length; j++) {
                    
                    x = text[j];
                    
                    if (Object.keys(char).length < text.length) {
                        char[x] = true;
                    }
                    
                    if (char[x] === undefined) {
                        test = false;
                    }
                
                }
                
                if (test) {
                    group.push(text);
                } else {
                    notPair.push(text);
                }

            }

        res.push(group);
    
        }
  }
  res.push(notPair);

  return res;
}

console.log(anagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]));