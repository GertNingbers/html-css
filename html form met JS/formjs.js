const genSelectElement = document.getElementById('gen-select');
		const typeRadioButtons = document.getElementsByName('type');
		const resultDiv = document.getElementById('result');
		const submitButton = document.querySelector('input[type="submit"]');

		submitButton.addEventListener('click', (e) => {
			e.preventDefault();
			const selectedType = Array.from(typeRadioButtons).find((radioButton) => radioButton.checked).value;
			const selectedGen = genSelectElement.value;

			if (selectedType && selectedGen) {
				switch (selectedGen) {
					case '1':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Bulbasaur'; break;
							case '1': resultDiv.innerText = 'Charmander'; break;
							case '2': resultDiv.innerText = 'Squirtle'; break;
						}
						break;
					case '2':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Chikorita'; break;
							case '1': resultDiv.innerText = 'Cyndaquil'; break;
							case '2': resultDiv.innerText = 'Totodile'; break;
						}
						break;
					case '3':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Treecko'; break;
							case '1': resultDiv.innerText = 'Torchic'; break;
							case '2': resultDiv.innerText = 'Mudkip'; break;
						}
						break;
					case '4':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Turtwig'; break;
							case '1': resultDiv.innerText = 'Chimchar'; break;
							case '2': resultDiv.innerText = 'Piplup'; break;
						}
						break;
					case '5':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Snivy'; break;
							case '1': resultDiv.innerText = 'Tepig'; break;
							case '2': resultDiv.innerText = 'Oshawott'; break;
						}
						break;
					case '6':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Chespin'; break;
							case '1': resultDiv.innerText = 'Fennekin'; break;
							case '2': resultDiv.innerText = 'Froakie'; break;
						}
						break;
					case '7':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Rowlet'; break;
							case '1': resultDiv.innerText = 'Litten'; break;
							case '2': resultDiv.innerText = 'Popplio'; break;
						}
						break;
					case '8':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Grookey'; break;
							case '1': resultDiv.innerText = 'Scorbunny'; break;
							case '2': resultDiv.innerText = 'Sobble'; break;
						}
						break;
					case '9':
						switch (selectedType) {
							case '0': resultDiv.innerText = 'Sprigatito'; break;
							case '1': resultDiv.innerText = 'Fuecoco'; break;
							case '2': resultDiv.innerText = 'Quaxly'; break;
						}
						break;
					default:
						break;
				}
			} else {
				alert('Select a generation and type!');
			}
		});