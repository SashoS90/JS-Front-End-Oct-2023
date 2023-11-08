// *** Pascal-Case Splitter ***
// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split
// this string by every word in it.
// Print them joined by comma and space.


function pascalCaseSplitter(text) {
    let regex = /[A-Z][a-z]*/g;
    let result = text.match(regex)
    console.log(result.join(', '))
  }
  
  
  pascalCaseSplitter('SplitMeIfYouCanHaHaYouCanOrYouCan')
  pascalCaseSplitter('AZ')