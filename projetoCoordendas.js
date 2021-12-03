;(function (win, doc) {
  'use strict'
  //O objetivo é ter um campo de input, onde se escolhe o nome da empresa e outro onde escolhe o cnpj e aparece abaixo as coordenadas referentes àquela empresa/filial.
  function app() {
    const $empresaSelecionada = doc.querySelector("[data-js='nome_empresas']")
    const $btnSearch = doc.querySelector("[data-js='btnSearch']")
    var $table = doc.querySelector("[data-js='table']")
    var enterprise = []
    var requestURL =
      'https://raw.githubusercontent.com/Mario-Cesar-Yzarck/data/main/data.json'

    const ajax = new XMLHttpRequest()
    ajax.open('GET', requestURL)
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
      enterprise = []
      switch (enterpriseSelected.value) {
        case '$101_NORTE':
          enterprise.push(data.$101_NORTE)
          break
        case '$AEL_PARTICIPACOES':
          enterprise.push(data.$AEL_PARTICIPACOES)
          break
        case '$AGRIPINO':
          enterprise.push(data.$AGRIPINO)
          break
        case '$AGUA_DOCE_MINERACAO':
          enterprise.push(data.$AGUA_DOCE_MINERACAO_1)
          enterprise.push(data.$AGUA_DOCE_MINERACAO_2)
          enterprise.push(data.$AGUA_DOCE_MINERACAO_3)
          enterprise.push(data.$AGUA_DOCE_MINERACAO_4)
          break
        case '$AGUA_PEDRA_AZUL':
          enterprise.push(data.$AGUA_PEDRA_AZUL_1)
          enterprise.push(data.$AGUA_PEDRA_AZUL_2)
          break
        case '$ALMIR_LAZARI':
          enterprise.push(data.$ALMIR_LAZARI)
          break
        case '$AM_GRANITOS':
          enterprise.push(data.$AM_GRANITOS)
          break
        case '$AMAGRAN':
          enterprise.push(data.$AMAGRAN_1)
          enterprise.push(data.$AMAGRAN_2)
          enterprise.push(data.$AMAGRAN_3)
          enterprise.push(data.$AMAGRAN_4)
          enterprise.push(data.$AMAGRAN_5)
          break
        case '$AREPEDRA':
          enterprise.push(data.$AREPEDRA)
          break
        case '$BELA_VISTA':
          enterprise.push(data.$BELA_VISTA)
          break
        case '$BELLACER':
          enterprise.push(data.$BELLACER)
          break
        case '$BIBOM':
          enterprise.push(data.$BIBOM)
          break
        case '$BRASIF':
          enterprise.push(data.$BRASIF)
          break
        case '$CAMAGRAN':
          enterprise.push(data.$CAMAGRAN)
          break
        case '$MINERAÇÃO_CAMPINHO':
          enterprise.push(data.$MINERAÇÃO_CAMPINHO)
          break
        case '$MINERAÇÃO_COLODETT':
          enterprise.push(data.$MINERAÇÃO_COLODETT)
          break
        case '$CONSTRUBLOK':
          enterprise.push(data.$CONSTRUBLOK)
          break
        case '$CONSTRACTOR':
          enterprise.push(data.$CONSTRACTOR)
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
})(window, document)
