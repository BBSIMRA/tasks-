function findCommonIds(list1: number[], list2: number[]): number[] {
    return list1.filter(id => list2.includes(id));
}
const list1: number[] = [101, 102, 103, 104, 105];
const list2: number[] = [103, 104, 105, 106, 107];

console.log(findCommonIds(list1, list2));