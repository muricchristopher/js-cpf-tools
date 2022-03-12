Array.prototype.insert = function(value, position){
    let b = this.splice(position)
    this.push(value);
    for (let i = 0; i < b.length; i++) {
        
        this.push(b[i])
        
    }
    return this
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}