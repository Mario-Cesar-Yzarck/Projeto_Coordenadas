;(function (win, doc) {
  'use strict'
  //O objetivo é ter um campo de input, onde se escolhe o nome da empresa e outro onde escolhe o cnpj e aparece abaixo as coordenadas referentes àquela empresa/filial.
  function app() {
    const $empresaSelecionada = doc.querySelector("[data-js='nome_empresas']")
    const $btnSearch = doc.querySelector("[data-js='btnSearch']")
    var $table = doc.querySelector("[data-js='table']")
    var enterprise = []

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'data.json')
    ajax.send()
    var data
    eventReadyState()

    $btnSearch.addEventListener(
      'click',
      () => {
        getDataInJSON()
      },
      false
    )

    function getDataInJSON() {
      let html = ''
      $table.innerHTML = html
      for (let element of enterprise) {
        html += `<tr><td>${element.name}</td>`
        html += `<td>${element.cnpj}</td>`
        html += `<td>${element.address}</td>`
        html += `<td>${element.process}</td>`
        html += `<td><a href="${element.link}" target="_blank">${element.coordenates}</a></td>`
        $table.innerHTML = html
      }
    }

    function eventReadyState() {
      ajax.addEventListener('readystatechange', () => {
        if (isRequestOk()) {
          data = JSON.parse(ajax.responseText)
        }
      })
    }

    function isRequestOk() {
      if (ajax.readyState === 4 && ajax.status === 200) {
        return true
      }
    }

    function whatIsSelected(enterpriseSelected) {
      switch (enterpriseSelected.value) {
        case '$101_NORTE':
          enterprise = []
          enterprise.push(data.$101_NORTE)
          break
        case '$AEL_PARTICIPACOES':
          enterprise = []
          enterprise.push(data.$AEL_PARTICIPACOES)
          break
        case '$AGRIPINO':
          enterprise = []
          enterprise.push(data.$AGRIPINO)
          break
        case '$AGUA_DOCE_MINERACAO':
          enterprise = []
          enterprise.push(data.$AGUA_DOCE_MINERACAO_1)
          enterprise.push(data.$AGUA_DOCE_MINERACAO_2)
          enterprise.push(data.$AGUA_DOCE_MINERACAO_3)
          enterprise.push(data.$AGUA_DOCE_MINERACAO_4)
          break
        case '$AGUA_PEDRA_AZUL':
          enterprise = []
          enterprise.push(data.$AGUA_PEDRA_AZUL_1)
          enterprise.push(data.$AGUA_PEDRA_AZUL_2)
          break
        case '$ALMIR_LAZARI':
          enterprise = []
          enterprise.push(data.$ALMIR_LAZARI)
          break
        case '$AM_GRANITOS':
          enterprise = []
          enterprise.push(data.$AM_GRANITOS)
          break
        default:
          enterprise = []
          break
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
    //ate aqui
    '',
    '',
    '',
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
    //ate aqui
    ``,
    ``,
    ``,
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

  
<option value="$ALMIR LAZARI (xx.xxx.xxx/0001-10)">
        ALMIR LAZARI (xx.xxx.xxx/0001-10)
      </option>

      <option value="">
        AM GRANITOS (xx.xxx.xxx/0001-11)
      </option>

      <option value="">
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



  


  

  */
})(window, document)
