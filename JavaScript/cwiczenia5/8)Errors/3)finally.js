try {               // wykonuje się zawsze do końca  lub wyrzucenia błędu
    let person = Karol    
} catch (error) {   // wykonuje się, gdy wystąpi błąd
    console.log('error: ', error);
} finally {         // wykonuje się zawsze
    console.log('finally block reached')
}
console.log('done');