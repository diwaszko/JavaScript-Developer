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
  for (let i = 0; i < 5; i++){
      randomizedId = deckKeys.length * Math.random() << 0;
      handOfCards.push(deckOfCards[deckKeys[randomizedId]]);
      deckKeys.splice(randomizedId,1)

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
  let cardValues = sortedDeck.map((val, i) => val.card + ':' + val.color.slice(0,1).toUpperCase());   

  const royalFlush = (sortedDeck) => {
      let checkCardsHight = sortedDeck.every((card, i) => card.order >= 9);
      let checkCards = [];
      let firstColor = sortedDeck[0].color;
      let checkColors = sortedDeck.every(card => card.color === firstColor);

      for (let i = 0; i < sortedDeck.length - 1; i++){
          if (sortedDeck[i].order !== sortedDeck[i+1].order){
              checkCards.push(true);
          }else{
              checkCards.push(false);
          }
      }
      let checkCardsValues = checkCards.every(val => val === true);

      if (!checkCardsHight || !checkColors || !checkCardsValues){
          return false;
      }else{
          return {
          val: true,
          color: firstColor,
          cardVal: cardValues
          }
      }
  }
  const straightFlush = (sortedDeck) => {
      let checkCards = [];
      let lowStraight = [1, 2, 3, 4, 13];
      let checkCardsLowStraight = sortedDeck.every((val, i) => val.order == lowStraight[i]);
      let firstColor = sortedDeck[0].color;
      let checkColors = sortedDeck.every(card => card.color === firstColor);

      for (let i = 0; i < sortedDeck.length - 1; i++){     
          if (sortedDeck[i+1].order - 1 === sortedDeck[i].order){
              checkCards.push(true);
          }else{
              checkCards.push(false);
          }
      }
      let checkCardsValues = checkCards.every(val => val === true);

      if (checkCardsLowStraight && checkColors){
          cardValues.splice(0, 0, cardValues.pop());
          return {
              val: true,
              color: firstColor,
              cardVal: cardValues
          }
      }else if (!checkCardsValues || !checkColors){
          return false;
      }else{
          return{
              val: true,
              color: firstColor,
              cardVal: cardValues
          }
      }
  } 
  const fourOfKind = (sortedDeck) => {
      if (sameCardsInDeck(sortedDeck).fourInDeck){
          return {
              val: true,
              sameCardVal: sameCardsInDeck(sortedDeck).sameCardsArray,
              cardVal: cardValues
          }
      }else{
          return false;
      }
  }
   
  const fullHouse = (sortedDeck) => {
      if (sameCardsInDeck(sortedDeck).fullInDeck){
          return {
              val: true,
              cardVal: cardValues
          }
      }else{
          return false;
      }
  }
  const flush = (sortedDeck) => {
      let firstColor = sortedDeck[0].color;
      let checkColors = sortedDeck.every(card => card.color === firstColor);

      if (!checkColors){
          return false;
      }else{
          return {
          val: true,
          color: firstColor,
          cardVal: cardValues
          }
      }
  }
  const straight = (sortedDeck) => {
      let checkCards = [];
      let lowStraight = [1, 2, 3, 4, 13];
      let checkCardsLowStraight = sortedDeck.every((val, i) => val.order == lowStraight[i]);

      for (let i = 0; i < sortedDeck.length - 1; i++){     
          if (sortedDeck[i+1].order - 1 === sortedDeck[i].order){
              checkCards.push(true);
          }else{
              checkCards.push(false);
          }
      }
      let checkCardsValues = checkCards.every(val => val === true);

      if (checkCardsLowStraight){
          cardValues.splice(0, 0, cardValues.pop());
          return {
              val: true,
              cardVal: cardValues
          }
      }else if (!checkCardsValues){
          return false;
      }else{
          return{
              val: true,
              cardVal: cardValues
          }
      }
  }
  const threeOfKind = (sortedDeck) => {
      if (sameCardsInDeck(sortedDeck).threeInDeck){
          return {
              val: true,
              sameCardVal: sameCardsInDeck(sortedDeck).sameCardsArray,
              cardVal: cardValues
          }
      }else{
          return false;
      }
  } 

  const twoPairs = (sortedDeck) => {
      if (sameCardsInDeck(sortedDeck).twoPairsInDeck){
          return {
              val: true,
              sameCardVal: sameCardsInDeck(sortedDeck).sameCardsArray,
              cardVal: cardValues
          }
      }else{
          return false;
      }
  } 

  const pair = (sortedDeck) => {
      if (sameCardsInDeck(sortedDeck).pairInDeck){
          return {
              val: true,
              sameCardVal: sameCardsInDeck(sortedDeck).sameCardsArray,
              cardVal: cardValues
          }
      }else{
          return false;
      }
  } 

  const highCard = () => {
      let highestCard = cardValues[cardValues.length-1];
      return {
          val: true,
          highestCard: highestCard,
          cardVal: cardValues
      }       
  }

  const sameCardsInDeck = (sortedDeck) =>{
      let pair = 0;
      let twoPairs = 0;
      let three = 0;
      let four = 0;
      let full = 0;
      let sameCards = [];

      for ( let i = 0; i < 4; i++ ) {
          if ( i < 2 && !pair && !four && !three && sortedDeck[i].order == sortedDeck[i+3].order ) {
              four++;
              sameCards.push(cardValues.slice(i, i+4));
              break;
          }else if ( i < 3 && !four && !three && sortedDeck[i].order == sortedDeck[i+2].order ) {
              if ( pair === 1 ) {
                  full++;
              }
              three++;
              sameCards.push(cardValues.slice(i, i+3));
              i = i+2;
          }
          else if ( sortedDeck[i].order == sortedDeck[i+1].order ) {
              if ( three === 1 ){
                  full++;
              }else if( pair === 1 ) {
                  twoPairs++;
              }
              sameCards.push(cardValues.slice(i, i+2));
              pair++;
          }
      }
      return {
          fourInDeck: four,
          fullInDeck: full,
          threeInDeck: three,
          twoPairsInDeck: twoPairs,
          pairInDeck: pair,
          sameCardsArray: sameCards
      }
  }
  return{
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
      sameCardsInDeck: sameCardsInDeck(sortedDeck)
  }
}

const checkBestCombinantion = (sortedDecks) => {
  let sortedDeck = randomCards();  // comment on for testing values below \/
  // let sortedDeck = sortedDecks; // testing values

  switch (true){
      case combinantions(sortedDeck).royalFlush.val:
          console.log(`You have Royal Flush >> ${combinantions(sortedDeck).royalFlush.cardVal} << with ${combinantions(sortedDeck).royalFlush.color}s`);
      break;
      case combinantions(sortedDeck).straightFlush.val:
          console.log(`You have Straight Flush >> ${combinantions(sortedDeck).straightFlush.cardVal} << with ${combinantions(sortedDeck).straightFlush.color}s`);
      break;
      case combinantions(sortedDeck).fourOfKind.val:
          console.log(`You have Four of a Kind >> ${combinantions(sortedDeck).fourOfKind.sameCardVal} << of hand: ${combinantions(sortedDeck).fourOfKind.cardVal}`);
      break;
      case combinantions(sortedDeck).fullHouse.val:
          console.log(`You have Full House >> ${combinantions(sortedDeck).fullHouse.cardVal} <<`);
      break;
      case combinantions(sortedDeck).flush.val:
          console.log(`You have Flush >> ${combinantions(sortedDeck).flush.cardVal} << with ${combinantions(sortedDeck).flush.color}s`);
      break;
      case combinantions(sortedDeck).straight.val:
          console.log(`You have Straight >> ${combinantions(sortedDeck).straight.cardVal} <<`);
      break;
      case combinantions(sortedDeck).threeOfKind.val:
          console.log(`You have Three of a Kind >> ${combinantions(sortedDeck).threeOfKind.sameCardVal} << of hand: ${combinantions(sortedDeck).threeOfKind.cardVal}`);
      break;
      case combinantions(sortedDeck).twoPairs.val:
          console.log(`You have Two Pairs >> ${combinantions(sortedDeck).twoPairs.sameCardVal} << of hand: ${combinantions(sortedDeck).twoPairs.cardVal}`);
      break;
      case combinantions(sortedDeck).pair.val:
          console.log(`You have Pair >> ${combinantions(sortedDeck).pair.sameCardVal} << of hand: ${combinantions(sortedDeck).pair.cardVal}`);
      break;
      case combinantions(sortedDeck).highCard.val:
          console.log(`You have High Card >> ${combinantions(sortedDeck).highCard.highestCard} << of hand: ${combinantions(sortedDeck).highCard.cardVal}`);
      break;

      default:
          console.log('Nie ma nic');
  }
}

// // testing values
// sortedDeck1 = [
//     {card:"10",order:9,color:"club"},
//     {card:"J",order:10,color:"club"},
//     {card:"Q",order:11,color:"club"},
//     {card:"K",order:12,color:"club"},
//     {card:"A",order:13,color:"club"}
// ]
// sortedDeck2 = [
//     {card:"2",order:2,color:"club"},
//     {card:"3",order:3,color:"club"},
//     {card:"4",order:4,color:"club"},
//     {card:"5",order:5,color:"club"},
//     {card:"A",order:13,color:"club"}
// ]
// sortedDeck3 = [
//     {card:"8",order:8,color:"club"},
//     {card:"9",order:9,color:"club"},
//     {card:"10",order:10,color:"club"},
//     {card:"J",order:11,color:"club"},
//     {card:"Q",order:12,color:"club"}
// ]
// sortedDeck4 = [
//     {card:"10",order:10,color:"diamond"},
//     {card:"10",order:10,color:"heart"},
//     {card:"10",order:10,color:"club"},
//     {card:"10",order:10,color:"spade"},
//     {card:"A",order:13,color:"diamond"}
// ]
// sortedDeck5 = [
//     {card:"2",order:2,color:"diamond"},
//     {card:"3",order:3,color:"heart"},
//     {card:"4",order:4,color:"club"},
//     {card:"5",order:5,color:"spade"},
//     {card:"A",order:13,color:"diamond"}
// ]
// sortedDeck6 = [
//     {card:"2",order:2,color:"club"},
//     {card:"2",order:2,color:"club"},
//     {card:"4",order:4,color:"club"},
//     {card:"5",order:5,color:"club"},
//     {card:"A",order:13,color:"club"}
// ]
// sortedDeck7 = [
//     {card:"2",order:2,color:"club"},
//     {card:"2",order:2,color:"club"},
//     {card:"3",order:3,color:"club"},
//     {card:"3",order:3,color:"club"},
//     {card:"3",order:3,color:"club"}
// ]
// sortedDeck8 = [
//     {card:"2",order:2,color:"club"},
//     {card:"5",order:5,color:"diamond"},
//     {card:"6",order:6,color:"spade"},
//     {card:"7",order:7,color:"club"},
//     {card:"9",order:9,color:"club"}
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
