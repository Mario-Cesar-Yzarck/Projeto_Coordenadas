const primogenesisOne = {
    name: 'Primogenesis',
    cnpj: '11.111.111/1111-11',
    address: 'Rua Xico Silva, 001, Centro',
    current_situation: 'Ativo',
    branch_of_activity: 'Tecnologia',
    contact: '(11)11111-1111',
    coordinatesX: 306835,
    coordinatesY: 7967709,
  }
const primogenesisTwo = {
    name: 'Primogenesis',
    cnpj: '22.222.222/2222-22',
    address: 'Rua Xico Silva, 002, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Tecnologia',
    contact: '(22)22222-2222',
    coordinatesX: 307835,
    coordinatesY: 7968709,
  }
const primogenesisThree = {
    name: 'Primogenesis',
    cnpj: 33333333333333,
    address: 'Rua Xico Silva, 003, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Tecnologia',
    contact: 33333333333,
    coordinatesX: 308835,
    coordinatesY: 7969709,
  }
const circuitionsOne = {
    name: 'Circuitions',
    cnpj: 44444444444444,
    address: 'Avenida Augusta, 001, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Jardinagem',
    contact: 44444444444,
    coordinatesX: 366275,
    coordinatesY: 7807547,
  }
const circuitionsTwo = {
    name: 'Circuitions',
    cnpj: 55555555555555,
    address: 'Avenida Augusta, 002, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Jardinagem',
    contact: 55555555555,
    coordinatesX: 367275,
    coordinatesY: 7808547,
  }
const pastor_belga_sa = {
    name: 'Pastor Belga SA',
    cnpj: 66666666666666,
    address: 'Rua Agora Vai, s/n, Centro',
    current_situation: 'Ativo',
    branch_of_activity: 'Clube de Tiro',
    contact: 66666666666,
    coordinatesX: 283042,
    coordinatesY: 7842769,
  }
function search() {
  let empresaSelecionada = document.getElementById('nome_empresas').value
  if(empresaSelecionada === "Primogênesis (11.111.111/1111-11)") {
    document.getElementById('name').innerHTML = `Nome: ${primogenesisOne.name}`;
    document.getElementById('CNPJ').innerHTML = `CNPJ: ${primogenesisOne.cnpj}`;
    document.getElementById('address').innerHTML = `Endereço: ${primogenesisOne.address}`;
    document.getElementById('current_situation').innerHTML = `Situação Atual: ${primogenesisOne.current_situation}`;
    document.getElementById('branch_of_activity').innerHTML = `Ramo de Atividade: ${primogenesisOne.branch_of_activity}`;
    document.getElementById('contact').innerHTML = `Contato: ${primogenesisOne.contact}`;
    document.getElementById('coordinatesX').innerHTML = `Coordenadas X (UTM): ${primogenesisOne.coordinatesX}`;
    document.getElementById('coordinatesY').innerHTML = `Coordenadas Y (UTM): ${primogenesisOne.coordinatesY}`;    
  } else if(empresaSelecionada === "Primogênesis (22.222.222/2222-22)") {
    document.getElementById('name').innerHTML = `Nome: ${primogenesisTwo.name}`;
    document.getElementById('CNPJ').innerHTML = `CNPJ: ${primogenesisTwo.cnpj}`;
    document.getElementById('address').innerHTML = `Endereço: ${primogenesisTwo.address}`;
    document.getElementById('current_situation').innerHTML = `Situação Atual: ${primogenesisTwo.current_situation}`;
    document.getElementById('branch_of_activity').innerHTML = `Ramo de Atividade: ${primogenesisTwo.branch_of_activity}`;
    document.getElementById('contact').innerHTML = `Contato: ${primogenesisTwo.contact}`;
    document.getElementById('coordinatesX').innerHTML = `Coordenadas X (UTM): ${primogenesisTwo.coordinatesX}`;
    document.getElementById('coordinatesY').innerHTML = `Coordenadas Y (UTM): ${primogenesisTwo.coordinatesY}`;    
  } else if(empresaSelecionada === "Primogênesis (33.333.333/3333-33)") {
    document.getElementById('name').innerHTML = `Nome: ${primogenesisThree.name}`;
    document.getElementById('CNPJ').innerHTML = `CNPJ: ${primogenesisThree.cnpj}`;
    document.getElementById('address').innerHTML = `Endereço: ${primogenesisThree.address}`;
    document.getElementById('current_situation').innerHTML = `Situação Atual: ${primogenesisThree.current_situation}`;
    document.getElementById('branch_of_activity').innerHTML = `Ramo de Atividade: ${primogenesisThree.branch_of_activity}`;
    document.getElementById('contact').innerHTML = `Contato: ${primogenesisThree.contact}`;
    document.getElementById('coordinatesX').innerHTML = `Coordenadas X (UTM): ${primogenesisThree.coordinatesX}`;
    document.getElementById('coordinatesY').innerHTML = `Coordenadas Y (UTM): ${primogenesisThree.coordinatesY}`;    
  } else if(empresaSelecionada === "Circuitions (44.444.444/4444-44)") {
    document.getElementById('name').innerHTML = `Nome: ${circuitionsOne.name}`;
    document.getElementById('CNPJ').innerHTML = `CNPJ: ${circuitionsOne.cnpj}`;
    document.getElementById('address').innerHTML = `Endereço: ${circuitionsOne.address}`;
    document.getElementById('current_situation').innerHTML = `Situação Atual: ${circuitionsOne.current_situation}`;
    document.getElementById('branch_of_activity').innerHTML = `Ramo de Atividade: ${circuitionsOne.branch_of_activity}`;
    document.getElementById('contact').innerHTML = `Contato: ${circuitionsOne.contact}`;
    document.getElementById('coordinatesX').innerHTML = `Coordenadas X (UTM): ${circuitionsOne.coordinatesX}`;
    document.getElementById('coordinatesY').innerHTML = `Coordenadas Y (UTM): ${circuitionsOne.coordinatesY}`;  
  } else if(empresaSelecionada === "Circuitions (55.555.555/5555-55)") {
    document.getElementById('name').innerHTML = `Nome: ${circuitionsTwo.name}`;
    document.getElementById('CNPJ').innerHTML = `CNPJ: ${circuitionsTwo.cnpj}`;
    document.getElementById('address').innerHTML = `Endereço: ${circuitionsTwo.address}`;
    document.getElementById('current_situation').innerHTML = `Situação Atual: ${circuitionsTwo.current_situation}`;
    document.getElementById('branch_of_activity').innerHTML = `Ramo de Atividade: ${circuitionsTwo.branch_of_activity}`;
    document.getElementById('contact').innerHTML = `Contato: ${circuitionsTwo.contact}`;
    document.getElementById('coordinatesX').innerHTML = `Coordenadas X (UTM): ${circuitionsTwo.coordinatesX}`;
    document.getElementById('coordinatesY').innerHTML = `Coordenadas Y (UTM): ${circuitionsTwo.coordinatesY}`; 
  } else if(empresaSelecionada === "Pastor Belga SA (66.666.666/6666-66)") {
    document.getElementById('name').innerHTML = `Nome: ${pastor_belga_sa.name}`;
    document.getElementById('CNPJ').innerHTML = `CNPJ: ${pastor_belga_sa.cnpj}`;
    document.getElementById('address').innerHTML = `Endereço: ${pastor_belga_sa.address}`;
    document.getElementById('current_situation').innerHTML = `Situação Atual: ${pastor_belga_sa.current_situation}`;
    document.getElementById('branch_of_activity').innerHTML = `Ramo de Atividade: ${pastor_belga_sa.branch_of_activity}`;
    document.getElementById('contact').innerHTML = `Contato: ${pastor_belga_sa.contact}`;
    document.getElementById('coordinatesX').innerHTML = `Coordenadas X (UTM): ${pastor_belga_sa.coordinatesX}`;
    document.getElementById('coordinatesY').innerHTML = `Coordenadas Y (UTM): ${pastor_belga_sa.coordinatesY}`; 
  }
}