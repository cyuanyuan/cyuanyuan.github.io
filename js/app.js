var text = "aaa azx aaa aaa azc az\
x"
var myName = "zx"
var hits = []
for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var z = i; z < i + myName.length; z++) {
            hits.push(text[z])
        }
    }

}
console.log(hits)