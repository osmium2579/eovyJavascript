const eovyInfo= {
    name: "Eovy",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovie: ["Green mile", "Old Boy", "Violet evergarden"],
    favFood:[
        {
            name: "kimchi",
            fatty: false
        },
        {
            name: "Cheese burger",
            fatty: true
        }
    ]
}

console.log(eovyInfo.favFood[0].fatty);