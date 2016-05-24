function collect_all_even(collection) {
    var evenCollection = buildEvenCollection(collection);
    return evenCollection;
}

function buildEvenCollection(collection) {
    var evenCollection =[];
    collection.forEach(function (element) {
        if (element%2 === 0) {
            evenCollection.push(element);
        }
    });
    return evenCollection;
}

module.exports = collect_all_even;

