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
})(window, document)
