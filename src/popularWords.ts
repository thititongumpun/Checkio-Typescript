export const popularWords = (text: string, words: string[]) => {
    const str = text.toLowerCase().replace(/\n/g, ' ').split(' ');
    const dic: any = {};
    for( let i of words ){
        dic[i] = str.filter(x => x == i).length;
        console.log(`${i}: ${dic[i]}`)
    }
    return dic
}