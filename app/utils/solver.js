const words = JSON.parse(window.require('fs').readFileSync('./assets/data.json').toString());

export default (text) => {
    if(text){
        const hashedText = text.toLowerCase().split('').sort().join('');
        return words[hashedText] || [];
    }
    return [];
}