function makeDeque (values) {
    var array = values.slice();
    var myDeque = {
        //array: values.slice(), //this is object property as the array, if you can get to the object, you can get to property
        top: top,
        print: printArray,
        push: push,
        pop: pop,
        unshift: unshift,
        shift: shift,
        cut: cut
    };
    function printArray() {
        console.log(array);
    }
    function top () {
        return array[array.length - 1];
    }
    function push (val) { //because push is now in same scope as array, it can refer to array.
        array.push(val);
    }
    function pop() {
        return array.pop();
    }
    function unshift(val) {
        return array.unshift(val)
    }
    function shift() {
        return array.shift();
    }
    function cut(offset) {
        if (!offset) {
            if (array.length % 2 !== 0) {
                var newSecondHalfOdd = array.slice(0, ((array.length - 1)/2) + 1);
                var newFirstHalfOdd = array.slice((((array.length - 1)/2) + 1), array.length);
                return newFirstHalfOdd.concat(newSecondHalfOdd);
            }
            if (array.length % 2 !== 0) {
                var newSecondHalf = array.slice(0, (array.length/2)+1);
                var newFirstHalf = array.slice((array.length/2), array.length);
                return newFirstHalf.concat(newSecondHalf);
            }
        }
        if (offset) {
            var fullLength = array.length;
            var newFirstHalfNormOffset = array.slice((Math.floor(fullLength/ 2) + offset), fullLength);
            var newSecondHalfNormOffset = array.slice(0, Math.floor(fullLength / 2) + offset);
            console.log("first half:",newFirstHalfNormOffset);
            console.log("second half:",newSecondHalfNormOffset);
            return newFirstHalfNormOffset.concat(newSecondHalfNormOffset);
        }
    }
    return myDeque;
}

deque1 = makeDeque([1,2,3,4]);

deque2 = makeDeque([1,2,3,4,5,6]);