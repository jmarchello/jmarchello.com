---
title: 'A Successful Model for Replacing Redux with React Context'
date: ''
draft: true
---
# A Successful Model for Replacing Redux with React Context

One of the questions I ask candidates when trying to hire a React developer is what they typically use for state management. So far, every single person I've asked has responded that they use redux. This makes perfect sense, seeing as how it is difficult to find a course about react that does not portray redux as a "must have" tool. I remember when I believed this as well, but the landscape has changed and frankly, I don't think we need redux anymore, period. One of the main reasons I believe this is because of the Context API that comes with React out of box.

### This is not a Context tutorial

My primary goal with this article is not provide yet another tutorial on the Context API, but rather to present a method for using it that I personally find enjoyabl to work with, and hope you find it useful as well. As such, If you are unfamiliar with how Context works, I highly recommend you read the official documentation [here](https://reactjs.org/docs/context.html).

## Key Benefits of Redux

Typically, there two main reasons I've reached for redux in the past: Centralized state, and avoiding "prop drilling" (passing props through several layers of components).

