// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
    let properCalculation = pickUpLocation > 42 ? (pickUpLocation - 42) : (42 - pickUpLocation);
    return properCalculation;
}

// console.log(enteredvalue);
console.log(distanceFromHqInFeet(34));
// console.log(distanceTravelledInFeet(34, 28));

function distanceFromHqInFeet(pickUpLocation) {
    let properCalculation = pickUpLocation > 42 ? (pickUpLocation - 42) : (42 - pickUpLocation);
    return properCalculation * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    let properCalculation = startBlock > destinationBlock ? (startBlock - destinationBlock) * 264 : (destinationBlock - startBlock) * 264;
    return properCalculation;
}

function calculatesFarePrice(start, destination) {
    let distance = start > destination ? (start - destination) * 264 : (destination - start) * 264;

    if (distance < 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return `cannot travel that far`;
    }
}

//console.log(calculatesFarePrice(34, 24));