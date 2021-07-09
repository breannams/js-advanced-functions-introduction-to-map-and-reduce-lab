// Your code here
function mapToNegativize(sourceArray){
   return  sourceArray.map(arr => arr * -1)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(arr => arr)
}

function mapToDouble(sourceArray){
    return sourceArray.map(arr => arr * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(arr => arr ** 2)
}



function reduceToTotal(sourceArray, startingPoint = 0){
    const reduce = function(accumulator, element){return accumulator + element }
    return sourceArray.reduce(reduce, startingPoint)
}

function reduceToAllTrue(sourceArray){
    const reduce = function(accumulator, element){
        if(!!accumulator === true && !!element === true){
        return true;
    }
        else{
            return false;
        }
        }
        return sourceArray.reduce(reduce,true)
}

function reduceToAnyTrue(sourceArray){
    const reduce = function(accumulator, element){
        if (accumulator === true){
            return true;
        }
        else {
            return !!element
        }
    }
    return sourceArray.reduce(reduce, false)
}