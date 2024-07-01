document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.flex-container');
    const resetButton = document.getElementById('reset');
    const gapInput = document.getElementById('gap');

    document.getElementById('row').addEventListener('click', () => {
        flexContainer.style.flexDirection = 'row';
    });

    document.getElementById('column').addEventListener('click', () => {
        flexContainer.style.flexDirection = 'column';
    });

    document.getElementById('justify-start').addEventListener('click', () => {
        flexContainer.style.justifyContent = 'flex-start';
    });

    document.getElementById('justify-center').addEventListener('click', () => {
        flexContainer.style.justifyContent = 'center';
    });

    document.getElementById('justify-end').addEventListener('click', () => {
        flexContainer.style.justifyContent = 'flex-end';
    });

    document.getElementById('justify-space-between').addEventListener('click', () => {
        flexContainer.style.justifyContent = 'space-between';
    });

    document.getElementById('justify-space-around').addEventListener('click', () => {
        flexContainer.style.justifyContent = 'space-around';
    });

    document.getElementById('justify-space-evenly').addEventListener('click', () => {
        flexContainer.style.justifyContent = 'space-evenly';
    });

    document.getElementById('align-start').addEventListener('click', () => {
        flexContainer.style.alignItems = 'flex-start';
    });

    document.getElementById('align-center').addEventListener('click', () => {
        flexContainer.style.alignItems = 'center';
    });

    document.getElementById('align-end').addEventListener('click', () => {
        flexContainer.style.alignItems = 'flex-end';
    });

    gapInput.addEventListener('input', () => {
        flexContainer.style.gap = `${gapInput.value}px`;
    });

    const growInputs = [
        document.getElementById('grow1'),
        document.getElementById('grow2'),
        document.getElementById('grow3')
    ];

    growInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const box = document.getElementById(`box${index + 1}`);
            box.style.flexGrow = input.value;
        });
    });

    resetButton.addEventListener('click', () => {
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'stretch';
        flexContainer.style.gap = '0px';
        gapInput.value = '0';
        growInputs.forEach(input => {
            const index = parseInt(input.id.slice(-1)) - 1;
            const box = document.getElementById(`box${index + 1}`);
            input.value = '0';
            box.style.flexGrow = '0';
        });
    });
});

