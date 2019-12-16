// 5. Zmodyfikujmy nasze zadanie 4 tak aby zamiast .then..catch użyć await.



const add = async (a, b) => {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error("Wynik jest parzysty.")
    }
    return result;
}

// sposób z awaitem z IFIE dlatego, że await musi byc zawsze w IFIE - to pomoc do 5 zadania (nie jest gotowe)

(async () => {
    try {
        const wynik = await add(2, 3);
        console.log(wynik);
    } catch (error) {
        console.log(error.name, error.message);
    }
})();
