const getBtn = document.getElementById('get-btn');
const colorScheme = document.getElementById('color-scheme');
const colorPicker = document.getElementById('color-picker');
const schemeSelect = document.getElementById('scheme-select');

getBtn.addEventListener('click', async () => {

    const smth= await getColorScheme()
    console.log(smth)


    console.log(colorPicker.value)
    console.log(schemeSelect.value)
});
async function getColorScheme() {
    try {
        const response = await fetch(
            `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${schemeSelect.value.toLowerCase()}&count=5`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log(data.colors[0].hex.value);
        return data.colors.map(col=>{ return col.hex.value})
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

