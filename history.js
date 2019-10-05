function createTable(){
  var newTable = document.createElement("TABLE");
  newTable.className = "famousWomen";

  for(var i=0; i<14; i++){
    var newRow = newTable.insertRow();
    newRow.insertCell(0).id = "image" + String(i);
    newRow.insertCell(1).id = "body" + String(i);
  }
  return newTable;
}

function fillTable(newTable){
  for(var j = 0; j<14; j++) {
      var list = document.createElement("UL");
      list.className = "list" + String(j);
  }
  for(var i=0; i<14; i++){
    var pic = document.createElement("IMG");
    pic.src = famousWomen[i].image;
    pic.width = '150';
    $('#image' + String(i)).append(pic);
    $('#body' + String(i)).append(
      '<li>' + famousWomen[i].fullName + '</li>' +
      '<li>' + famousWomen[i].fields + '</li>' +
      '<li>' + famousWomen[i].knownFor + '</li>' +
      '<li>' + famousWomen[i].born + '</li>' +
      '<li>' + famousWomen[i].birthplace + '</li>'
    );
  }
}

$('#famousWomenTable').append(createTable());
fillTable();
