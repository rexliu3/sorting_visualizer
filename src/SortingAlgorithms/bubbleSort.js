export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    const auxiliaryArray = array.slice();
    bubbleSortHelper(array, auxiliaryArray, animations);
    //return animations;
    return array;
}

function bubbleSortHelper(mainArray, auxiliaryArray, animations) {
    let lastUnsorted = mainArray.length - 1;
    while (isSorted(mainArray) === false) {
        for (let j = 0; j < lastUnsorted; j++) {
            // Change colors of two compared indexes
            animations.push([j, j + 1]);
            if (mainArray[j] > mainArray[j + 1]) {
                animations.push([j, j + 1]);
                swap(mainArray, auxiliaryArray, animations, j, j + 1);
                //animations.push(mainArray.slice(0), mainArray.slice(mainArray.length-1));
                //animations.push([]);
            }
        }
        lastUnsorted--;
    }
    return;
}


function isSorted(testArray) {
    for (let i = 0; i < testArray.length - 1; i++) {
        if (testArray[i] > testArray[i + 1]) {
            return false;
        }
    }
    return true;
}

function swap(mainArray, auxiliaryArray, animations, indexReplaced, indexReplacing) {
    let sub = 0;
    sub = mainArray[indexReplaced];

    // animations.push([indexReplaced, indexReplacing]);
    mainArray[indexReplaced] = mainArray[indexReplacing];
    //animations.push([indexReplacing, indexReplaced]);
    mainArray[indexReplacing] = sub;

}