var kanamora = require("./index")
describe("normalize", function(){
  it("basic", function(){
    kanamora.normalize("フォンダンショコラをたべるよゐこ", "フオンダンシヨコラおたべるよいこ")
  })
})
