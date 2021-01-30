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
    But, since we are considering that all previous lines pass/don't error, then since discounted is a const, it cannot be changed, so it would still be an empty array: [] at the end.
    
13. Write the notation:
  - a.
  
  - b.
  
  - c.
  
  - d.
  
  - e.
  

14.

15.


    
    
    
    
