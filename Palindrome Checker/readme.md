# Palindrome Checker
![image](https://github.com/Milave-kun/JavaScript-Algorithms-and-Data-Structures/assets/125982535/fdf5c3e6-c018-49e6-addb-aecb3e4380c8)

## Build a Palindrome Checker
A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.

> [!NOTE]
> You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

### Objective: Build an app that is functionally similar to https://palindrome-checker.freecodecamp.rocks

User Stories:
1. You should have an input element with an id of "text-input"
2. You should have a button element with an id of "check-btn"
3. You should have a div, span or p element with an id of "result"
4. When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value"
5. When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome"
6. When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"
7. When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome"
8. When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome"
9. When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"
10. When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome"
11. When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome"
12. When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"
13. When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"
14. When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome"
15. When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome"
16. When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /-\ :) 0-0 is a palindrome"
17. When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text "five|\_/|four is not a palindrome"

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

> [!IMPORTANT]
> Tests.

- [x] You should have an input element with an id of "text-input".
- [x] You should have a button element with an id of "check-btn".
- [x] You should have a div, span, or p element with an id of result.
- [x] When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value".
- [x] When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome".
- [x] When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome".
- [x] When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome".
- [x] When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome".
- [x] When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome".
- [x] When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome".
- [x] When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome".
- [x] When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome".
- [x] When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome".
- [x] When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome".
- [x] When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome".
- [x] When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /-\ :) 0-0 is a palindrome".
- [x] When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text "five|\_/|four is not a palindrome".
- [x] When the #text-input element contains an alphanumeric palindrome, the #result element should correctly identify it as a palindrome.
- [x] When the #text-input element contains a random sequence of alphanumeric characters that is not a palindrome, the #result element should say it is not a palindrome.
