// Dynamic Quiz Recursion

const contest = {
    event : 'Competition',
    children : [
        {event : 'Quiz - 1\n', children: [
            {event : 'Theme - 1\n', children : [
                {event : 'Question - 1', children :  [
                    {event : 'Who?', children : [{event : 'Bird', children : []}, {event : 'Human', children : []}, {event : 'Animal', children : []}, {event : 'Tree\n', children : []}]}
                ]}
            ]},
            {event : 'Theme - 2\n', children : [
                {event : 'Question - 1', children :  [
                    {event : 'When?', children : [{event : 'Today', children : []}, {event : 'Yesterday', children : []}, {event : 'Now', children : []}, {event : 'Tomorrow\n', children : []}]}
                ]}
            ]},
            {event : 'Theme - 3\n', children : [
                {event : 'Question - 1', children :  [
                    {event : 'How?', children : [{event : 'Flight', children : []}, {event : 'Ship', children : []}, {event : 'Car', children : []}, {event : 'Train\n', children : []}]}
                ]}
            ]},
        ]}
    ]
}

// Competition
// Quiz - 1 || Quiz - 2
// Theme - 1 | Theme - 2 | Theme - 3 || Theme - 1 | Theme - 2 | Theme - 3
// Question - 1 2 3 | Question - 1 2 3
// Qs

function printChildrenRecursive(t) {
    if (t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
        console.log(child.event)
        printChildrenRecursive(child)
    })
    }

printChildrenRecursive(contest)