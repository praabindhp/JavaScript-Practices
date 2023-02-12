/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
function minimumFuelCost(roads, seats, map = [[]], ans = 0) {
    for (let [a, b] of roads) {
        (map[a] = map[a] || []).push(b), (map[b] = map[b] || []).push(a)
    }

    function dfs(i = 0, n, c = 1) {
        map[i].forEach(j => c += j != n && dfs(j, i))
        return (ans += i && Math.ceil(c / seats)), c
    }

    return dfs(), ans
}