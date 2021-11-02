;(function (win, doc) {
  'use strict'
  //O objetivo é ter um campo de input, onde se escolhe o nome da empresa e outro onde escolhe o cnpj e aparece abaixo as coordenadas referentes àquela empresa/filial.
  var $empresaSelecionada = doc.querySelector("[data-js='nome_empresas']")
  var $coordenates = doc.querySelector("[data-js='coordenates']")
  var $btnSearch = doc.querySelector("[data-js='btnSearch']")
  const arrayCoordenates = [
    '-19.693098, -40.291264',
    '-20.051245, -40.386612',
    '-19.060426, -41.014644',
    '-18.611905, -41.017837',
    '-18.624376, -41.023749',
    '-18.61109, -41.01575',
    '-18.61718, -41.01867',
    '-20.415114, -40.862147',
    '-20.615830, -40.732170',
    '-18.978711, -40.741268',
    '-18.572237, -41.277700',
    '-15.736389, -39.621111',
    '-15.746111, -39.616111',
    '-15.740833, -39.6175',
    '-15.743611, -39.617777',
    '-15.626667, -40.1075',
    '-19.123280, -40.243189',
    '-18.406521, -40.226048',
    '-18.570666, -40.241827',
    '-19.691398, -40.959676',
    '-20.241416, -40.364488',
    '-19. 429496, -40.842260',
    '-18.424833, -43.507840',
    '-20.356076, -41.344520',
    '-20.036963, -40.170324',
    '-19.734730, -40.268681'
  ]
  const arrayEmpresas = [
    '101 NORTE (xx.xxx.xxx/0001-01)',
    'A&L PARTICIPAÇÕES (xx.xxx.xxx/0001-02)',
    'AGRIPINO (xx.xxx.xxx/0001-03)',
    'ÁGUA DOCE MINERAÇÃO (xx.xxx.xxx/0001-04)',
    'ÁGUA DOCE MINERAÇÃO (xx.xxx.xxx/0001-05)',
    'ÁGUA DOCE MINERAÇÃO (xx.xxx.xxx/0001-06)',
    'ÁGUA DOCE MINERAÇÃO (xx.xxx.xxx/0001-07)',
    'ÁGUA PEDRA AZUL (xx.xxx.xxx/0001-08)',
    'ÁGUA PEDRA AZUL (xx.xxx.xxx/0001-09)',
    'ALMIR LAZARI (xx.xxx.xxx/0001-10)',
    'AM GRANITOS (xx.xxx.xxx/0001-11)',
    'AMAGRAN (xx.xxx.xxx/0001-12)',
    'AMAGRAN (xx.xxx.xxx/0001-13)',
    'AMAGRAN (xx.xxx.xxx/0001-14)',
    'AMAGRAN (xx.xxx.xxx/0001-15)',
    'AMAGRAN (xx.xxx.xxx/0001-16)',
    'AREPEDRA (xx.xxx.xxx/0001-17)',
    'BELA VISTA (xx.xxx.xxx/0001-18)',
    'BELLACER (xx.xxx.xxx/0001-19)',
    'BIBOM (xx.xxx.xxx/0001-20)',
    'BRASIF (xx.xxx.xxx/0001-21)',
    'CAMAGRAN (xx.xxx.xxx/0001-22)',
    'MINERAÇÃO CAMPINHO (xx.xxx.xxx/0001-23)',
    'MINERAÇÃO COLODETT (xx.xxx.xxx/0001-24)',
    'CONSTRUBLOK (xx.xxx.xxx/0001-25)',
    'CONSTRACTOR (xx.xxx.xxx/0001-26)'
  ]

  $btnSearch.addEventListener(
    'click',
    function (event) {
      event.preventDefault()
      $coordenates.innerHTML = ''
      arrayEmpresas.forEach(function (element, index) {
        if ($empresaSelecionada.value === element)
          $coordenates.innerHTML = arrayCoordenates[index]
      })
    },
    false
  )
  /*
  <div class="form-group">
      <p id="name"></p>
      <p id="CNPJ"></p>
      <p id="address"></p>
      <p id="processo"></p>
      <p id="branch_of_activity"></p>
      <p id="contact"></p>
      <p id="coordinates"></p>
    </div>



  const primogenesisOne = {
    name: 'Primogenesis',
    cnpj: '11.111.111/1111-11',
    address: 'Rua Xico Silva, 001, Centro',
    current_situation: 'Ativo',
    branch_of_activity: 'Tecnologia',
    contact: '(11)11111-1111',
    coordinatesX: 306835,
    coordinatesY: 7967709
  }
  const primogenesisTwo = {
    name: 'Primogenesis',
    cnpj: '22.222.222/2222-22',
    address: 'Rua Xico Silva, 002, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Tecnologia',
    contact: '(22)22222-2222',
    coordinatesX: 307835,
    coordinatesY: 7968709
  }
  const primogenesisThree = {
    name: 'Primogenesis',
    cnpj: 33333333333333,
    address: 'Rua Xico Silva, 003, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Tecnologia',
    contact: 33333333333,
    coordinatesX: 308835,
    coordinatesY: 7969709
  }
  const circuitionsOne = {
    name: 'Circuitions',
    cnpj: 44444444444444,
    address: 'Avenida Augusta, 001, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Jardinagem',
    contact: 44444444444,
    coordinatesX: 366275,
    coordinatesY: 7807547
  }
  const circuitionsTwo = {
    name: 'Circuitions',
    cnpj: 55555555555555,
    address: 'Avenida Augusta, 002, Centro',
    current_situation: 'Desativo',
    branch_of_activity: 'Jardinagem',
    contact: 55555555555,
    coordinatesX: 367275,
    coordinatesY: 7808547
  }
  const pastor_belga_sa = {
    name: 'Pastor Belga SA',
    cnpj: 66666666666666,
    address: 'Rua Agora Vai, s/n, Centro',
    current_situation: 'Ativo',
    branch_of_activity: 'Clube de Tiro',
    contact: 66666666666,
    coordinatesX: 283042,
    coordinatesY: 7842769
  }
  function search() {
    let empresaSelecionada = document.getElementById('nome_empresas').value
    if (empresaSelecionada === 'Primogênesis (11.111.111/1111-11)') {
      document.getElementById(
        'name'
      ).innerHTML = `Nome: ${primogenesisOne.name}`
      document.getElementById(
        'CNPJ'
      ).innerHTML = `CNPJ: ${primogenesisOne.cnpj}`
      document.getElementById(
        'address'
      ).innerHTML = `Endereço: ${primogenesisOne.address}`
      document.getElementById(
        'current_situation'
      ).innerHTML = `Situação Atual: ${primogenesisOne.current_situation}`
      document.getElementById(
        'branch_of_activity'
      ).innerHTML = `Ramo de Atividade: ${primogenesisOne.branch_of_activity}`
      document.getElementById(
        'contact'
      ).innerHTML = `Contato: ${primogenesisOne.contact}`
      document.getElementById(
        'coordinatesX'
      ).innerHTML = `Coordenadas X (UTM): ${primogenesisOne.coordinatesX}`
      document.getElementById(
        'coordinatesY'
      ).innerHTML = `Coordenadas Y (UTM): ${primogenesisOne.coordinatesY}`
    } else if (empresaSelecionada === 'Primogênesis (22.222.222/2222-22)') {
      document.getElementById(
        'name'
      ).innerHTML = `Nome: ${primogenesisTwo.name}`
      document.getElementById(
        'CNPJ'
      ).innerHTML = `CNPJ: ${primogenesisTwo.cnpj}`
      document.getElementById(
        'address'
      ).innerHTML = `Endereço: ${primogenesisTwo.address}`
      document.getElementById(
        'current_situation'
      ).innerHTML = `Situação Atual: ${primogenesisTwo.current_situation}`
      document.getElementById(
        'branch_of_activity'
      ).innerHTML = `Ramo de Atividade: ${primogenesisTwo.branch_of_activity}`
      document.getElementById(
        'contact'
      ).innerHTML = `Contato: ${primogenesisTwo.contact}`
      document.getElementById(
        'coordinatesX'
      ).innerHTML = `Coordenadas X (UTM): ${primogenesisTwo.coordinatesX}`
      document.getElementById(
        'coordinatesY'
      ).innerHTML = `Coordenadas Y (UTM): ${primogenesisTwo.coordinatesY}`
    } else if (empresaSelecionada === 'Primogênesis (33.333.333/3333-33)') {
      document.getElementById(
        'name'
      ).innerHTML = `Nome: ${primogenesisThree.name}`
      document.getElementById(
        'CNPJ'
      ).innerHTML = `CNPJ: ${primogenesisThree.cnpj}`
      document.getElementById(
        'address'
      ).innerHTML = `Endereço: ${primogenesisThree.address}`
      document.getElementById(
        'current_situation'
      ).innerHTML = `Situação Atual: ${primogenesisThree.current_situation}`
      document.getElementById(
        'branch_of_activity'
      ).innerHTML = `Ramo de Atividade: ${primogenesisThree.branch_of_activity}`
      document.getElementById(
        'contact'
      ).innerHTML = `Contato: ${primogenesisThree.contact}`
      document.getElementById(
        'coordinatesX'
      ).innerHTML = `Coordenadas X (UTM): ${primogenesisThree.coordinatesX}`
      document.getElementById(
        'coordinatesY'
      ).innerHTML = `Coordenadas Y (UTM): ${primogenesisThree.coordinatesY}`
    } else if (empresaSelecionada === 'Circuitions (44.444.444/4444-44)') {
      document.getElementById('name').innerHTML = `Nome: ${circuitionsOne.name}`
      document.getElementById('CNPJ').innerHTML = `CNPJ: ${circuitionsOne.cnpj}`
      document.getElementById(
        'address'
      ).innerHTML = `Endereço: ${circuitionsOne.address}`
      document.getElementById(
        'current_situation'
      ).innerHTML = `Situação Atual: ${circuitionsOne.current_situation}`
      document.getElementById(
        'branch_of_activity'
      ).innerHTML = `Ramo de Atividade: ${circuitionsOne.branch_of_activity}`
      document.getElementById(
        'contact'
      ).innerHTML = `Contato: ${circuitionsOne.contact}`
      document.getElementById(
        'coordinatesX'
      ).innerHTML = `Coordenadas X (UTM): ${circuitionsOne.coordinatesX}`
      document.getElementById(
        'coordinatesY'
      ).innerHTML = `Coordenadas Y (UTM): ${circuitionsOne.coordinatesY}`
    } else if (empresaSelecionada === 'Circuitions (55.555.555/5555-55)') {
      document.getElementById('name').innerHTML = `Nome: ${circuitionsTwo.name}`
      document.getElementById('CNPJ').innerHTML = `CNPJ: ${circuitionsTwo.cnpj}`
      document.getElementById(
        'address'
      ).innerHTML = `Endereço: ${circuitionsTwo.address}`
      document.getElementById(
        'current_situation'
      ).innerHTML = `Situação Atual: ${circuitionsTwo.current_situation}`
      document.getElementById(
        'branch_of_activity'
      ).innerHTML = `Ramo de Atividade: ${circuitionsTwo.branch_of_activity}`
      document.getElementById(
        'contact'
      ).innerHTML = `Contato: ${circuitionsTwo.contact}`
      document.getElementById(
        'coordinatesX'
      ).innerHTML = `Coordenadas X (UTM): ${circuitionsTwo.coordinatesX}`
      document.getElementById(
        'coordinatesY'
      ).innerHTML = `Coordenadas Y (UTM): ${circuitionsTwo.coordinatesY}`
    } else if (empresaSelecionada === 'Pastor Belga SA (66.666.666/6666-66)') {
      document.getElementById(
        'name'
      ).innerHTML = `Nome: ${pastor_belga_sa.name}`
      document.getElementById(
        'CNPJ'
      ).innerHTML = `CNPJ: ${pastor_belga_sa.cnpj}`
      document.getElementById(
        'address'
      ).innerHTML = `Endereço: ${pastor_belga_sa.address}`
      document.getElementById(
        'current_situation'
      ).innerHTML = `Situação Atual: ${pastor_belga_sa.current_situation}`
      document.getElementById(
        'branch_of_activity'
      ).innerHTML = `Ramo de Atividade: ${pastor_belga_sa.branch_of_activity}`
      document.getElementById(
        'contact'
      ).innerHTML = `Contato: ${pastor_belga_sa.contact}`
      document.getElementById(
        'coordinatesX'
      ).innerHTML = `Coordenadas X (UTM): ${pastor_belga_sa.coordinatesX}`
      document.getElementById(
        'coordinatesY'
      ).innerHTML = `Coordenadas Y (UTM): ${pastor_belga_sa.coordinatesY}`
    }
  }
  */
})(window, document)
