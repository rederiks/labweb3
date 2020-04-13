let arrCity = ["Київ", "Вінниця", "Миколаїв", "Чернігів"];
let arrWork = ["Директор", "Менеджер", "Бухгалтер", "Офісний планктон"]

for (let i of arrCity) {
    let city = confirm(`Вас влаштовує місто ${i}?`)
    if (city == true) {
        var confirmedCity = i;
        break;
    }
}

for (let i of arrWork) {
    let position = confirm(`Вас влаштовує посада "${i}"?`)
    if (position == true) {
        var confirmedPosition = i;
        break;
    }
}

alert(`Ви переїдите у місто ${confirmedCity} на посаду ${confirmedPosition}`)

