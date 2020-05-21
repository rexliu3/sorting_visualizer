export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    heapSortHelper(array, animations);
    //return animations;
    return array;

}

function heapSortHelper(mainArray, animations) {
    let n = mainArray.length;

    // Build a maxheap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(mainArray, animations, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        swap(mainArray, animations, 0, i);
        heapify(mainArray, animations, 0, i)
    }
}

function heapify(mainArray, animations, i, n) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < n && mainArray[left] > mainArray[i]) {
        max = left;
    }

    if (right < n && mainArray[right] > mainArray[max]) {
        max = right;
    }

    if (max != i) {
        swap(mainArray, animations, i, max)
        heapify(mainArray, animations, max, n)
    }
}

function swap(mainArray, animations, indexReplaced, indexReplacing) {
    let sub = 0;
    sub = mainArray[indexReplaced];
    mainArray[indexReplaced] = mainArray[indexReplacing];
    mainArray[indexReplacing] = sub;

}
