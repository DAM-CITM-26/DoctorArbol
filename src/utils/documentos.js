import { TRABAJADORES } from '../data/datos.js'
export function diasHasta(fecha, hoy) {
  const unDia = 24 * 60 * 60 * 1000
  const dias = Math.round((new Date(fecha) - new Date(hoy)) / unDia)
  return dias
}

export function fechaCorta(fecha) {
   const [,mes,dia] = fecha.split('-')
   return `${dia}/${mes}`
}

export function estadoDocumento(documento, hoy) {
  const dias = diasHasta(documento.caduca, hoy)

  if (dias < 0) {
    return 'Caducado'
  } else if (dias <= 30) {
    return 'Por caducar'
  } else {
    return 'Válido'
  }
}

// 'Todos' no filtra
export function filtrarPorEstado(documentos, estado, hoy) {
  if (estado === 'Todos') return documentos
  return documentos.filter((documento) => estadoDocumento(documento, hoy) === estado)
}

export function trabajadorPorId(id) {
  return TRABAJADORES.find((trabajador) => trabajador.id === id)
}