# Modelo de datos — Doctor Árbol

## Sprint 1 · Pantalla Documentos

### Trabajador

| Campo | Tipo | Ejemplo |
| --- | --- | --- |
| `id` | Número entero | `1` |
| `nombre` | Cadena de texto | `Marta Soler` |
| `puesto` | Cadena de texto | `Podadora en altura` |

```json
{
  "id": 1,
  "nombre": "Marta Soler",
  "puesto": "Podadora en altura"
}
```

### Documento

| Campo | Tipo | Ejemplo |
| --- | --- | --- |
| `id` | Número entero | `1` |
| `nombre` | Cadena de texto | `Curso de trabajos en altura` |
| `tipo` | Cadena de texto | `Formación` |
| `trabajadorId` | Número entero | `1` |
| `caduca` | Cadena de texto con formato `AAAA-MM-DD` | `2027-03-16` |

```json
{
  "id": 1,
  "nombre": "Curso de trabajos en altura",
  "tipo": "Formación",
  "trabajadorId": 1,
  "caduca": "2027-03-16"
}
```

`trabajadorId` corresponde al `id` de un trabajador. La pantalla calcula el
estado del documento a partir de `caduca` y la fecha de consulta.