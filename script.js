window.onload = function(){
    
    var first = 'A ';
    var adj = ['yo ', 'estaba ', 'distraido ' ];
    var noun = ['la ','hoja','se ', 'me', 'cayo ', 'al ', 'suelo '];
    var action = ['fui ', 'al  ', 'baño ' , 'y ', 'se', 'me', 'olvido '];
    var where = ['la ','deje','en', 'la', 'cama', 'del', 'perro'];
    
  
     var rdm1 = Math.floor((Math.random() * adj.length) );
     var rdm2 = Math.floor((Math.random() * noun.length) );
     var rdm3 = Math.floor((Math.random() * action.length) );
     var rdm4 = Math.floor((Math.random() * where.length) );
    
      
      document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] +  where[rdm4]; 
    
  }