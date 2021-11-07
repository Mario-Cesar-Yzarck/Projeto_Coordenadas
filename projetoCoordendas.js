;(function (win, doc) {
  'use strict'
  //O objetivo é ter um campo de input, onde se escolhe o nome da empresa e outro onde escolhe o cnpj e aparece abaixo as coordenadas referentes àquela empresa/filial.
  function app() {
    const $empresaSelecionada = doc.querySelector("[data-js='nome_empresas']")
    const $coordenates = doc.querySelector("[data-js='coordenates']")
    const $btnSearch = doc.querySelector("[data-js='btnSearch']")
    const $cnpj = doc.querySelector("[data-js='cnpj']")
    const $name = doc.querySelector("[data-js='name']")
    const $address = doc.querySelector("[data-js='address']")
    const $cnpjInHtml = doc.querySelector("[data-js='cnpjInHtml']")
    const $process = doc.querySelector("[data-js='process']")

    const $101_NORTE = {
      name: '101 Norte',
      cnpj: ['xx.xxx.xxx/0001-01'],
      coordenates: ['-19.693098, -40.291264'],
      link: [
        `https://www.google.com.br/maps/place/19%C2%B041'35.2%22S+40%C2%B017'28.6%22W/@-19.6930929,-40.2934527,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.693098!4d-40.291264`
      ],
      address: ['Rua Agriola, n 55, Alegre'],
      process: ['13579']
    }
    const $AEL_PARTICIPACOES = {
      name: 'A&L Participações',
      cnpj: ['xx.xxx.xxx/0001-02'],
      coordenates: ['-20.051245, -40.386612'],
      link: [
        `https://www.google.com.br/maps/place/20%C2%B003'04.5%22S+40%C2%B023'11.8%22W/@-20.0512399,-40.3888007,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.051245!4d-40.386612`
      ],
      address: ['Rua Guarani, n 25, Vix'],
      process: ['555555']
    }
    const $AGRIPINO = {
      name: 'Agrapino',
      cnpj: ['xx.xxx.xxx/0001-03'],
      coordenates: ['-19.060426, -41.014644'],
      link: [
        `https://www.google.com.br/maps/place/19%C2%B003'37.5%22S+41%C2%B000'52.7%22W/@-19.0604209,-41.0168327,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.060426!4d-41.014644`
      ],
      address: ['Rua 10, n 1500, Colatina'],
      process: ['10099']
    }
    const $AGUA_DOCE_MINERACAO = {
      name: 'Água Doce Mineração',
      cnpj: [
        'xx.xxx.xxx/0001-04',
        'xx.xxx.xxx/0001-05',
        'xx.xxx.xxx/0001-06',
        'xx.xxx.xxx/0001-07'
      ],
      coordenates: [
        '-18.611905, -41.017837',
        '-18.624376, -41.023749',
        '-18.61109, -41.01575',
        '-18.61718, -41.01867'
      ],
      link: [
        `https://www.google.com.br/maps/place/18%C2%B036'42.9%22S+41%C2%B001'04.2%22W/@-18.6118999,-41.0200257,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.611905!4d-41.017837`,
        `https://www.google.com.br/maps/place/18%C2%B037'27.8%22S+41%C2%B001'25.5%22W/@-18.6243709,-41.0259377,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.624376!4d-41.023749`,
        `https://www.google.com.br/maps/place/18%C2%B036'39.9%22S+41%C2%B000'56.7%22W/@-18.6110849,-41.0179387,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.61109!4d-41.01575`,
        `https://www.google.com.br/maps/place/18%C2%B037'01.9%22S+41%C2%B001'07.2%22W/@-18.6171749,-41.0208587,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.61718!4d-41.01867`
      ],
      address: [
        'Rua ndkvn, n 6575, São Xico',
        'Rua 2, n 24, Ecops',
        'Rua Um de Abril, n 455, Ecops',
        'Rua H, n 262, São Xico'
      ],
      process: ['00000', '33333', '22233', '123577']
    }
    const $AGUA_PEDRA_AZUL = {
      name: 'Água Pedra Azul',
      cnpj: ['xx.xxx.xxx/0001-08', 'xx.xxx.xxx/0001-09'],
      coordenates: ['-20.415114, -40.862147', '-20.615830, -40.732170'],
      link: [
        `https://www.google.com.br/maps/place/20%C2%B024'54.4%22S+40%C2%B051'43.7%22W/@-20.415109,-40.8643357,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.415114!4d-40.862147`,
        `https://www.google.com.br/maps/place/20%C2%B036'57.0%22S+40%C2%B043'55.8%22W/@-20.615825,-40.7343587,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.61583!4d-40.73217`
      ],
      address: ['Rua 1, n 15, São Xico', 'Rua 2, n 15, Ecops'],
      process: ['12345', '67890']
    }

    var enterprise

    $btnSearch.addEventListener(
      'click',
      function (event) {
        for (let i = 0; i < enterprise.cnpj.length; i++) {
          if ($cnpj.value === enterprise.cnpj[i]) {
            $name.textContent = 'Nome da empresa: ' + enterprise.name
            $cnpjInHtml.innerHTML = 'CNPJ da empresa: ' + enterprise.cnpj[i]
            $address.innerHTML = 'Endereço da empresa: ' + enterprise.address[i]
            $process.innerHTML = 'Processo nº: ' + enterprise.process[i]
            $coordenates.innerHTML =
              'Coordenadas da empresa: ' +
              `<a href="${enterprise.link[i]}" target="blanck">` +
              enterprise.coordenates[i] +
              '</a>'
          }
        }
      },
      false
    )

    function whatIsSelected(enterpriseSelected) {
      if (enterpriseName(enterpriseSelected)) {
        return ''
      }
      switch (enterpriseSelected.value) {
        case '$101_NORTE':
          enterprise = $101_NORTE
          setCNPJInHtml(enterprise)
          break
        case '$AEL_PARTICIPACOES':
          enterprise = $AEL_PARTICIPACOES
          setCNPJInHtml(enterprise)
          break
        case '$AGRIPINO':
          enterprise = $AGRIPINO
          setCNPJInHtml(enterprise)
          break
        case '$AGUA_DOCE_MINERACAO':
          enterprise = $AGUA_DOCE_MINERACAO
          setCNPJInHtml(enterprise)
          break
        case '$AGUA_PEDRA_AZUL':
          enterprise = $AGUA_PEDRA_AZUL
          setCNPJInHtml(enterprise)
          break
        default:
          break
      }
    }

    function setCNPJInHtml(param) {
      $cnpj.innerHTML = ''
      for (let i = 0; i < param.cnpj.length; i++) {
        $cnpj.innerHTML += `<option>` + param.cnpj[i] + '</option>'
      }
    }

    function enterpriseName(enterpriseName) {
      if (enterpriseName.value === 'Selecione a empresa') {
        $name.textContent = ''
        $cnpjInHtml.innerHTML = ''
        $address.innerHTML = ''
        $process.innerHTML = ''
        $coordenates.innerHTML = ''
        $cnpj.innerHTML = ''
        $cnpj.innerHTML = `<option> Selecione o CNPJ </option>`
        return true
      }
    }

    $empresaSelecionada.addEventListener(
      'change',
      e => {
        e.preventDefault()
        whatIsSelected($empresaSelecionada)
      },
      false
    )
  }

  app()

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
    //ate aqui
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
    '-19.429496, -40.842260',
    '-18.424833, -43.507840',
    '-20.356076, -41.344520',
    '-20.036963, -40.170324',
    '-19.734730, -40.268681'
  ]

  const linksCoordenates = [
    `https://www.google.com.br/maps/place/19%C2%B041'35.2%22S+40%C2%B017'28.6%22W/@-19.6930929,-40.2934527,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.693098!4d-40.291264`,
    `https://www.google.com.br/maps/place/20%C2%B003'04.5%22S+40%C2%B023'11.8%22W/@-20.0512399,-40.3888007,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.051245!4d-40.386612`,
    `https://www.google.com.br/maps/place/19%C2%B003'37.5%22S+41%C2%B000'52.7%22W/@-19.0604209,-41.0168327,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.060426!4d-41.014644`,
    `https://www.google.com.br/maps/place/18%C2%B036'42.9%22S+41%C2%B001'04.2%22W/@-18.6118999,-41.0200257,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.611905!4d-41.017837`,
    `https://www.google.com.br/maps/place/18%C2%B037'27.8%22S+41%C2%B001'25.5%22W/@-18.6243709,-41.0259377,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.624376!4d-41.023749`,
    `https://www.google.com.br/maps/place/18%C2%B036'39.9%22S+41%C2%B000'56.7%22W/@-18.6110849,-41.0179387,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.61109!4d-41.01575`,
    `https://www.google.com.br/maps/place/18%C2%B037'01.9%22S+41%C2%B001'07.2%22W/@-18.6171749,-41.0208587,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.61718!4d-41.01867`,
    `https://www.google.com.br/maps/place/20%C2%B024'54.4%22S+40%C2%B051'43.7%22W/@-20.415109,-40.8643357,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.415114!4d-40.862147`,
    `https://www.google.com.br/maps/place/20%C2%B036'57.0%22S+40%C2%B043'55.8%22W/@-20.615825,-40.7343587,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.61583!4d-40.73217`,
    //ate aqui
    `https://www.google.com.br/maps/place/18%C2%B058'43.4%22S+40%C2%B044'28.6%22W/@-18.9787059,-40.7434567,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.978711!4d-40.741268`,
    `https://www.google.com.br/maps/place/18%C2%B034'20.1%22S+41%C2%B016'39.7%22W/@-18.5722319,-41.2798887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.572237!4d-41.2777`,
    `https://www.google.com.br/maps/place/15%C2%B044'11.0%22S+39%C2%B037'16.0%22W/@-15.7363838,-39.6232997,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.736389!4d-39.621111`,
    `https://www.google.com.br/maps/place/15%C2%B044'46.0%22S+39%C2%B036'58.0%22W/@-15.7461058,-39.6182997,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.746111!4d-39.616111`,
    `https://www.google.com.br/maps/place/15%C2%B044'27.0%22S+39%C2%B037'03.0%22W/@-15.7408278,-39.6196887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.740833!4d-39.6175`,
    `https://www.google.com.br/maps/place/15%C2%B044'37.0%22S+39%C2%B037'04.0%22W/@-15.7436058,-39.6199657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.743611!4d-39.617777`,
    `https://www.google.com.br/maps/place/15%C2%B037'36.0%22S+40%C2%B006'27.0%22W/@-15.6266618,-40.1096887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-15.626667!4d-40.1075`,
    `https://www.google.com.br/maps/place/19%C2%B007'23.8%22S+40%C2%B014'35.5%22W/@-19.1232749,-40.2453777,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.12328!4d-40.243189`,
    `https://www.google.com.br/maps/place/18%C2%B024'23.5%22S+40%C2%B013'33.8%22W/@-18.4065159,-40.2282367,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.406521!4d-40.226048`,
    `https://www.google.com.br/maps/place/18%C2%B034'14.4%22S+40%C2%B014'30.6%22W/@-18.5706609,-40.2440157,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.570666!4d-40.241827`,
    `https://www.google.com.br/maps/place/19%C2%B041'29.0%22S+40%C2%B057'34.8%22W/@-19.6913929,-40.9618647,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.691398!4d-40.959676`,
    `https://www.google.com.br/maps/place/20%C2%B014'29.1%22S+40%C2%B021'52.2%22W/@-20.241411,-40.3666767,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.241416!4d-40.364488`,
    `https://www.google.com.br/maps/place/19%C2%B025'46.2%22S+40%C2%B050'32.1%22W/@-19.4294909,-40.8444487,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.429496!4d-40.84226`,
    `https://www.google.com.br/maps/place/18%C2%B025'29.4%22S+43%C2%B030'28.2%22W/@-18.4248279,-43.5100287,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-18.424833!4d-43.50784`,
    `https://www.google.com.br/maps/place/20%C2%B021'21.9%22S+41%C2%B020'40.3%22W/@-20.356071,-41.3467087,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.356076!4d-41.34452`,
    `https://www.google.com.br/maps/place/20%C2%B002'13.1%22S+40%C2%B010'13.2%22W/@-20.0369579,-40.1725127,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-20.036963!4d-40.170324`,
    `https://www.google.com.br/maps/place/19%C2%B044'05.0%22S+40%C2%B016'07.3%22W/@-19.7347249,-40.2708697,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-19.73473!4d-40.268681`
  ]

  /*
parte do HTML
<option value="$ALMIR LAZARI (xx.xxx.xxx/0001-10)">
        ALMIR LAZARI (xx.xxx.xxx/0001-10)
      </option>
      <option value="AM GRANITOS (xx.xxx.xxx/0001-11)">
        AM GRANITOS (xx.xxx.xxx/0001-11)
      </option>
      <option value="AMAGRAN (xx.xxx.xxx/0001-12)">
        AMAGRAN (xx.xxx.xxx/0001-12)
      </option>
      <option value="AMAGRAN (xx.xxx.xxx/0001-13)">
        AMAGRAN (xx.xxx.xxx/0001-13)
      </option>
      <option value="AMAGRAN (xx.xxx.xxx/0001-14)">
        AMAGRAN (xx.xxx.xxx/0001-14)
      </option>
      <option value="AMAGRAN (xx.xxx.xxx/0001-15)">
        AMAGRAN (xx.xxx.xxx/0001-15)
      </option>
      <option value="AMAGRAN (xx.xxx.xxx/0001-16)">
        AMAGRAN (xx.xxx.xxx/0001-16)
      </option>
      <option value="AREPEDRA (xx.xxx.xxx/0001-17)">
        AREPEDRA (xx.xxx.xxx/0001-17)
      </option>
      <option value="BELA VISTA (xx.xxx.xxx/0001-18)">
        BELA VISTA(xx.xxx.xxx/0001-18)
      </option>
      <option value="BELLACER (xx.xxx.xxx/0001-19)">
        BELLACER (xx.xxx.xxx/0001-19)
      </option>
      <option value="BIBOM (xx.xxx.xxx/0001-20)">
        BIBOM (xx.xxx.xxx/0001-20)
      </option>
      <option value="BRASIF (xx.xxx.xxx/0001-21)">
        BRASIF (xx.xxx.xxx/0001-21)
      </option>
      <option value="CAMAGRAN (xx.xxx.xxx/0001-22)">
        CAMAGRAN (xx.xxx.xxx/0001-22)
      </option>
      <option value="MINERAÇÃO CAMPINHO (xx.xxx.xxx/0001-23)">
        MINERAÇÃO CAMPINHO (xx.xxx.xxx/0001-23)
      </option>
      <option value="MINERAÇÃO COLODETT (xx.xxx.xxx/0001-24)">
        MINERAÇÃO COLODETT(xx.xxx.xxx/0001-24)
      </option>
      <option value="CONSTRUBLOK (xx.xxx.xxx/0001-25)">
        CONSTRUBLOK (xx.xxx.xxx/0001-25)
      </option>
      <option value="CONSTRACTOR (xx.xxx.xxx/0001-26)">
        CONSTRACTOR(xx.xxx.xxx/0001-26)
      </option>

//parte do arrayEmpresas
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
