import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
require('./categoria')
require( './detalle')
import firebase from 'firebase'
import config from './config'
import './nuevoequipo'
import login from './login'


const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
})


page('/login', () => {
	main.innerHTML = layout(login)

})
