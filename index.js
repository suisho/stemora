var sameMoraGroup = [
  ["い", "ゐ"],
  ["え", "ゑ"],
  ["お", "を"],
  ["オ", "ヲ"]
]

// TODO: more simply
var suteganaGroup = [
  ["あ", "ぁ"],
  ["い", "ぃ"],
  ["う", "ぅ"],
  ["え", "ぇ"],
  ["お", "ぉ"],
  ["つ", "っ"],
  ["や", "ゃ"],
  ["ゆ", "ゅ"],
  ["よ", "ょ"],
  ["わ", "ゎ"],
  ["ア", "ァ"],
  ["イ", "ィ"],
  ["ウ", "ゥ"],
  ["エ", "ェ"],
  ["オ", "ォ"],
  ["カ", "ヵ"],
  ["ク", "ㇰ"],
  ["ケ", "ヶ"],
  ["シ", "ㇱ"],
  ["ス", "ㇲ"],
  ["ツ", "ッ"],
  ["ト", "ㇳ"],
  ["ヌ", "ㇴ"],
  ["ハ", "ㇵ"],
  ["ヒ", "ㇶ"],
  ["フ", "ㇷ"],
  ["ヘ", "ㇸ"],
  ["ホ", "ㇹ"],
  ["ム", "ㇺ"],
  ["ヤ", "ャ"],
  ["ユ", "ュ"],
  ["ヨ", "ョ"],
  ["ワ", "ヮ"],
  ["ラ", "ㇻ"],
  ["リ", "ㇼ"],
  ["ル", "ㇽ"],
  ["レ", "ㇾ"],
  ["ロ", "ㇿ"]
]

var kanaGroup = sameMoraGroup.concat(suteganaGroup)

var kanaReg = new RegExp("[" + kanaGroup.map(function(group){
  return group[1]
}).join("") + "]", "g")

// generate table
var kanaTable = {}
kanaGroup.forEach(function(kana){
  kanaTable[kana[1]] = kana[0]
})

module.exports.normalize = function(str){
  return str.replace(kanaReg, function(char){
    return kanaTable[char]
  })
}
