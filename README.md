<<<<<<< HEAD
=======
[index.html]
```html
>>>>>>> 3a655cb ( Control de colores verde y rojo de la bandera)
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bandera de México</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bandera de México</h1>
    <div class="container">
        <div class="column">
            <label for="green">Esperanza</label>
            <input type="range" id="green" min="0" max="100" value="50" onchange="updateShade('greenBox', this.value, 'green')">
            <p id="greenCode">#008000</p>
            <div id="greenBox" class="color-box" style="background-color: #008000;"></div>
        </div>
        <div class="middle">
            <label>Unidad</label>
            <p>#FFFFFF</p>
            <div class="color-box white-box" style="background-color: #FFFFFF; border: 1px solid #000;">
                <p class="symbol">@@@@@<br>@@@@@<br>@@@@@</p>
            </div>
        </div>
        <div class="column">
            <label for="red">Sangre de nuestros héroes nacionales</label>
            <input type="range" id="red" min="0" max="100" value="50" onchange="updateShade('redBox', this.value, 'red')">
            <p id="redCode">#FF0000</p>
            <div id="redBox" class="color-box" style="background-color: #FF0000;"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
<<<<<<< HEAD


[styles.css]

=======
```

[styles.css]
```css
>>>>>>> 3a655cb ( Control de colores verde y rojo de la bandera)
body {
    text-align: center;
    font-family: Arial, sans-serif;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
}
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.color-box {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.white-box {
    position: relative;
}
.symbol {
    position: absolute;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
}
<<<<<<< HEAD

[script.js]

=======
```

[script.js]
```js
>>>>>>> 3a655cb ( Control de colores verde y rojo de la bandera)
function updateShade(boxId, value, color) {
    let baseColor = color === 'green' ? [0, 128, 0] : [255, 0, 0];
    let factor = value / 100;
    let newColor = baseColor.map(channel => Math.round(channel * factor));
    let hexColor = `#${newColor.map(c => c.toString(16).padStart(2, '0')).join('')}`;
    document.getElementById(boxId).style.backgroundColor = hexColor;
    document.getElementById(boxId + 'Code').textContent = hexColor;
}
<<<<<<< HEAD



=======
```
>>>>>>> 3a655cb ( Control de colores verde y rojo de la bandera)
