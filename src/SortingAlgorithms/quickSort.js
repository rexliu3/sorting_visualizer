export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1);
    //return animations;
    return array;
}

function quickSortHelper (mainArray, leftIdx, rightIdx) {
    if (leftIdx >= rightIdx) {
        return;
    }
    const pivot = mainArray[(leftIdx + rightIdx) / 2];
    const sideIdx = partition(mainArray, leftIdx, rightIdx, pivot);
    quickSortHelper(mainArray, leftIdx, sideIdx - 1);
    quickSortHelper(mainArray, sideIdx, rightIdx);

}

function partition (mainArray, leftIdx, rightIdx, pivot) {
    while (leftIdx <= rightIdx) {
        while(mainArray[leftIdx] < pivot) {
            leftIdx++;
        }

        while(mainArray[rightIdx] > pivot) {
            rightIdx--;
        }
        
        if (leftIdx <= rightIdx) {
            swap(mainArray, leftIdx, rightIdx);
            leftIdx++;
            rightIdx--;
        }
    }
    return leftIdx;
}

function swap(mainArray, leftIdx, rightIdx) {
    const sub = mainArray[leftIdx];

    mainArray[leftIdx] = mainArray[rightIdx];
    mainArray[rightIdx] = sub;
}