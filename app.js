/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
 function sum(a,b)  {
       
       return a+b;
  }
  console.log(sum(2,3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkTrue(x,y){
      let result= x+y ;
    if(x===50||y===50 || result===50){
        return true;
    } 
    else 
    {
        return (false);
    }

}
 console.log(checkTrue(50,0));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
 function remove(x,i){
    let newStr= x.replace(x.charAt(i),'');
     return newStr;
 }
 console.log(remove('tarun',1));
/*

4)
 Create a function to find the largest of three given integers.
*/
 function findLargest(a,b,c){
   if(a>b && a>c){
       return a;
   }else if(b>a && b >c ){
       return b
   }else{
       return c
   }

 } 
  console.log(findLargest(20,2,1));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  console.log(ranges(40,70));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function stringcopy (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(stringcopy("tarun", 5));

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')|| (str.substring(0, 3) == 'New')))
     
        {
            return str;
      }
  
    return '';
  }
  
  console.log(city_name("New York"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sumofthree(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sumofthree([2, 3, 4]));  
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
 function checknum(myarray){
     if(myarray[0][1]===1 || myarray[0][1]===3){
         return true;
     }else{
         return false;
     }
 }
console.log(checknum([1,5]));
/*



10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function checknum(myarray){
    if(myarray[0][1]!==1 || myarray[0][1]!==3){
        return true;
    }else{
        return false;
    }
}
console.log(checknum([1,5]));  
/*

11)

Create a function to find the longest string from a given array of strings.
*/
function longest(myarray) {
    var max = myarray[0].length;
    myarray.map(v => max = Math.max(max, v.length));
    result = myarray.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest(['T', 'a', 'run',
                                            'tarunsai','uauuau']))
  
/*

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
function angle(x) {
    if(x < 90  ) {
      return "Acute angle.";
    }
    if(x === 90) {
      return "Right angle.";
    }
    if(x < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }
  console.log(angle(90));
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
function greatest(arr) {
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
console.log(greatest([1,2,3]));
/*
14)

Create a function to get the largest even number from an array of integers.

16)
*/
function greatest(arr) {
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
console.log(greatest([1,2,3]));
/*

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
function max_even(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(max_even([90, 50, 100]));
  /*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function changecase(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    str1 = (str.substring(0, 3)).toLowerCase();
    str2 = str.substring(3, str.length);  
    return str1 + str2;
  }
  console.log(changecase("Ta"));/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
function something(x, y) 
 {
  const sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
}

console.log(something(10,80));
/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
function numtostr(x) {
	
	 

	if (x%3 == 0) {
		return "Diego";
	}
	if (x%5 == 0) {
		return  "Riccardo";
	}
	if (x%7 == 0) {
		return  "Stefano";
	}
    else{
        return x;
    }
}
	console.log(numtostr(24));
    console.log(numtostr(65));
/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
   function acronym(str){
     
    const str1 = str.split(' ');
   let res = '';
   str1.forEach(el => {
      const [char] = el;
      if(char === char.toUpperCase() && char !== char.toLowerCase()){
         res += char;
      };
   });
   return res;

   }
   console.log(acronym('Bachelor of Science'));