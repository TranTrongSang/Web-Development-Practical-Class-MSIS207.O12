function createArrayFilter(originalArray) {
    if (!Array.isArray(originalArray)) return null;

    let currentArray = [...originalArray];

    function applyFilter(filterCriteria, callback) {
        if (!filterCriteria) {
            return currentArray;
        }

        if (typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return applyFilter;
    }

    return applyFilter;
}

var arrayFilterer1 = createArrayFilter([1, 2, 3]);
arrayFilterer1(
    function (elem) {
        return elem !== 2;
    },
    function (currentArray) {
        console.log(this);
        console.log(currentArray);
    }
);

arrayFilterer1(function (elem) {
    return elem !== 3;
});
var currentArray = arrayFilterer1();
console.log('currentArray', currentArray);

function excludeTwos(elem) {
    return elem !== 2;
}

function excludeThrees(elem) {
    return elem !== 3;
}

var arrayFilterer2 = createArrayFilter([1, 2, 3]);
var currentArray2 = arrayFilterer2(excludeTwos)(excludeThrees)();
console.log('currentArray2', currentArray2);

var arrayFilterer3 = createArrayFilter([1, 2, 3]);
var arrayFilterer4 = createArrayFilter([4, 5, 6]);
console.log(arrayFilterer3(excludeTwos)());
console.log(arrayFilterer4(excludeThrees)());
