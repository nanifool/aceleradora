function cadastrar () {
  var permissao
  var nome = prompt("Qual o nome do Aluno?", "Digite o nome completo")

  permissao = confirm(nome+ " Deseja continuar?")
  if ( permissao == false ) {
      alert("Recarregue ou saia da página")
  } 
  
  var notaSemestre1 = prompt("Digite a nota do primeiro semestre:")
  permissao = confirm(notaSemestre1+ " Deseja continuar?")
  if ( permissao == false ) {
      alert("Recarregue ou saia da página")
  }

  var notaSemestre2 = prompt("Digite a nota do segundo semestre:")
  permissao = confirm(notaSemestre2+ " Deseja continuar?")
  if ( permissao == false ) {
      alert("Recarregue ou saia da página")
  }
  
  var notaFinal = (parseFloat(notaSemestre1) + parseFloat(notaSemestre2))/2
  
  frequenciaDoAluno = prompt("Digite a frequência")
  permissao = confirm(frequenciaDoAluno+ " Deseja continuar?")
  if ( permissao == false ) {
    alert("Recarregue ou saia da página")
  }
  
  var tabelaBoletim = document.querySelector("#boletim tbody")
  
  var tr = document.createElement("tr")
  var tdNome = document.createElement("td")
  var tdNota1 = document.createElement("td")
  var tdNota2 = document.createElement("td")
  var tdNotaFinal = document.createElement("td")
  var tdFrequencia = document.createElement("td")
	
  var textNodeNome = document.createTextNode(nome)
  var textNodeNota1 = document.createTextNode(notaSemestre1)
  var textNodeNota2 = document.createTextNode(notaSemestre2)
  var textNodeNotaFinal = document.createTextNode(notaFinal)
  var textNodeFrequencia = document.createTextNode(frequenciaDoAluno)
  
  tdNome.appendChild(textNodeNome)
  tr.appendChild(tdNome)
  
  tdNota1.appendChild(textNodeNota1)
  tr.appendChild(tdNota1)
  
  tdNota2.appendChild(textNodeNota2)
  tr.appendChild(tdNota2)
  
  tdNotaFinal.appendChild(textNodeNotaFinal)
  tr.appendChild(tdNotaFinal)
  
  tdFrequencia.appendChild(textNodeFrequencia)
  tr.appendChild(tdFrequencia)
  
  tabelaBoletim.append(tr)	

  if (notaFinal <= 6 || frequenciaDoAluno <= 55) {
    tr.setAttribute("id", "passou")
    document.getElementById("passou").setAttribute("class", "reprovou")
  } 
  
  if (notaFinal >= 7 || frequenciaDoAluno >= 56) {
    tr.setAttribute("id", "reprovou")
    document.getElementById("reprovou").setAttribute("class", "passou")
  }
  
}

