# TypeScript Example Code

* goal
  * samples / 
    * hyperlink between each-other | sandboxed environment
    * cover >=1 specific features

* requirements
  * monaco/IDE-like environment / has a TSServer running

## how to add a NEW example section?

Create a folder in this repo, then sub-folders per section. Next,
edit `generateTOC.js` with at the set of folders it should grab
at around line 30, then edit the `const toc` further down to
add a new section. If you need custom ordering then use the
`sortedSubSections` array to set your order.
