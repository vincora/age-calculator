# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [https://github.com/vincora/age-calculator](https://github.com/vincora/age-calculator)
- Live Site URL: [https://vincora.github.io/age-calculator/](https://vincora.github.io/age-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS modules
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Classnames](https://www.npmjs.com/package/classnames) - JS utility for conditionally joining classNames together
- [Luxon](https://www.npmjs.com/package/luxon) - JS library for working with dates and times
- [React Hook Form](https://react-hook-form.com/) - JS library for working with forms and easy validation

### What I learned

At first I started working on JS only with useState hook from React, but soon realized that form validation is pretty tricky. That's why I used React Hook Form and Luxon libraries.

Luxon is very useful for creating Date objects and validating them. It can create a new Date object from your data in convinient format.

React hook form is handy for managing from data and also validation. Is can collect your input values and check if all your form is filled properly. Otherwise it shows an error message with text that you specified for different cases.

I've also started using rem units for font sizes. It might look complicated at first, but makes writing the mobile version much easier.
I use a free version of Frontend Mentor, so I don't have the accurate markup sizes. But I've tried to make layout look close to design as much as I could.


### Useful resources

- [React-hook-form homepage](https://react-hook-form.com/get-started)   
- [Luxon library documentation](https://moment.github.io/luxon/#/tour)


## Author

- Frontend Mentor - [@vincora](https://www.frontendmentor.io/profile/vincora)



