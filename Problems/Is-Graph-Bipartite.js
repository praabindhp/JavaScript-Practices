/**
 * @param {number[][]} graph
 * @return {boolean}
 */

let solve = (src, graph, vis) => {
    let q = new Queue();
    q.enqueue(src);
    vis[src] = 0;

    while(!q.isEmpty())
    {
        let node = q.front();
        q.pop();

        for(let i=0; i<graph[node].length; i++)
        {
            let en = graph[node][i];

            if(vis[en] != -1 && vis[en] == vis[node])
                return false;
            else if(vis[en] == -1)
            {
                // vis[en] = !vis[node];
                vis[en] = vis[node] == 0 ? 1 : 0;
                q.push(en);
            }
        }
    }

    return true;
}

var isBipartite = function(graph) {
    let n = graph.length;
    let vis = new Array(n);
    vis.fill(-1);

    for(let i=0; i<n; i++)
    {
        if(vis[i] == -1)
        {
            let rs = solve(i, graph, vis);
            if(rs == false)
            {
                return false;
            }
        }
    }

    return true;
};