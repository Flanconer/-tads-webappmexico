function updateShade(boxId, value, color) {
    let baseColor = color === 'green' ? [0, 128, 0] : [255, 0, 0];
    let factor = value / 100;
    let newColor = baseColor.map(channel => Math.round(channel * factor));
    let hexColor = `#${newColor.map(c => c.toString(16).padStart(2, '0')).join('')}`;
    document.getElementById(boxId).style.backgroundColor = hexColor;
    document.getElementById(boxId + 'Code').textContent = hexColor;
}