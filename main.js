// const str = `
// 010-1234-5678.
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// hxyp
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// // 생성자 방식
// // const regexp = new RegExp('the', 'gi')
// // 리터럴 방식
// // const regexp = /the/gi
// // console.log(str.match(regexp))
// // console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA'))
// // str = str.replace(regexp, 'AAA')
// // console.log(str)
// // console.log(str.match(/\.$/gim))
// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))
// console.log(str.match(/h..p/g))
// console.log(str.match(/fox|dog/g))
// console.log(str.match(/https?/g))
// console.log(str.match(/\b\w{2,3}\b/g))
// console.log(str.match(/[fox]/g))
// console.log(str.match(/[가-힣]{1,}/gm))
// console.log(str.match(/\w/g))
// console.log(str.match(/\bf\w{1,}\b/g))
// console.log(str.match(/\d{1,}/g))
// console.log(str.match(/\s/g))

// const h = `  the hello  world   !

// `
// console.log(h.replace(/\s/g, ''))

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?<=@)/g)
)




