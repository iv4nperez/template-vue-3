export const printWaterMark = () => {
    console.log(
        "%c¡Detente!",
        "font-weight: bold; font-size: 40px;color: red;"
    );
    console.log(
        "%c!Esta función del navegador está pensada para desarrolladores!",
        "font-weight: bold; font-size: 20px;color: black;"
    );

    console.log(
        "%cPowered by",
        "font-weight: bold; font-size: 10px;color: black;",
        "TIC"
    );
};
