import AppHeader from './header.js'
import SearchBox from './searchbox.js'

export default view

function view (props, state) {
  return h('div', null, [
    h(AppHeader),
    h('main', { 'id': 'app' }, h('section', { 'id': 'newsletter', 'class': 'section is-medium' }, h('div', { 'class': 'container' }, h('div', { 'class': 'columns is-vcentered' }, h('div', { 'class': 'column is-three-fifths is-offset-one-fifth' }, h(SearchBox)))))),
    h('footer', { 'class': 'footer' }, h('div', { 'class': 'content has-text-centered' }, h('p', null, [
      h('strong', null, 'Bulma'),
      'by',
      h('a', { 'href': 'https://jgthms.com' }, 'Jeremy Thomas'),
      '. The source code is licensed',
      h('a', { 'href': 'http://opensource.org/licenses/mit-license.php' }, 'MIT'),
      '. The website content\
          is licensed',
      h('a', { 'href': 'http://creativecommons.org/licenses/by-nc-sa/4.0/' }, 'CC BY NC SA 4.0'),
      '.'
    ])))
  ])
}
