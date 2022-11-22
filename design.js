/*let arr=["ahmad","jafar","mawea","ali","yaman"];

console.log(arr);

arr.push("m");
console.log(arr);
arr.unshift("m");
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr.indexOf("jafar"))
console.log(arr.includes("jafar",0));
console.log(arr.indexOf("mawea")===-1);
arr.indexOf("mawea")===-1 ? console.log("not found"):console.log(" found");
//console.log(arr.sort());
console.log(arr.sort().reverse());
console.log(arr.slice(-4,-1)); // create new array

arr.splice(1,2,"tarek","hamood");
console.log(arr);

let friends=["amhmad","hosam","hassan"];
let newfriends=["wassim","micheal"];

 let allfrinds=friends.concat(newfriends);
 
console.log(allfrinds);
console.log(allfrinds.join("*"));
console.log(allfrinds.join("*").toUpperCase());


*/

/*
my.reverse();
my.splice(0,2);
console.log(my)


my.shift();
my.pop();
let array=my.slice(zero,counter).sort();
array.pop();
console.log(array);



let a1=my[2][0].concat(my[2][1]);
console.log(a1);
let a2=my[1][2].concat(my[1][3].concat(my[1][4]).concat(my[1][5]));
console.log(a2);
console.log(a1+a2);let b2=my[3][0].concat(my[1][4]);

console.log(b2);


function sayhello(username,gender,age){
    age=age|| "unknown";
    if (gender=="male")
    console.log(`hello mr ${username} your age is ${age}`);
    else
    console.log(`hello ms ${username} your age is ${age}`);
}
sayhello("tarek","male");


function calc() {
    let sum = 0;
    for (let i = 0; i<5;i++)
    {
        sum+=i;
    }
    console.log(`the sum of numers is ${sum}`);
}
calc()


function sayhello(){
console.log("hello");
}

let sayhi=function(name){
    console.log("hi");
} 
let say = name => console.log("hi");

say();

*/

/*let names = function (...name) {
    let sum = "";
    for (let i = 0; i < name.length; i++) {
        sum += name[i];
    }
    console.log(sum);
}

let arr=[1, 2, 4, 8, 10];
function add(ele) {
return ele*ele;
}
let ob=arr.map(add);
 console.log(ob);



 let test = "a13bs2zx";

console.log(test.split("").filter(function (ele) {
    return typeof (ele) === "String" ? "" : ele*1;
}).map(function (ele) {
    return ele * ele;
}).join(" , "));
names("string", "[osama]" , "[mohamad]", "=",">","done!");


let arr=[1,2,3,4,5];
let add=arr.reduce(function(acc,current,index,array){
console.log(`the acc is ${acc}`);
console.log(`the currrent is ${current}`);
console.log(`the index of current is ${index}`);
console.log(`the arrray is ${array}`);
console.log(acc+current);
return acc+current
},20)



let move = ["E", "@", "@", "l", "z", "@"];
let go = move.filter(function (ele) {
    return !ele.startsWith("@") ? ele : "";
}).reduce(function (acc , curr) {
    return(`${acc}${curr}`)
    });

console.log(go.toUpperCase());




let mystring = "1,2,3,e,l,z,e,r,o,_w,e,b,_s,c,h,o,o,l,2,0,z";
let view = mystring.split("").filter(function (ele) {
    return isNaN(ele) && ele != "," ? ele : "";
}).map(function (ele) {
return ele.replace("_"," ")
}).join("");
console.log(view);

let obj = {
    fname: "tarek",
    lname: "sijri",
    arr1: ["4", "2", "5"],
    sayhi: function () {
        return (`hello ${this.fname} ${this.lname}`);
    },
    sub: {
        age: 20,
        eye: "blue",
        arr2: ["1", "2", "3"],
    }
};
console.log(obj.fname)
console.log(obj.lname)
console.log(obj.sayhi())
console.log(obj.sub.eye)
console.log(obj["arr1"])




let ex2 = {
    a1: "omar",
    a2: "mosallati",
    numb: 200,
    multi: function () {
        return this.exage * 2
    },

}
let ex = {
    fname: "tarek",
    lname: "sijri",
    exage: 10,
    multi: function () {
        return this.exage * 2
    },

}
let t ={

    fname: "mohamad",
    lname: "hasan",
    exage: 100,

}
 let newobj=Object.assign({},{myname: "tarek"},{mylastname:"sijri"});
 let newobj2=Object.assign({},ex);

 console.log(newobj)

 console.log(newobj2)


 let b=document.getElementsByClassName("spa");
console.log(b);
let c=document.getElementsByTagName("p");
console.log(c);

let f=document.querySelectorAll("p");
console.log(f);
console.log(document.body);
let d=document.querySelector("p").id="myid";
let j =document.getElementById("myid").innerHTML
console.log(j);


let var1=document.querySelector(".class1")
console.log(var1.getAttribute("class"));
var1.setAttribute("id","id2");
console.log(var1.getAttribute("id"));


let a=document.getElementById("idd");
console.log(a.hasAttribute("class"));
console.log(a.hasAttributes())




let mydiv= document.createElement("div");
let mytext= document.createComment("it is comment");
let mytext2= document.createTextNode("it is text");
let myvar= mydiv.appendChild(mytext);
let myvar2= mydiv.appendChild(mytext2);
document.body.appendChild(myvar);
document.body.appendChild(myvar2);


let fun=function(name){
    console.log(`"hello ffrom ${name}"`)
    console.log(count)
};
let count=setTimeout(fun,3000,"ahmmad")
let count2=setTimeout(fun,4000,"mohammad")
let var1=document.querySelector("button");
var1.onclick=function(){
    clearTimeout(count)}





    
let var1=document.querySelector("div");

let var2=setInterval(function(){
var1.innerHTML-=1

if(var1.innerHTML === "0")
{
clearInterval(var2);
}
},1000)



setTimeout(function(){
    console.log(`hello world`)
    window.open("https://www.youtube.com","_blank","width=500,height=500,top=175,left=500")
    },3000)

     window.close()



     let var1=window.open("https://www.google.com","_blank","width=500,height=500,top=175,left=500")
var2=location.href="https://youtube.com"
var1.focus()


window.onscroll=function(){
    if(window.scrollY >=5000)
    console.log(this.scrollY)
}


this.localStorage.setItem("color","silver")
console.log(localStorage)
this.localStorage.fontfamily="sans-serif"
this.localStorage['fontsize']="40px"
//document.body.style.backgroundColor=window.localStorage.getItem("color")
document.body.style.backgroundColor=window.localStorage.color
document.body.style.fontSize=this.localStorage.fontsize
document.body.style.fontFamily=this.localStorage.fontFamily
this.localStorage.removeItem("color")
this.localStorage.clear()
*/

// this.localStorage.setItem("color","red")
// this.sessionStorage.setItem("color","blue")

//+++++++++++++++++++++++++++++++++++++++++++++++

// let divs = document.querySelectorAll("ul li")
// let exp = document.querySelector(".main")

// if (window.localStorage.getItem("color")) {
//     exp.style.backgroundColor = window.localStorage.getItem("color")
//     divs.forEach((li) => {
//         li.classList.remove("active")
//     })
//    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
// }
// else {
//     console.log("no color")
// }

// divs.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         console.log(e.currentTarget.dataset.color)
//         divs.forEach((li) => {
//             li.classList.remove("active")
//         })
//         li.classList.add("active")
//         window.localStorage.setItem("color", e.currentTarget.dataset.color)
//         exp.style.backgroundColor = e.currentTarget.dataset.color
//     })
//window.localStorage.clear()

//chapter 2
// let var1 = document.querySelector(".user")
// let var2 = document.querySelector(".pass")
// function adder() {

//     if (var1.value && var2.value) {
//         window.localStorage.setItem("username", var1.value)

//         window.localStorage.setItem("password", var2.value)
//         console.log(`username is ${var1.value} and password is ${var2.value}`)
//     }
//     let last1=[window.localStorage.getItem("username")]
//     let last2=[  window.localStorage.getItem("pass")]
//     let save1=last1+var1.value
//   let save2=last2+var2.value
//     window.localStorage.setItem( last1,save1)
//     window.localStorage.setItem( last2, save2)

// function check() {
//     if (var1.value === window.localStorage.getItem("username") &&
//         var2.value === window.localStorage.getItem("pass"))
//         console.log("true inputs . old acc")
//         else {

//             console.log(" new account.. please sign up first")
//         }

//     }}
// let chosen=3;
// let myfriend=[
// {title: "osama" , age:39, avaibale:true, skills:["html","css"]},
// {title: "ahmad" , age:25, avaibale:false, skills:["python","django"]},
// {title: "sayed" , age:33, avaibale:true, skills:["php","laravel"]}

// ];

// if(chosen==1){
//    const [{title,age ,avaibale ,skills:[one,two]}] = myfriend;
//     console.log(title)
//     console.log(age)
//     if(avaibale ===true)
//     console.log("avaibale")
//     else
//     console.log("not avaibale")
//     console.log(two)
// };
// if(chosen==2){
//     const [, {title,age ,avaibale ,skills:[one,two]} ,] = myfriend;
//      console.log(title)
//      console.log(age)
//      if(avaibale ===true)
//     console.log("avaibale")
//     else
//     console.log("not avaibale")
//      console.log(two)
//  };
//  if(chosen==3){
//     const [, ,{title,age ,avaibale ,skills:[one,two]}] = myfriend;
//      console.log(title)
//      console.log(age)
//      if(avaibale ===true)
//     console.log("avaibale")
//     else
//     console.log("not avaibale")
//      console.log(two)

// function af(){
//     return Array.from(arguments)
// }
// console.log (af("1","2","3","ahmad",{name:"tarek"})
// );

// let arr=[10,20,30,40,50,"A","b"];
// arr.copyWithin(1,-2,-1)

// console.log(arr)

//  let nums=[11,12,13,14,15];

//  let range={

// min:10,
// max:20

//  };

//   let check=nums.every(function(e){
//         return e >= this.min && e <=this.max;
//      },range);

// console.log(check)

// let n1=[10,30,10,20];
// let n2=[30,20,10];
// console.log( [...n1,...n2].length)

// let var1= "hello iam tarek";
// let reg=/tarek/gi;
// console.log(var1.match(reg))

//  class parent{

//  constructor(name,age){
//  this.n=name;
// this.a=age;

// }
//  say_hello(){
//     return(`hello ${this.n} `)
// }

// }
// let obj=new parent("tarek",22);
// console.log(obj.say_hello())
// console.log(obj.n)
// console.log(obj.a)
// console.log(obj)
// console.log(parent.prototype)
// parent.prototype.say=function(){
//     return `hi man`
// }

// let myobject={
//     a:1,
//     b:2
// };
// Object.defineProperty(myobject,"c",{
//     writable:true,
//     enumerable:true,
//     configurable:true,
//     value:50
// });
// myobject.c=100;
// delete myobject.b;

// for(let i in myobject){
//    console.log(i,myobject[i])
// }
// console.log(myobject);

// let mytime=new Date();
// let mybirth=new Date("aug 17, 2001")
// console.log((mytime-mybirth) /1000/60/60/24/365)
// console.log(mytime)
// let mytime=new Date();
// mytime.setTime(0);
// console.log(mytime)
// mytime.setFullYear(2023)
// console.log(mytime)
// mytime.setMonth(10)
// console.log(mytime)

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     console.log(`hello`)
// };
// let gen=generator();
// console.log(gen);
// console.log(gen.next());
// console.log(gen.next())
// ;console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next())

// export function* generatornums() {
//   yield 1;
//   yield 2;
//   yield* [4, 5, 6];
// }
// export function* generatorletters() {
//   yield "a";
//   yield "b";
//   yield "c";
// }

// export function* generatorall() {
//   yield* generatornums();
//   yield* generatorletters();
// }
// export let gen = generatorall();

// export default function say() {
//   return `hello it is default export`;
// }

// let var1 = `{
//   "username": "tarek",
//   "pass": 1234
// }`;
// let var2 = JSON.parse(var1); //convert to javascript obj//obj
// console.log(var2);
// console.log(typeof var2);

// let var3 = JSON.stringify(var2); //convert to json obj,string
// console.log(var3);
// console.log(typeof var3);

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// req.send();
// console.log(req);

// req.onreadystatechange = function () {
//   //   if (this.readyState == 4 && this.status == 200) {
//   //     console.log(this.responseText);
//   //   }
//   console.log(req.readyState);
//   console.log(req.status);
// };

// let prom = new Promise((resolve, reject) => {
//   let con = ["ahmad", "mahmoud", "sameer", "tarek"];
//   if (con.length == 4) {
//     resolve(con);
//   } else {
//     reject(Error("not a 4"));
//   }
// })
//   .then((res) => {
//     res.length = 2;
//     return res;
//   })
//   .then((res) => {
//     res.length = 1;
//     return res;
//   })
//   .then((res) => {
//     console.log(`the choosee com is ${res} `);
//   })
//   .catch((rejected) => console.log(rejected))
//   .finally(console.log(""));

// async function getdata() {
//   return new Promise((res, rej) => {
//     let arr = ["ahmad"];
//     arr.length > 0 ? res("users found") : rej("no users found");
//   });
// }
// getdata().then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let mood = "create";
let tmp;
//console.log(title, price, taxes, ads, discount, total, count, category, submit);
function getsum() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "red";
  }
}
let datapro;
if (localStorage.product != null) {
  datapro = JSON.parse(localStorage.product);
} else {
  datapro = [];
}

//localStorage.clear();
submit.onclick = function () {
  let newpro = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };
  if (mood === "create") {
    if (newpro.count > 0) {
      for (let i = 1; i <= newpro.count; i++) {
        datapro.push(newpro);
      }
    } else {
      datapro.push(newpro);
    }
  } else {
    datapro[tmp] = newpro;
    mood = "create";
    submit.innerHTML = "create";
    count.style.display = "inline";
  }

  localStorage.setItem("product", JSON.stringify(datapro));
  console.log(datapro);
  cleardata();
  showdata();
};
//clear data
function cleardata() {
  (title.value = ""),
    (price.value = ""),
    (taxes.value = ""),
    (ads.value = ""),
    (discount.value = ""),
    (total.innerHTML = ""),
    (category.value = ""),
    (count.value = "");
}
//read
function showdata() {
  getsum();
  let table = "";
  for (let i = 1; i < datapro.length; i++) {
    table += `<tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td><button onclick="updatedata(${i})" id="update">update</button></td>
    <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
  </tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  let btndelete = document.getElementById("deleteall");

  if (datapro.length > 0) {
    btndelete.innerHTML = `<button onclick="deleteall()">deleteAll(${
      datapro.length - 1
    })</button>`;
  } else {
    btndelete.innerHTML = "";
  }
}
showdata();
//delete
function deletedata(i) {
  datapro.splice(i, 1);
  localStorage.product = JSON.stringify(datapro);
  showdata();
}
//delete all
function deleteall() {
  localStorage.clear();
  datapro.splice(0);
  showdata();
  cleardata();
}
function updatedata(i) {
  title.value = datapro[i].title;
  price.value = datapro[i].price;
  taxes.value = datapro[i].taxes;
  ads.value = datapro[i].ads;
  discount.value = datapro[i].discount;
  getsum();
  count.style.display = "none";
  category.value = datapro[i].category;
  submit.innerHTML = "update";
  mood = "update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
//search
let searchmood = "title";
function getsearchmood(id) {
  let search = document.getElementById("search");
  if (id == "searchtitle") {
    searchmood = "title";
    search.placeholder = "search by title";
  } else {
    searchmood = "category";
    search.placeholder = "search by category";
  }
  search.focus();
  search.value = "";
  showdata();
}
function searchdata(value) {
  let table = "";
  if (searchmood == "title") {
    for (let i = 0; i < datapro.length; i++) {
      if (datapro[i].title.includes(value.toLowerCase())) {
        table += `<tr>
  <td>${i}</td>
  <td>${datapro[i].title}</td>
  <td>${datapro[i].price}</td>
  <td>${datapro[i].taxes}</td>
  <td>${datapro[i].ads}</td>
  <td>${datapro[i].discount}</td>
  <td>${datapro[i].total}</td>
  <td>${datapro[i].category}</td>
  <td><button onclick="updatedata(${i})" id="update">update</button></td>
  <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
</tr>`;
      }
    }
  } else if (searchmood == "category") {
    for (let i = 0; i < datapro.length; i++) {
      if (datapro[i].category.includes(value.toLowerCase())) {
        table += `<tr>
  <td>${i}</td>
  <td>${datapro[i].title}</td>
  <td>${datapro[i].price}</td>
  <td>${datapro[i].taxes}</td>
  <td>${datapro[i].ads}</td>
  <td>${datapro[i].discount}</td>
  <td>${datapro[i].total}</td>
  <td>${datapro[i].category}</td>
  <td><button onclick="updatedata(${i})" id="update">update</button></td>
  <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
</tr>`;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
