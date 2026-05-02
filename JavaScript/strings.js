 const name = "Garvit"
 const Surname = "Jain"
 console.log(name + Surname);
//  but this is an old method and is not preferred in todays world 

// the preffered syntax is
// console.log(`my name is ${name} and my surname is ${Surname}`);

const Seriesname = new String('Dexter-Resurrection-Season-2')

// console.log(Seriesname.toUpperCase());
// console.log(Seriesname.length)
// console.log(Seriesname.charAt(3));
// console.log(Seriesname.indexOf('r'));
const Newname = Seriesname.substring(0,7)
// console.log(Newname);
const Anothername = Seriesname.slice(-19,7)
// console.log(Anothername);
// slice accepts negative value but substring do not and if there is negative value it treats it as zero
const NewSubName = "      Hello, World!        "
// console.log(NewSubName);
// console.log(NewSubName.trim());
// trim only removes unneccessary whitespaces and on new line characters that would make the code look clean

const Subname = "Garvit Jain 17 Years Old"
  Sub = Subname.replace('17', '18')
//   console.log(Sub);
//   console.log(Subname.includes('Jain'))
  console.log(Seriesname.split('-'));
  