var fullJustify = function(words, maxWidth) {
    let result = [];
    
    let line = [];
    let lineLength = 0;
    
    for(let i = 0; i < words.length; i++) {
        let w = words[i];
        
        if(lineLength === 0 && w.length <= maxWidth) {
            line.push(w);
            lineLength += w.length;
        } else if(lineLength + w.length + 1 <= maxWidth){

            line.push(w);
            lineLength += (w.length + 1);
        } else {

            line = addMinSpace(line);
            
            let remainingSpace = maxWidth - lineLength;
            
            line = distributeSpaces(line, remainingSpace);

            let temp = line.join("")

            if(line.length === 1) temp = addRemainingSpaces(temp, remainingSpace)
            
            result.push(temp);
            
            line = [];
            lineLength = 0;
            
            line.push(w);
            lineLength += w.length;
        }
    }
    
    line = addMinSpace(line);
    
    let temp = line.join("")
    
    let remainingSpace = maxWidth - lineLength;
    
    temp = addRemainingSpaces(temp, remainingSpace)
    
    result.push(temp);

    return result;
    
    function addMinSpace(line) {
        for(let i = 0; i < line.length - 1; i++) line[i] += " ";
        return line;
    }
    
    function addRemainingSpaces(line, spaces) {
        while(spaces > 0) {
            line += " ";
            spaces--;
        }
        return line;
    }

    function distributeSpaces(arr, spaces) {
        while(spaces > 0 && arr.length > 1) {
           for(let i = 0; i < arr.length - 1; i++) {
                if(spaces <= 0) break;
                arr[i] = arr[i] + " ";
                spaces --;
            } 
        }
        return arr;
    }
};