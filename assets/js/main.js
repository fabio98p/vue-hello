document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');

	var root = new Vue(
		{
			// Descrizione
			// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
			// Bonus
			// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

			el: '#root',
			data: {
				message: 'hello world',
				colore: 'red',
				image: 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk',
			},
			methods: {
				funzione: function () {
					if (this.colore == 'red') {
						this.colore = 'blue'
					} else {
						this.colore = 'red'
					}
				},
				changeImg: function () {
					if (this.image == 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk') {
						this.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4cMNLHglj8e52x18LQwrjbygCIiJdK2MBA&usqp=CAU'
					} else {
						this.image = 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk'
					}
				}
			},
		}
	);




























});