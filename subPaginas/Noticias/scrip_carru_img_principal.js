let Index2 = 0;
    const items = document.querySelectorAll('.carrusel-item02');
    const totalItems = items.length;

    function showItem(Index2) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === Index2) {
                item.classList.add('active');
            }
        });
        const carruselContainer = document.querySelector('.carrusel-container-img');
        carruselContainer.style.transform = `translateX(-${Index2 * 100}%)`;
    }

    document.querySelector('.boton-next').addEventListener('click', () => {
        Index2 = (Index2 + 1) % totalItems;
        showItem(Index2);
    });

    document.querySelector('.boton-prev').addEventListener('click', () => {
        Index2 = (Index2 - 1 + totalItems) % totalItems;
        showItem(Index2);
    });

    setInterval(() => {
        Index2 = (Index2 + 1) % totalItems;
        showItem(Index2);
    }, 6000); // puede cambiar el intervalo de tiempo [cambia cada 6 segundos]