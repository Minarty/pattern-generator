const canvas  = document.getElementById('canvas');
canvas.width  = screen.width;
canvas.height = screen.height;

document.querySelector("#run").addEventListener("click", () => {
    const first  = document.getElementById('first');
    const second = document.getElementById('second');
    const size   = parseInt(document.getElementById("size").value);

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let x = 0; x < canvas.width - size; x += size) {
            for (let y = 0; y < canvas.height - size; y += size) {
                ctx.fillStyle = (((x+y) / size) % 2 === 0) ? first.value : second.value;
                ctx.fillRect(x, y, size, size);
            }
        }
    }
});
