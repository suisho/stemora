
```
var stemora = require("./index")
describe("normalize", function(){
  it("basic", function(){
    stemora.normalize("フォンダンショコラをたべるよゐこ", "フオンダンシヨコラおたべるよいこ")
  })
})
```