function printChildrenRecursive(t) {
if (t.children.length === 0) {
    return
}
t.children.forEach(child => {
    console.log(child.name)
    printChildrenRecursive(child)
})
}

const tree = {
name: 'John',
children: [
    {
    name: 'Jim',
    children: []
    },
    {
    name: 'Zoe',
    children: [
        { name: 'Kyle', children: [] },
        { name: 'Sophia', children: [] }
    ]
    }
]
}

const treeMan = {
    name : "Achudhan Nair",
    children : [
        {name : "Pradeep", children : [
            {name : "Manu", children : []},
            {name : "Jai", children : []}]},
        {name : "Praveen", children : [
            {name : "Ammu", children : []}]}
    ]
}

//            Family Tree

//             Achudhan
//             /      \       
//          Pradeep Praveen
//           /   \      \
//        Manu   Jai   Ammu

printChildrenRecursive(treeMan)

// Output

// Pradeep
// Manu
// Jai
// Praveen
// Ammu