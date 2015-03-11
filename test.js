var stemora = require("./index")
var assert = require("assert")
describe("normalize", function(){
  it("basic", function(){
    assert.equal(
      stemora.normalize("フォンダンショコラをたべるよゐこ"),
     "フオンダンシヨコラおたべるよいこ"
    )
  })
})
