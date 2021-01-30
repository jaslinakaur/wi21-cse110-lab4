1. It will log the value of i -> prices.length. var i is a var declared in the same function, so that line will have access to it.

2. It will log the value of discountedPrice during the last iteration of the for loop since var is accessible even outside of the loop which it was declared in.

3. It will log the value of finalPrice after the last iteration of the loop -> it was declared earlier in the same function, so it is accessable.

4. [50, 100, 150]
   The array [100, 200, 300] is passed in as prices and 0.5 is passed in as the argument discount into the fuction.
   In the first run of the for loop, i will be 0, so discountedPrice will be evaluated using prices[0], which is 100.
   In the second iteration of the loop, i is now 1, so we are working with prices[1], which is 200.
   Once evaluated, the value is again pushed to the discounted array declared at the top.
   The 3rd run of the loop has i = 2, and uses prices[2] as 300.
   At the end of the program, the discounted array is returned with the newly added values.
   
5. It will give an error -> there is no let i declared within the scope.

6. It will give an error -> there is no let discountedPrice declared within the scope.

7. It will log the value of finalPrice after the last iteration of the loop -> finalPrice was declared earlier in the function (not in the loop) so its value is accessible on line 13.

8. [50, 100, 150]
   The function call discountPrices([100, 200, 300], .5) using let instead of var in the code will result in the same return value.
   This code would have errors in the previous few console.log lines, but if we were to ignore those, this code would work the exact same as it did previously with var instead of let.

9. It will give an error -> there is no let i declared within the full function's scope - it is only in the loop, so it won't be able to find it.

10. It will give an error -> discountedPrice was declared in the loop, so it is outide of the scope and not accessible on line 12.

11. Since finalPrice is a const, it cannot be reassigned. It throws an error within the loop on line 7.
    But, were we to remove the code in the loop (or assume all previous lines worked), then it would just return the value 0 because that is what it was originally assigned and cannot be changed.

12. The variable discounted was declared as a const empty array []. This means it cannot be reassigned.
    The code fails in the loop when we try to reassign the value of finalPrice, which is necessary to do line 8 where the value is pushed into discounted.
    So, the return line will not even be reached - there will be an error.
    
13. Write the notation:
  - a. access the value in name with: student.name;
  
  - b. access the value of Grad Year with: student["Grad Year"];
  
  - c. call the function with: student.greeting();
  
  - d. access name of Favorite Teacher with: student["Favorite Teacher"].name;
  
  - e. access first index of courseLoad with: student.courseLoad[0];
  
14. Arithmetic:
   - a. '32' -> a string value. The first operand was a string, and + can mean concatenation, so the 2 operands were just concatenated together. 
   
   - b. 1 -> - is not a string operation the way + can be. Also, this was a numeric operation, so it converted to numbers automatically.
   
   - c. 3 -> 3 is a number. When being added to a number, null automatically converts to 0.
  
   - d. '3null' -> '3' was a string, and + is a string operation, so null was just added to the end of the string.
  
   - e. 4 ->  true converts to 1 as a number and was being added to another number, 3.
   
   - f. 0 -> both false and null convert to 0 in numeric conversion.
  
   - g. "3undefined" -> "3" was a string and + adds strings together, so undefined was interpretted as a string as well.
  
   - h. NaN -> - is not a string operation, so the result cannot be interpretted as a string, and underfined is not a number either.
   
15. Comparison: 
   - a. true -> different types being compared convert to numbers 
   
   - b. false -> strings are being compared here, so according to the dictionary, 2 comes after 1, so this statement must be false.
   
   - c. true -> comparing different types makes them both numbers.
  
   - d. false -> === checks for types, and since 2 is a number and '2' is a string, it automatically returns false.
  
   - e. false ->  true is equal to the value 1, not 2
   
   - f. true -> this is type checking, and both sides are Boolean, so it returns true.
  
16. == checks for equality between the operands on either side. ===, instead checks the types of the operands it is comparing and returns true or false based on if the operands are of the same type.

17. output: 'Goodbye'
    When comparing a boolean and number, the boolean converts to a number, so the true becomes 1.
    Since 1 != 2, it moves on to the else if statement. This again checks if 2 == true, which is false, so it defaults to the else statement.

19.  Pass in modifyArray([1,2,3], doSomething) will return [6,8,10]. The for loop runs 3 times since the array passed in has 3 values. In each iteration, when it sees callback(array[i], it jumps down to the doSomething function that was given as a parameter. In the first iteration, array[0] is 1, so in the doSomething function, it adds 1 + 2, and returns back the value of 3. The 3 then goes into the function as x and is multiplied by 2, returning the value 6 and pushing it into  newArr. This is then repeated 2 more times for array[1] and array[2]. At the end, the newArr array is returned.
    
21. Output: 1 4 3 2
    It first logs 1. It takes a whole second before it logs 2, but while it is waiting, it sees the commands to log 3 and to log 4. Since 4 is just logged without any other information, it logs immediately, while for 3, it has to go through the function call, so it take a very small moment longer. 2 is printed last because it waited a full second. 
    
    
    
