function range(start, end, step){
    return {
        [Symbol.iterator](){
            return this;
        },
        next() {
            if (start < end) {
                start = start + step;
                return { value: start, done: false};
            }
            return { done: true, value: end };
        }
    }
}

for (const n in range(1, 20, 5)){
    console.log(n);
}