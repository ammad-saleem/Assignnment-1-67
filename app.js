//*******************************************CHAPTER 1**************************************************
//TASK #1

// alert("Welcome to my web");

// //TASK #2

// alert("Error Please enter a valid password");

//TASK #3

// alert("Welcome to JS land \nhappy coding");

//TASK #4

// alert("Welcome to JS land");
// alert("Happy coding!");

//TASK #5

// console.log("Hello...i can run JS through my console log");

//*******************************************CHAPTER 2***************************************************
//TASK #1

// var username;

//TASK #2

// var myname ="Ammad zaidi";

//TASK #3

// var  message = "Hello World";
// alert(message);

//TASK #4

// var biodata = "Ammad zaidi"
// var biodata = "20 years old"
// var biodata = "certified mobile application developer"
// alert(biodata);

//TASK #6

// var user = "Saleemammad";
// var name = "90@gmail.com";
// alert(user + name);

//TASK #7

// var book = "A smarter way to learn JavaScript";
// alert(book);

//TASK #8

// var mytext = "Yah! i can write html contant through Javascript";
//  document.write(mytext);

//TASK #9

// var alert1 = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
// alert(alert1);

//*******************************************CHAPTER 3***************************************************
//TASK #1

// var age =("i am 20 year old");
// alert(age);

//TASK #3

// var number1 = ("My birth year is 1999 \n data type of my decleared vairable is number");
//      document.write(number1);

//TASK #4

//  var visitor_name = "AMMAD ZAIDI"
//  var product = " ordered 5 pents"
//  var website = " on cloudy.pk"
//  document.write(visitor_name+product+website);

//*******************************************CHAPTER 4***************************************************

//TASK #1

// var variable1 = "Hello World!",
//     variable2 = "Testing...",
//     variable3 = 123;

//TASK #2

//ILLEGAL VERAIBLES ARE

// var ammad zaidi = 20;
// var ammad?zaidi = 21;
// var x y z = 22;
// var 2ammad = 23;
// var ammad#hello = 24;

//LEGAL VERIABLES ARE

// var ammad=1;
// var ammad_zaidi=2;
// var ammad,zaidi,hello =3;
// var _ammad =4;
// var ammad123 =5; 

//*******************************************CHAPTER 5***************************************************

//TASK #1

// var sum = 3+5;
// document.write(sum);

//TASK #2

// var sum = 3+5;
// document.write(sum);

// var subtraction = 3-5;
// document.write(subtraction);

// var division = 3%5;
// document.write(division);

// var multiplication = 5*3;
// document.write(multiplication);

// var num = "value of variable declaration is:";
//  var popularNumber = num + 5;
//  document.write(popularNumber);
 
//  var x = 5;
//  document.write("value after increment: ");
//  document.write("<br \> Value of x : "+ x++); // Using increment Operator
// document.write("<br \> Value of x : "+ x +""); //Incremented

//TASK #4

// var ticket = 600*5;
// document.write("the value of 5 tickets:"+ticket);

//TASK #5


//*******************************************CHAPTER 6-9***************************************************

//TASK #1
//  var x = 10;
//  document.write("The value of a: ");
//  document.write("<br \> Value of x : "+ x++); // Using increment Operator
// document.write("<br \> Value of x : "+ x +""); //Incremented
// var x = 11;
//  document.write("The value of a: ");
//  document.write("<br \> Value of x : "+ x++); // Using increment Operator
// document.write("<br \> Value of x : "+ x +""); //Incremented

//TASK #2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// --a; 
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

//TASK #3

// var name = window.prompt("Enter your name: ");
// alert("Welcome " + name);

//TASK #5

//  var no=+prompt("Enter the number of table:"); //if you not give any it take 0 as input

//  if(no>=1&&no<=100){
//    for(var i=1;i<=10;i++){
//      document.write(no+" x "+i+" = "+no*i+"<br>");
//    }
//  }    

//  else if(no==0){
//    for(var i=1;i<=10;i++){
//      document.write(5+" x "+i+" = "+5*i+"<br>");
//    }
// }

//TASK 6:

//  var total=100;
// var totalAll=300;
// var sub=[];
// var size=3;
// var marks=[];
// var sumTotal=0;

// for(var i=0;i<size;i++){
//    sub[i]=prompt("Enter Subject "+i+1)
// }
// for(var i=0;i<size;i++){
//    marks[i]=+prompt("Enter marks of subject "+i+1)
// }
// for(var i=0;i<size;i++){
//    document.write("Marks obtained in "+sub[i]+" is "+marks[i]+" and Percentage is "+((marks[i]/total)*100)+"<br>")
//    sumTotal+=marks[i];
// }
// document.write("Total Marks Obtained: "+sumTotal+"<br>")
// document.write("Percentage: "+(sumTotal/totalAll)*100) 



//***********  CHAP 9-11 **************USER INPUT & CONDITIONAL STATEMENT

//task 1:***************************************************

// var city=prompt("ENTRE A CITY NAME==========")

// if(city=="Karachi")
// {
//     document.write("Welcome TO City Of Light")
// }

//task 2:*******************************************************
// var gender=prompt("ENTRE YOUR GENDER==========")

// if(gender=="male")
// {
//     document.write("Good Morning Sir!")
// }
// else{
//     document.write("Good Morning Ma'am!")
// }

//task 3:********************************************************

// var color=prompt("ENTRE A SIGNAL COLOR==========")
// if(color=="Red")
// {
//     alert("MUST STOP")
// }
// else if(color == "Yellow")
// {
//     alert("READY TO MOVE")
// }
// else if(color =="Green")
// {
//     alert("MOVE NOW")
// }


//task 4:******************************************************

// var fuel=prompt("ENTRE A FUEL IN A CAR (in litres)")

// if(fuel<2.5)
// {
//     alert("Please refill the fuel in your car")
// }

//task 5*****************************************************:
//a)
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b)
// var b = 82;
// if (++b=== 83){
// alert("given condition for variable b is true");
// }

//c)
// var c=12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");

//     output:
// condition 2 is true


//d.
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


//e.
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


//f. 
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//output is recorded script  is run.

//task 6**********************************************:
// document.write("MARKS SHEET" + "<br>" +  "<br>")
// document.write("TOTAL MARKS:300" + "<br>" +  "<br>")

// var marks=prompt("ENTRE  YOUR OBTAIN MARKS OUT OF 300")

// var per=marks/300*100;

// document.write("OBTAIN MARKS IS:::",marks + "<br>" +  "<br>")
// if(per>=80)
// {
//     document.write("YOUR GRADE IS A-one" + "<br>")
//     document.write("Remarks-Excellent")
// }
// else if(per>=70)
// {
//     document.write("YOUR GARDE IS A" + "<br>")
//     document.write("Remarks=Good")
// }
// else if(per>=60)
// {
//     document.write("YOUR GRADE IS B" + "<br>")
//     document.write("Remarks=You need to improve")
// }
// else
// {
//     document.write("YOUR GRADE IS Fail" + "<br>" )
//     document.write("Remarks=SORRY!!")
// }

//task 7:(GUESS GAME)********************************************8

// var arr=[1,2,3,4,5,6,7,8,9,10]
// var number=prompt("ENTRE A SECRET NUMBER")  

// for(var i=0; i<=arr.length;i++)
// {
//     if(number==arr[i])
//     {
//         alert("BINGO! CORRECT ANSWER")
//     }
//     else if(++arr[i]>number )
//     {
//         alert("“Close enough to the correct answer”.")
//     }
// }

//task 8********************************************:

// var num=prompt("ENTRE A NUMBER")

// if (num%3==0)
// {
//     alert("NUMBER IS DIVISIBLE BY 3 NUMBER IS==="+ "<br>" ,num )
// }
// else{

//     alert("NUMBER IS NOT DIVISIBLE BY 3")
// }


//task 9**********************************************:

// var num=prompt("ENTRE A NUMBER!")

// if (num%2==0)
// {
//     alert("NUMBER IS EVEN"+ "<br>" ,num )
// }
// else{

//     alert("NUMBER IS ODD" + "<br>" ,num)
// }

//task 10***************************************:
// var tem=prompt("ENTRE A TEMPERATURE")

// if(tem>40)
// {
//     document.write("“It is too hot outside.”")
// }
// else if(tem>30)
// {
//     document.write("“The Weather today is Normal.”")
// }
// else if(tem>20)
// {
//     document.write("“Today’s Weather is cool.”")
// }
// else if(tem>10)
// {
//     document.write("“OMG! Today’s weather is so Cool.”")
// }

//task 11************************************************:
// var num1 = prompt("ENTRE A NUMBER 1")
// var num2 = prompt("ENTRE A NUMBER 2")
// var ope = prompt("ENTRE A SIGN OPERATION")

// if (ope == "+") {
//     var sum = (num1 +( +num2))
//     document.write("THE SUM IS =======",sum)
// }
// else if(ope=="*")
// {
//     document.write("THE MULTIPLICATION IS =======",num1*num2)
// }
// else if(ope=="%")
// {
//     document.write("THE REMAINDER IS =======",num1%num2)
// }
// else if(ope=="-")
// {
//     document.write("THE SUB IS =======",num1-num2)
// }

//***********  CHAP 12-13 **************IF....ELSE & ELSE IF STATEMENT
//TESTING SET OF CONDITIONS

//TASK 1:**************************************************


// var string=prompt("ENTRE A NUMBER OR STRING")


// if(string==65)
// {
//     alert("A LETTER IS IN UPPERCASE")
// } 
// else if(string==90)
// {
//     alert("Z LETTER IS IN UPPERCASE")
// } 
// else if(string==97)
// {
//     alert("a LETTER IS IN LOWERCASE")
// }
// else if(string==122)
// {
//     alert("z LETTER IS IN LOWERCASE")
// }

//TASK 2:**************************************************
// var num1=prompt("ENTRE INTEGER NUMBER 1")
// var num2=prompt("ENTRE INTEGER NUMBER 2")

// if(num1>num2)
// {
//     alert("NUMBER 1 IS GREATER")
// }
// else if(num2>num1){
//      alert("NUMBER 2 IS INTEGER")
// }
// else if(num1===num2)
// {
//     alert("NUMBER IS EQUAL")
// }

//TASK 3:**************************************************

// var num1=prompt("ENTRE INTEGER NUMBER 1")

// if(num1>0)
// {
//     alert("NUMBER IS POSSITIVE")
// }
// else if(num1<0)
// {
//     alert("NUMBER IS NEGATIVE")
// }

//TASK 4:**************************************************
// function isVowel(argument){

//  var text;
//  var argument = argument.toLowerCase();

//     var vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }

// // See if "A" is a vowel
// var char = "A";

// if (isVowel(char)) {
//  console.log(char + " is a vowel");
// } else {
//  console.log(char + " is not a vowel");
// }

//TASK 5:**************************************************

// var pass=abc123;

// var password=prompt("ENTRE A PASSWORD")

// if(pass===password)
// {
//  alert("“Correct! The password youentered matches the original password”.")   
// }
// else{
//     alert("Incorrect! password")
// }

//TASK 6:**************************************************

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else
// {
// greeting = "Good evening";
// alert(greeting)
// }

//TASK 7:**************************************************

// var time=prompt("ENTRE A TIME IN THIS FORMAT 1900,1200 ETC")

// if(time>=0000 && time<1200)
// {
//     alert("GOOD MORNING")
// }
// else if(time>=1200 && time<1700)
// {
//     alert("GOOD AFTERNOON")
// }
// else if(time>=1700 && time<2100)
// {
//     alert("GOOD EVENING")
// }
// else if(time>=2100 && time<=2359)
// {
//     alert("GOOD NIGHT")
// }

//***********  CHAP 14-16 **************ARRAY!!!!!!!!!!!!1

//task 1:

// var arr1=[];
// var arr2=[];
// var arr3=["cat","dog","elephant","ant"]
// var arr4=[1,2,3,4,5,6,7,8,9,10];

// //bolean array

// var anyBoxesChecked = [];
//  var numeroPerguntas = 5;     
//  for(var i=0;i<numeroPerguntas;i++)
//  {
//     anyBoxesChecked.push(false);
//  }

// //mixed array

// var arr5=[1,2,3,4,"cat","dog","elephant","ant"]


// var arr5=["SSC", "HSC", "BCS",  "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("QUALIFICATION" + "<br>" + "<br>" )
// for(var i=0;i<arr5.length;i++)
// {

//     document.write(i+1+")"+ " "+ arr5[i] + "<br>")
// }

//task NO 8:************************************************
// var name=["HASNAIN","AMMAD","ZAIDI" ]
// var score=[320,230,480]

// for(var i=0;i<=name.length;i++)
// for(var j=0;j<=score.length;j++)
// {
// arr[j]/500*100;
// document.write("score of",arr[i] + "is" , arr[j] + "percentage",arr[j] )
// }


//task NO 9:***************************************************

// var color=["red","blue","green","white","lightblue","wheat"]

// for(var i=0;i<color.length;i++)
// {
//     document.write(color[i] + "<br>" )
// }

//a)........

// var color=["red","blue","green","white","lightblue","wheat"]

// var color1=prompt("ENTRE A COLOR")

// color.unshift(color1)
// for(var i=0;i<color.length;i++)

//  {
//      document.write(color[i] + "<br>" )
// }

// b).................

// var color=["red","blue","green","white","lightblue","wheat"]

// var color1=prompt("ENTRE A COLOR")

// color.push(color1)
// for(var i=0;i<color.length;i++)

//  {
//      document.write(color[i] + "<br>" )
// }

// c)......................

// var color=["red","blue","green","white","lightblue","wheat"]


// color.unshift("black","skyblue")
// for(var i=0;i<color.length;i++)

//  {
//      document.write(color[i] + "<br>" )
// }

// d).........................
// var color=["red","blue","green","white","lightblue","wheat"]


// color.shift("red")
// for(var i=0;i<color.length;i++)
//  {
//      document.write(color[i] + "<br>" )
// }

// e)......................

// var color=["red","blue","green","white","lightblue","wheat"]


// color.pop()
// for(var i=0;i<color.length;i++)
//  {
//      document.write(color[i] + "<br>" )
// }

// f)..................................
// var color=["red","blue","green","white","lightblue","wheat"]


// color.splice(0,5 ,"black")

// for(var i=0;i<color.length;i++)
//  {
//      document.write(color[i] + "<br>" )
// }

//CHAPTER 21 TO 25:
//TASK 1:
/* var firstName=prompt("Enter your First name")
var lastName=prompt("Enter your Last name")
var fullName=firstName+" "+lastName
alert("Welcome "+fullName+" to my site") */

//TASK 2:
/* var favMobile=prompt("Enter your favourite mobile model")
document.write("My favourite phone is "+favMobile+"<br>")
document.write("Length of string "+favMobile.length) */

//TASK 3:
/* var string="pakistani"
document.write("Word is "+string+"<br>")
var i=string.indexOf("n")
document.write("Index of 'n' "+i) */

//TASK 4:
/* var str="Hello World"
document.write("Word is "+str+"<br>")
var i=str.lastIndexOf("l")   // gives the index when last time l comes
document.write("Index of 'n' "+i)  */

//TASK 5:
/* var string="pakistani"
document.write("Word is "+string+"<br>")
for(var i=0;i<string.length;i++){
    if(i===3){
        document.write("Character at index: "+string[i])
    }
} */


//TASK 6:
/* var firstName=prompt("Enter your First name")
var lastName=prompt("Enter your Last name")
alert("Welcome "+firstName.concat(" "+lastName)+" to my site") */

//TASK 7:
/* var city="Hyderabad"
document.write("Before Replacement: "+city+"<br>")
document.write("After Replacement: "+city.replace("Hyder","Islam")) */

//TASK 8:
/* var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Begore replacement: "+message+"<br>")
var msg=message.replace(/and/g,"&")      // g means globally whenever and comes it replace with &
document.write("After replacement: "+msg) */

//TASK 9:
/* var value="472"
document.write("Value:P "+value+"<br>")
document.write("Type: "+typeof(value)+"<br>")
var value2=parseInt(value);              //parseInt method for convert str to int
document.write("Value: "+value2+"<br>")
document.write("Type: "+typeof(value2)) */

//TASK 10:
/* var word=prompt("Enter any word")
document.write("Your input is "+word+"<br>")
word=word.toUpperCase();
document.write("In Capital letters "+word) */


//TASK 11:
/* var word=prompt("Enter any word")
document.write("Your input is "+word+"<br>")
word=word.toLowerCase();
word=word.charAt(0).toUpperCase()+ word.slice(1); // In charAt we can give index  
document.write("In titlecase "+word+"<br>") */ 

//TASK 12:
/* var num = 35.36;
document.write("Num: "+num+"<br>")
var str=num.toString();
var str2=str.replace(".","")
document.write("Result: "+str2) */

//TASK 13:
/* var username=prompt("Enter your username:")
for(var i=0;i<username.length;i++){
    if(username[i]==='!'||username[i]===','||username[i]==='@'||username[i]==='.'){
        alert("Please enter a valid username")
    }
} */

//TASK 14:
/* var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
 var searchArr=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
 searchArr.toLowerCase();
 var flag=0;
 for(var i=0;i<arr.length;i++){
    if(arr[i]===searchArr){
       document.write(searchArr+ " is available at index "+i +" in our bakery"+"<br>")
       flag=1;
    }
 }
 if(flag===0){
    document.write("We are sorry. "+searchArr+" is not available in our bakery")
 } */

 //TASK 15:
 /* var password=prompt("Enter your password");
 var f=0;

     if(password[0]>='0'&&password[0]<='9'){
        alert("Password should not start with number");
        f++;
        }
     else if(password.length<6){
          alert("Password should be atleast 6 characters")
          f++;
      }
       for(var i=0;i<password.length;i++){
          
        if(password[i]>='a'&&password[i]<='z'||password[i]>='A'&&password[i]<='Z'||password[i]>=0&&password[i]<=9){
         
        }
        else{
            f++;
            break;
        }
      }
    

    if(f===0){
          alert("Correct Password")
      }
      else{
          alert(" Hint : Password should contain a-z,A-Z & 0-9")
      } */

    //TASK 16:
    /* var university = "University of Karachi";
   var uni= Array.from(university);
   for(var i=0;i<uni.length;i++){
       document.write(uni[i]+"<br>")
   } */
 
   //TASK 17:
   /* var word=prompt("Enter any word")
   document.write("User input "+word+"<br>")
   for(var i=0;i<word.length;i++){
       if(i===word.length-1){
           document.write("Last Character of input "+word[i])
       }
   } */

   //TASK 18:
  /*  var text="The quick brown fox jumps over the lazy dog"
   document.write("Text: "+text+"<br>")
   var text2=text.toLowerCase()
   var count=0
   text2=text2.split(" ")
   for(var i=0;i<text2.length;i++){
       if(text2[i]==="the"){
           count++;
       }
   }
   document.write("There are "+count+" occurence's of word 'the'") */


   //CHAPTER 26 TO 30:
   //TASK 1:
 /*   var num=+prompt("Enter any positive floating point:")
   document.write("Number: "+num+"<br>")
   document.write("Round Off value: "+Math.floor(num)+"<br>")
   document.write("Floor value: "+Math.floor(num)+"<br>")
   document.write("Ceil value: "+Math.ceil(num)+"<br>") */

   //TASK 2:
   /* var num=+prompt("Enter any negative floating point:")
   document.write("Number: "+num+"<br>")
   document.write("Round Off value: "+Math.floor(num)+"<br>")
   document.write("Floor value: "+Math.floor(num)+"<br>")
   document.write("Ceil value: "+Math.ceil(num)+"<br>")   */ 

   //TASK 3:
   /* var value=-4;
   document.write("The absolute value of "+value+" is "+Math.abs(value)) */

   //TASK 4:
   /* var dice=Math.floor((Math.random() * 6) + 1);   //Return a random number between 1 and 6:
   alert("Random dice value : "+dice) */

   //TASK 5:
   /* var toss=Math.floor((Math.random() * 2) + 1);
   if(dice===1){
       alert("Heads")
   }
   else{
       alert("Tails")
   } */

   //TASK 6:
  /*  var ranNum=Math.floor((Math.random() * 100) + 1);
   alert("Random Number b/w 1 & 100 : "+ranNum) */

   //TASK 7:
  /*   var wieght=prompt("Enter your weight")
    alert("The weight of user is "+wieght+" Kilograms") */

   //TASK 8:
   /* var ranNum=Math.floor((Math.random() * 10) + 1)
   var entNum=+prompt("Guess number b/w 1 to 10:")
   if(entNum===ranNum){
       alert("Congratulation! You Guess the Correct Number")
   }
   else{
       alert("Incorrect guess")
   } */


   //CHAPTER 31 TO 34:
   //TASK 1:
  /*  var date=new Date(); //prints currnts date and time
   document.write(date) */

   //TASK 2:
  /*  var date=new Date();
   var month=date.getMonth(); //As it gives value in num from 0 ton 11
   if(month===0){
    alert("Current Month: January") 
   }
   else if(month===1){
    alert("Current Month: February") 
   }
   else if(month===2){
    alert("Current Month: March") 
   }
   else if(month===3){
    alert("Current Month: April") 
   }
   else if(month===4){
    alert("Current Month: May") 
   }
   else if(month===5){
    alert("Current Month: June") 
   }
   else if(month===6){
    alert("Current Month: July") 
   }
   else if(month===7){
    alert("Current Month: August") 
   }
   else if(month===8){
    alert("Current Month: September") 
   }
   else if(month===9){
    alert("Current Month: October") 
   }
   else if(month===10){
    alert("Current Month: November") 
   }
   else if(month===11){
    alert("Current Month: December") 
   } */

   //TASK 3:
   /* var date=new Date();
   var day=date.getDay(); //As it gives value in num from 0 ton 6
   if(day===0){
    alert("Today is: Sun") 
   }
   else if(day===1){
    alert("Today is: Mon") 
   }
   else if(day===2){
    alert("Today is: Tue") 
   }
   else if(day===3){
    alert("Today is: Wed") 
   }
   else if(day===4){
    alert("Today is: Thu") 
   }
   else if(day===5){
    alert("Today is: Fri") 
   }
   else if(day===6){
    alert("Today is: Sat") 
   } */

   //TASK 4:
   /* var date=new Date();
   var day=date.getDay();

   if(day===0||day===6){
       alert("Its Fun day")
   } */

   //TASK 5:
   /* var date=new Date();
   var month=date.getDate(); //Days of month 0 to 31

   if(month>=1&&month<=15){
       alert("First fifteen days of the month")
   }
   else{
       alert("Last days of the month")
   }
 */

 //TASK 6:
 /* var date = new Date("Dec 05, 2015 22:32:23");
 var currMills = date.getTime();
var timeInMin=currMills/60000;
document.write("Current date: "+date+"<br>")
 document.write("Elapsed millisecond since jan 1: "+currMills+"<br>")
 document.write("Elapsed minutes since jan 1: "+timeInMin)
  */

  //TASK 7:
  /* var date=new Date();
  var hour=date.getHours();
  
  if(hour>=0&&hour<=11){
      alert("Its A.M")
  }
  else{
      alert("Its P.M")
  } */

  //TASK 8:
  /* var laterDate=new Date("Dec 31, 2020 00:00:00");
  document.write("Later Date: "+laterDate) */

  //TASK 9:

 /*  var date0 = new Date(2020, 3, 24); // 3 April 20220
  var date1=new Date(); // 

  var numberOfDays = Math.ceil((date1 - date0) / 86400000); // gives num of days
  document.write(numberOfDays+" days passed since 1st Ramazan")  */



  //TASK 10:
  /* var refdate = new Date("Dec, 05, 2015, 22:50:16");
  var date1=new Date("Jan, 01, 2015, 00:00:00")

  var difference = (refdate - date1) / 1000;

document.write("On reference date "+refdate +"<br>"+difference+" had passed since beginning of 2015") */



  //TASK 11:
 /*  var date=new Date("Jun, 19, 2020, 16:14:45")
  var date2=new Date("Jun, 19, 2020, 15:14:45")
  var timeDiff=date.getHours()-date2.getHours();
  document.write("Current date"+date+"<br>")
  document.write(timeDiff+" hour ago "+date2) */

  //TASK 12:
 /*  var date = new Date();
  document.write("Current date "+date+"<br>")
date.setFullYear(date.getFullYear() - 100); //set the year first by minus with 100
document.write("100 years back it was "+date) */


//TASK 13:
/* var age=+prompt("Enter your age:")
document.write("Your age is "+age+"<br>")
var date=new Date();
date.setFullYear(date.getFullYear() - age);
document.write("Your birth year is "+date.getFullYear()); */

//TASK 14:
/* var customerName=prompt("Enter customer name")
var currMonth=prompt("Enter current month")
var numberOfUnits=+prompt("Enter no of units");
var chargesPerUnit=16
var netPayAmount=numberOfUnits*chargesPerUnit;
var grossPayAmount=netPayAmount+350;
document.write("<h1>K-Electric Bill</h1>")
document.write("Customer name: "+"<b>"+customerName+"</b>"+"<br>")
document.write("Current month: "+"<b>"+currMonth+"</b>"+"<br>")
document.write("Net Amount Payable (within Due Date): "+"<b>"+netPayAmount+"</b>"+"<br>")
document.write("Late Payment Surcharge: <b>350</b>"+"<br>")
document.write(" Gross Amount Payable (after Due Date): "+"<b>"+grossPayAmount+"</b>"+"<br>") */



//CHAPTER 35 TO 38
//TASK 1:
/* function currDate(){
    var date=new Date();
    document.write(date)
}
currDate(); */

//TASK 2:
/* function username(){
    var f_name=prompt("Enter First name")
    var l_name=prompt("Enter Last name")
    var fullName=f_name+" "+l_name
    alert("Welcome "+fullName +" to my site")
}
username(); */

//TASK 3:
/* function sum(){
    var num1=+prompt("Enter Number 1")
    var num2=+prompt("Enter Number 2")
    return (num1+num2)
}
var add=sum()
document.write("Sum is "+add) */

//TASK 4:
/* function calc(){
    var num1=+prompt("Enter 1st number:")
 var opr=prompt("Enter The Operator")
var num2=+prompt("Enter 2nd number:")
var res;

if(opr==='+'){
   res=num1+num2;
   return res;
}
else if(opr==='-'){
    res=num1-num2;
    return res;
 }
 else if(opr==='*'){
    res=num1*num2;
    return res;
 }
 else if(opr==='/'){
    res=num1/num2;
    return res;
 }
 else if(opr==='%'){
    res=num1%num2;
    return res; 
 }
}
var result=calc();
document.write("Result is : "+result) */

//TASK 5:
/* function squares(num){
    var res=num*num
    return res;
}
var result=squares(num=+prompt("Enter a number"));
document.write("Square is "+result) */

//TASK 6:
/* function factorial(num){
    if(num===0){
        return 1;
    }
    else if(num>0){
        for(var i=num-1;i>=1;i--){
            num=num*i;
        }
        return num;
    }
    else if(num<0){
        for(var i=num+1;i<=-1;i++){
            num=num*i;
        }
        if(num<0){
        return num;
        }
        else{
            return num*-1;
        }
    }
}
var res =factorial(num1=+prompt("Enter a number "))
document.write("Factorial is "+res) */

//TASK 7:
/* function count(start,end){
    if(start<=end){
      for(var i=start;i<=end;i++){
        document.write(" "+i)
    }
}
    else{
      for(var i=start;i>=end;i--){
        document.write(" "+i)
       }
}
}
count(start=+prompt("Enter the starting Number"),end=+prompt("Enter the ending number")); */

//TASK 8:
/* function calculatesquares(num){
    var res=num*num
      return res;
}
function calculatehypotenuse(base,per){  // outer inner function
      base=calculatesquares(base);
      per=calculatesquares(per);
      var hyp=base+per;
      hyp=Math.sqrt(hyp);
      return hyp
    
 }
 var res=calculatehypotenuse(base=+prompt("Enter Base:"),per=+prompt("Enter Perpendicular"))
 document.write("Hypotenise of right angle triangle is "+res) */

 //TASK 9:
/*  function area(height,width){
     var area=width*height;
     return area;
 }
 document.write("Area"+"<br>")
 document.write("Arguments as value "+area(5,6)+"<br>")
 var h=4,w=5;
 document.write("Arguments as varible "+area(h,w)+"<br>") */

 //TASK 10:
/*  function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, ''); //convert to lowercase and replace everything
                                                       //except alphanumeric character
    var reverseStr = lowRegStr.split('').reverse().join('');  //split(convert into array) then reverse and 
                                                              //again join
    if(lowRegStr===reverseStr){
    return 1;    
                }
    return 0;                                  //if rev is same as original
  } 
  var res=palindrome(str=prompt("Enter a word,phrase or sentence"));
  if(res===1){
      document.write("It is a Palindrome")
  }
  else{
    document.write("It is not a Palindrome")
  } */

  //TASK 11:
 /*  function titlCase(str){
    var arr=str.split(" "); // convert into array
 
    for(var i=0;i<arr.length;i++){
          arr[i]=arr[i].toLowerCase();       
          arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1); //first element capital then just add other
    }                                                             //elements by using slice
    arr=arr.join(" ")         //again join 
    return arr;
  }
 var res=titlCase(str=prompt("Enter any word, phrase or sentence"))
  document.write("In title case: "+res) */

  //TASK 12:
  /* function longWord(str)        //This method can shows every element if many word(longest length) exist.
 {
    var arr=str.split(" ");
    var len=arr[0].length;
    var longWord=[];
   
    for(var i=0;i<arr.length;i++){
    
       if(len<=arr[i].length){
            len=arr[i].length;
            longWord.push(arr[i]);
         }
    }  
    if(len>arr[0].length){
        longWord.shift(arr[0]); //0th element adds in longWord(array) everytime but at the end 
    }                            //if len value is greater than 0th ele length then it will delete 0th element
    longWord=longWord.join(",")
    return longWord;
 }
 var res=longWord(str=prompt("Enter any word, phrase or sentence"))
 document.write("Longest word: "+res) */

 //TASK 13:
 /* function noOfoccurence(str,char){
     var count=0;
     str=str.toLowerCase();
     char=char.toLowerCase();
     for(var i=0;i<str.length;i++){
         if(char===str[i]){
            count++;
         }
     }
     return count;
 }
 var res=noOfoccurence(str=prompt("Enter a String"),char=prompt("Enter a Letter\nCheck how many times it occurs"))
 document.write("The letter: "+char+" occurs "+res+" times") */

 //TASK 14:
 /* function calcCircumference(rad){
     var circumference=2*Math.PI*rad;
     return ("The Circumference of circle is "+circumference)
 }
function calcArea(rad){
    var area=Math.PI*rad*rad;
    return ("The area of circle is "+area)
}
var rad=prompt("Enter the radius of circle:")
document.write(calcCircumference(rad)+"<br>")
document.write(calcArea(rad)+"<br>"); */


//CHAPTER NO 38 to 42

// TASK NO.2 

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2020));
// console.log(leapyear(2016));
// console.log(leapyear(2012));

//TASK NO.3

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);


// CHAPTER NO 43 to 48

//TASK 4
// var clicks = 0;
// function onClick() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// };
// CHAPTER NO 49 to 52

//TASK 1

// function checkAddress(fieldId) {
//      var val = document.getElementById(fieldId).value;
//     if (val === "") {
//     alert("Email address required.");
//     }
// }

//TASK NO 2

// function Ammad() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }
//  *****************CHAPTER 58-67*******************
        
/* i. Get element of id “main-content” and assign them in a variable.
ii. Display all child elements of “main-content” element. */

/* var main=document.getElementById("main-content")
console.log(main.childNodes) */


//TASK 3:
/* iii.) Get all elements of class “render” and show their innerHTML
in browser*/

/*var p=document.getElementsByClassName("render")
 console.log(p[0].innerHTML)
console.log(p[1].innerHTML)
console.log(p[2].innerHTML)
console.log(p[3].innerHTML)
console.log(p[4].innerHTML) */

 
//TASK 4 & 5:
/* iv. Fill input value whose element id first-name using javascript.
v. Repeat part iv for id ”last-name” and “email”. */

/* var fname=document.getElementById("first-name")
fname.value="Ammad"

var lname=document.getElementById("last-name")
lname.value="Zaidi"

var email1=document.getElementById("email")
email1.value="Saleemammad90@gmail.com" */


//QUESTION 2:
//TASK 1:
/* var cont=document.getElementById("form-content")
console.log(cont.nodeType)      // if nodetype gives 3 its text. */


//TASK 2 & 3
/* var lname=document.getElementById("lastName")
console.log(lname.nodeType)
console.log(lname.childNodes[0].nodeType) */ //there is no child nodes of id lastName

//TASK 4:
/* var main=document.getElementById("main-content")
console.log(main.firstChild)  // I first apply minify in html then it will correct output
console.log(main.lastChild) */

//TASK 5:
/* 
var lname=document.getElementById("lastName")
console.log(lname.previousSibling)
console.log(lname.nextSibling) */


//TASK 6:
/* var email1=document.getElementById("email")
console.log(email1.parentNode)
console.log(email1.nodeType)
 */