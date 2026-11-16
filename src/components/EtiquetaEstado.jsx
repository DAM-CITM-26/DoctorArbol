
export default function EtiquetaEstado({ estado }) {
  const clases = {
    'Válido': 'tag-rapida',
    'Por caducar': 'tag-media',
    'Caducado': 'tag-larga'
  }

  return (
    <span className={`tag ${clases[estado]}`}>
      {estado}
    </span>
  )
}
