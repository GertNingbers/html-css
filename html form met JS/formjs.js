<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pokémon JS Form</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="formjs.css?1">
</head>

<body>
    <h1>Pokémon-JS-form</h1>
    <form id="pokemon-form">
        <fieldset>
            <h3>Name</h3>
            First Name: <input type="text" id="firstname" name="firstname" value=""><br>
            Last Name: <input type="text" id="lastname" name="lastname" value=""><br>
            Birthdate: <input type="date" id="birthdate" name="birthdate" value=""><br>
        </fieldset>
        
        <fieldset>
            <h3>Favorite starter Pokémon</h3>
            <p>
                Choose your favorite starter Pokémon type:<br>
                <input type="radio" id="type-grass" name="type" value="0">Grass<br>
                <input type="radio" id="type-fire" name="type" value="1">Fire<br>
                <input type="radio" id="type-water" name="type" value="2">Water<br>
            </p>
            <p>Select Pokémon Generation:</p>
            <select id="gen-select" name="gen">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select><br>
            <p>Why is this your favorite starter:</p>
            <input type="checkbox" id="reason0" name="reason" value="The design">The design<br>
            <input type="checkbox" id="reason1" name="reason" value="It is my first Pokémon">It is my first Pokémon<br>
            <input type="checkbox" id="reason2" name="reason" value="Evolutions">Evolutions<br>
            <input type="checkbox" id="reason3" name="reason" value="Cool">Cool<br>
            <input type="checkbox" id="reason4" name="reason" value="Other">Other<br>
            <textarea name="reason" id="text1" placeholder="A different reason..."></textarea><br>
        </fieldset>
        <br>
        <input type="submit" value="Send">
    </form>
    <div id="result"></div>

    <script>
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
        </script>
    </body>
    </html>