# Build
- build produces few minified JavaScript bundles:
  - one for game (main build)
  - one for phoenix (3d rpg client)
  - one for each third-party library, like Babylon (3d renderer)
- main build still has access to types from other bundles
- at runtime, index imports phxdos, which loads all remaining bundles into globalThis scope
- libraries are accessed via TypeScript wrapper file in '/lib/$name.ts'
  - this wrapper exposes the library's root export if such exists
  - otherwise it exports namespace(s) wrapping 'export import $def = $asteriskImport.$def'
  - each of these wrapper files is used to produce tree-shaken bundle of that library
  - release version of the game loads libraries from bundle at '/.build/lib/$name.js'

- entry point is defined as '/index.ts'
- release version of the game loads main build from '/.build/index.js'
