const list = {
    name: "Garvit",
    standard: "XII",
    Fav_teacher: "None"
}
console.log(list.Fav_teacher);
// but above is a very long ,ethod if we have to call the value of object numerous times
// so better solution is
const {standard: kaksha} = list
console.log(kaksha);
// vv easy
// API's syntax is just as same as objects but the only diff is they do not need a variale ie you just open courly brackets and start writting and also in this you have to write keys in string ie enclosed in double quotation and also they can be enclose within array for eg [ {}, {}, {}]
