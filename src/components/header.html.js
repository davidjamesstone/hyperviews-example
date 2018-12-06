export default function view (props, state) {
  return h('header', { 'onclick': this.onClick }, h('nav', { 'class': 'navbar is-dark', 'role': 'navigation', 'aria-label': 'main navigation' }, h('div', { 'class': 'navbar-brand' }, [
    h('a', { 'class': 'navbar-item', 'href': 'https://bulma.io' }, h('img', { 'src': 'https://bulma.io/images/bulma-logo.png', 'alt': 'Bulma: a modern CSS framework based on Flexbox', 'width': '112', 'height': '28' })),
    h('a', { 'role': 'button', 'class': 'navbar-burger', 'aria-label': 'menu', 'aria-expanded': 'false' }, [
      h('span', { 'aria-hidden': 'true' }),
      h('span', { 'aria-hidden': 'true' }),
      h('span', { 'aria-hidden': 'true' })
    ])
  ])))
}
