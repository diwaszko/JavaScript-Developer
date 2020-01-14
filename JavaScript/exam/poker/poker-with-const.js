// Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck. 
// After that the solution is to tell us what is the best poker set. EXAM

const cards = require("./cards.json");
const colors = require("./colors.json");

const createDeck = (cards, colors) => {
    const arrayOfCards = cards.map(oneCard => {
        return colors.map(oneColor => {
            return {
                card: oneCard.card,
                order: oneCard.order,
                color: oneColor.color
            }
        });
    });
    const fullDeck = arrayOfCards.reduce((acc, val) => acc.concat(val));

    return fullDeck;
}

const randomCards = () => {
    let deckOfCards = createDeck(cards, colors);
    let deckKeys = Object.keys(deckOfCards);
    let handOfCards = [];
    let randomizedId;
    for (let i = 0; i < 5; i++) {
        randomizedId = deckKeys.length * Math.random() << 0;
        handOfCards.push(deckOfCards[deckKeys[randomizedId]]);
        deckKeys.splice(randomizedId, 1)
    }
    const sortDeck = (cardA, cardB) => {
        let comparison = 0;
        const leftCard = cardA.order;
        const rightCard = cardB.order;

        if (leftCard > rightCard) {
            comparison = 1;
        } else if (leftCard < rightCard) {
            comparison = -1;
        }
        return comparison;
    };
    const sortedDeck = [...handOfCards].sort(sortDeck);
    return sortedDeck;
}

const combinantions = (sortedDeck) => {
    let cardValues = sortedDeck.map((val, i) => val.card + val.color);

    const royalFlush = (sortedDeck) => {
        let checkCardsHight = sortedDeck.every((card, i) => card.order >= 9);

        if (!checkCardsHight || !checkedSameColor || !checkedNextCard) {
            return false;
        } else {
            return {
                val: true,
                color: checkedColorValue,
                cardVal: checkedCardValuesToString
            }
        }
    }
    const straightFlush = (sortedDeck) => {
        let lowStraight = [1, 2, 3, 4, 13];
        let checkCardsLowStraight = sortedDeck.every((val, i) => val.order == lowStraight[i]);

        if (checkCardsLowStraight && checkedSameColor) {
            cardValues.splice(0, 0, cardValues.pop());
            return {
                val: true,
                color: checkedColorValue,
                cardVal: checkedCardValuesToString
            }
        } else if (!checkedNextCard || !checkedSameColor) {
            return false;
        } else {
            return {
                val: true,
                color: checkedColorValue,
                cardVal: checkedCardValuesToString
            }
        }
    }
    const fourOfKind = (sortedDeck) => {
        if (checkedSameCardsInDeck.fourInDeck) {
            return {
                val: true,
                sameCardVal: checkedSameCardsInDeck.sameCardsArray,
                cardVal: cardValues
            }
        } else {
            return false;
        }
    }

    const fullHouse = (sortedDeck) => {
        if (checkedSameCardsInDeck.fullInDeck) {
            return {
                val: true,
                cardVal: checkedCardValuesToString
            }
        } else {
            return false;
        }
    }
    const flush = (sortedDeck) => {
        if (!checkedSameColor) {
            return false;
        } else {
            return {
                val: true,
                color: checkedColorValue,
                cardVal: checkedCardValuesToString
            }
        }
    }
    const straight = (sortedDeck) => {
        let checkCards = [];
        let lowStraight = [1, 2, 3, 4, 13];
        let checkCardsLowStraight = sortedDeck.every((val, i) => val.order == lowStraight[i]);

        for (let i = 0; i < sortedDeck.length - 1; i++) {
            if (sortedDeck[i + 1].order - 1 === sortedDeck[i].order) {
                checkCards.push(true);
            } else {
                checkCards.push(false);
            }
        }
        let checkCardsValues = checkCards.every(val => val === true);

        if (checkCardsLowStraight) {
            cardValues.splice(0, 0, cardValues.pop());
            return {
                val: true,
                cardVal: checkedCardValuesToString
            }
        } else if (!checkCardsValues) {
            return false;
        } else {
            return {
                val: true,
                cardVal: checkedCardValuesToString
            }
        }
    }
    const threeOfKind = (sortedDeck) => {
        if (checkedSameCardsInDeck.threeInDeck) {
            return {
                val: true,
                sameCardVal: checkedSameCardsInDeck.sameCardsArray,
                cardVal: cardValues
            }
        } else {
            return false;
        }
    }

    const twoPairs = (sortedDeck) => {
        if (checkedSameCardsInDeck.twoPairsInDeck) {
            return {
                val: true,
                sameCardVal: checkedSameCardsInDeck.sameCardsArray,
                cardVal: cardValues
            }
        } else {
            return false;
        }
    }

    const pair = (sortedDeck) => {
        if (checkedSameCardsInDeck.pairInDeck) {
            return {
                val: true,
                sameCardVal: checkedSameCardsInDeck.sameCardsArray,
                cardVal: cardValues
            }
        } else {
            return false;
        }
    }

    const highCard = () => {
        let highestCard = cardValues[cardValues.length - 1];
        return {
            val: true,
            highestCard: highestCard,
            cardVal: cardValues
        }
    }

    const cardValuesToString = (cardValuesString) => {
        return cardValuesString.join(' ');
    }

    const checkColor = (sortedDeck) => {
        let firstColor = sortedDeck[0].color;
        let sameColor = sortedDeck.every(card => card.color === firstColor);
        return {
            sameColor: sameColor,
            firstColor: firstColor
        }
    }

    const checkNextCard = (sortedDeck) => {
        let checkCards = [];
        for (let i = 0; i < sortedDeck.length - 1; i++) {
            if (sortedDeck[i + 1].order - 1 === sortedDeck[i].order) {
                checkCards.push(true);
            } else {
                checkCards.push(false);
            }
        }
        return checkCards.every(val => val === true);
    }

    const sameCardsInDeck = (sortedDeck) => {
        let pair = 0;
        let twoPairs = 0;
        let three = 0;
        let four = 0;
        let full = 0;
        let sameCards = [];

        for (let i = 0; i < 4; i++) {
            if (i < 2 && !pair && !four && !three && sortedDeck[i].order == sortedDeck[i + 3].order) {
                four++;
                sameCards.push(cardValues.slice(i, i + 4).join(' '));
                break;
            } else if (i < 3 && !four && !three && sortedDeck[i].order == sortedDeck[i + 2].order) {
                if (pair === 1) {
                    full++;
                }
                three++;
                sameCards.push(cardValues.slice(i, i + 3).join(' '));
                i = i + 2;
            }
            else if (sortedDeck[i].order == sortedDeck[i + 1].order) {
                if (three === 1) {
                    full++;
                } else if (pair === 1) {
                    twoPairs++;
                }
                sameCards.push(cardValues.slice(i, i + 2).join(' '));
                pair++;
            }
        }
        return {
            fourInDeck: four,
            fullInDeck: full,
            threeInDeck: three,
            twoPairsInDeck: twoPairs,
            pairInDeck: pair,
            sameCardsArray: cardValuesToString(sameCards)
        }
    }
    const checkedColorValue = checkColor(sortedDeck).firstColor;
    const checkedSameColor = checkColor(sortedDeck).sameColor;
    const checkedNextCard = checkNextCard(sortedDeck);
    const checkedSameCardsInDeck = sameCardsInDeck(sortedDeck);
    const checkedCardValuesToString = cardValuesToString(cardValues);

    return {
        royalFlush: royalFlush(sortedDeck),
        straightFlush: straightFlush(sortedDeck),
        fourOfKind: fourOfKind(sortedDeck),
        fullHouse: fullHouse(sortedDeck),
        flush: flush(sortedDeck),
        straight: straight(sortedDeck),
        threeOfKind: threeOfKind(sortedDeck),
        twoPairs: twoPairs(sortedDeck),
        pair: pair(sortedDeck),
        highCard: highCard(),
        cardValuesToString: cardValuesToString(cardValues),
        checkColor: checkColor(sortedDeck),
        checkNextCard: checkNextCard(sortedDeck),
        sameCardsInDeck: sameCardsInDeck(sortedDeck)
    }
}

const checkBestCombinantion = (sortedDecks) => {
    let sortedDeck = randomCards();  // comment on for testing values below \/
    // let sortedDeck = sortedDecks; // testing values

    const combinationOfHand = combinantions(sortedDeck);
    const red = 'color: #f02424; font-weight: bold;'
    const orange = 'color: #f5a142; font-weight: bold;'
    const yellow = 'color: #bada55; font-weight: bold;'
    const blue = 'color: #42aaf5; font-weight: bold;'
    const green = 'color: #42f551; font-weight: bold;'
    const bold = 'font-weight: bold;'
    const white = 'color: #fff;'
    switch (true) {
        case combinationOfHand.royalFlush.val:
            console.log(`You have %cRoyal Flush >> ${combinationOfHand.royalFlush.cardVal} <<%c with ${combinationOfHand.royalFlush.color}`, red, white);
            break;
        case combinationOfHand.straightFlush.val:
            console.log(`You have %cStraight Flush >> ${combinationOfHand.straightFlush.cardVal} <<%c with ${combinationOfHand.straightFlush.color}`, red, white);
            break;
        case combinationOfHand.fourOfKind.val:
            console.log(`You have %cFour of a Kind >> ${combinationOfHand.fourOfKind.sameCardVal} <<%c of hand: ${combinationOfHand.fourOfKind.cardVal}`, orange, white);
            break;
        case combinationOfHand.fullHouse.val:
            console.log(`You have %cFull House >> ${combinationOfHand.fullHouse.cardVal} <<%c`, orange, white);
            break;
        case combinationOfHand.flush.val:
            console.log(`You have %cFlush >> ${combinationOfHand.flush.cardVal} <<%c with ${combinationOfHand.flush.color}`, orange, white);
            break;
        case combinationOfHand.straight.val:
            console.log(`You have %cStraight >> ${combinationOfHand.straight.cardVal} <<%c`, yellow, white);
            break;
        case combinationOfHand.threeOfKind.val:
            console.log(`You have %cThree of a Kind >> ${combinationOfHand.threeOfKind.sameCardVal} <<%c of hand: ${combinationOfHand.threeOfKind.cardVal}`, yellow, white);
            break;
        case combinationOfHand.twoPairs.val:
            console.log(`You have %cTwo Pairs >> ${combinationOfHand.twoPairs.sameCardVal} <<%c of hand: ${combinationOfHand.twoPairs.cardVal}`, blue, white);
            break;
        case combinationOfHand.pair.val:
            console.log(`You have %cPair >> ${combinationOfHand.pair.sameCardVal} <<%c of hand: ${combinationOfHand.pair.cardVal}`, green, white);
            break;
        case combinationOfHand.highCard.val:
            console.log(`You have %cHigh Card >> ${combinationOfHand.highCard.highestCard} <<%c of hand: ${combinationOfHand.highCard.cardVal}`, bold, white);
            break;

        default:
            console.log('Nie ma nic');
    }
}

// // testing values
// sortedDeck1 = [
//     {card:"10",order:9,color:"♠"},
//     {card:"J",order:10,color:"♠"},
//     {card:"Q",order:11,color:"♠"},
//     {card:"K",order:12,color:"♠"},
//     {card:"A",order:13,color:"♠"}
// ]
// sortedDeck2 = [
//     {card:"2",order:2,color:"♠"},
//     {card:"3",order:3,color:"♠"},
//     {card:"4",order:4,color:"♠"},
//     {card:"5",order:5,color:"♠"},
//     {card:"A",order:13,color:"♠"}
// ]
// sortedDeck3 = [
//     {card:"8",order:8,color:"♠"},
//     {card:"9",order:9,color:"♠"},
//     {card:"10",order:10,color:"♠"},
//     {card:"J",order:11,color:"♠"},
//     {card:"Q",order:12,color:"♠"}
// ]
// sortedDeck4 = [
//     {card:"10",order:10,color:"♦"},
//     {card:"10",order:10,color:"♥"},
//     {card:"10",order:10,color:"♠"},
//     {card:"10",order:10,color:"♦"},
//     {card:"A",order:13,color:"♦"}
// ]
// sortedDeck5 = [
//     {card:"2",order:2,color:"♦"},
//     {card:"3",order:3,color:"♥"},
//     {card:"4",order:4,color:"♠"},
//     {card:"5",order:5,color:"♦"},
//     {card:"A",order:13,color:"♦"}
// ]
// sortedDeck6 = [
//     {card:"2",order:2,color:"♠"},
//     {card:"2",order:2,color:"♠"},
//     {card:"4",order:4,color:"♠"},
//     {card:"5",order:5,color:"♠"},
//     {card:"A",order:13,color:"♠"}
// ]
// sortedDeck7 = [
//     {card:"2",order:2,color:"♠"},
//     {card:"2",order:2,color:"♠"},
//     {card:"3",order:3,color:"♠"},
//     {card:"3",order:3,color:"♠"},
//     {card:"3",order:3,color:"♠"}
// ]
// sortedDeck8 = [
//     {card:"2",order:2,color:"♠"},
//     {card:"5",order:5,color:"♦"},
//     {card:"6",order:6,color:"♦"},
//     {card:"7",order:7,color:"♠"},
//     {card:"9",order:9,color:"♠"}
// ]

// checkBestCombinantion(sortedDeck1);
// checkBestCombinantion(sortedDeck2);
// checkBestCombinantion(sortedDeck3);
// checkBestCombinantion(sortedDeck4);
// checkBestCombinantion(sortedDeck5);
// checkBestCombinantion(sortedDeck6);
// checkBestCombinantion(sortedDeck7);
// checkBestCombinantion(sortedDeck8);

// comment below \/ for test values above /\
checkBestCombinantion();
