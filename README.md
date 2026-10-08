# dismascapacidad-design

Estilos compartidos de los productos dismascapacidad, para que el configurador
(`app.equiparparaequipar.com.ar`) y la plataforma (`espacio.equiparparaequipar.com.ar`)
se vean como un solo ecosistema.

## Qué contiene (v1)

| Archivo | Qué es |
|---|---|
| `css/tokens.css` | Paleta de marca (azul marino + teal), estados, radios, sombras, transiciones. No cambia con el tema. |
| `css/theme.css` | Roles genéricos (fondo, texto, botón fantasma, badge) en tema claro y oscuro (`[data-theme="dark"]`). |
| `css/fonts.css` + `css/fonts/` | DM Sans autoalojada, subconjunto latin, pesos 400–800. |
| `preview.html` | Página para ver todo junto (abrir con un servidor local, ver abajo). |

Qué NO contiene: componentes (botones, modales, formularios), logos ni colores propios de una app (p. ej. SimoNeuro).

## Cómo lo usa cada sitio

Cada sitio guarda una copia fija de la carpeta `css/` dentro de su propio repo
(por ejemplo en `css/diseno/`) y la carga en este orden:

```html
<link rel="stylesheet" href="css/diseno/fonts.css">
<link rel="stylesheet" href="css/diseno/tokens.css">
<link rel="stylesheet" href="css/diseno/theme.css">
```

Así, cada sitio funciona sin depender de que este repo esté online, y actualizar
es una decisión consciente (se cambia de versión en una rama, se revisa y recién ahí va a producción).

## Versiones

Se publican como tags (`v1.0.0`, `v1.1.0`...). Ver `CHANGELOG.md`.

## Ver la vista previa

```powershell
cd C:\dev\dismascapacidad-design
python -m http.server 8899 --bind 127.0.0.1
```

y abrir http://127.0.0.1:8899/preview.html

## Licencias

- Código (CSS, HTML): MIT, ver `LICENSE`.
- DM Sans: SIL Open Font License 1.1, ver `css/fonts/OFL.txt`. Debe acompañar a la fuente.
- Logos y marca dismascapacidad / Equipar para Equipar: no incluidos ni licenciados por este repo.
