Bug: The program sees num1 and num2 as strings, so it is concatenating the strings instead of adding them as numbers.

Fix: typecast num1 and num2 to numbers as follows: Number(num1) + Number(num2), forcing them to be treated numerically instead of as strings.


1. file: citylots.json
2. initiator: part2.js:2
3. size: 11.7 MB
4. time: 6.62 s
5. User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36
6. Server: Apache
7. Last Mod: Tue, 26 Jan 2021 22:14:13 GMT
8. Content Type: application/json
9. Method: fetchData()