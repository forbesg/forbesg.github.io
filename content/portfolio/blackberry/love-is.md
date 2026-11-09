---
title: Love Is
description: Love Calculator - A simple and fun BlackBerry 10 WebWorks App written in JavaScript
subhead: The Love Calculator
image: /images/projects/blackberry/love-is.jpg
imageAlt: The Love Calculator - Blackberry Application
category: blackberry
features:
- html5
- css3
- javascript
- bbui.js
- blackberry webworks
displayOrder: 99
featured: false
---

As I was learning JavaScript I was looking for simple problems to solve to get some
practice writing simple algorithms.

A long time ago when I was at school, kids would use a simple method to see
whether their crush on someone was reciprocal. The test would return a percentage
of how much two people loved each other.

The method is simple. Take the
names of the two people and count the instances of each letter in the word "LOVES".
When the count is complete you would be left with 5 numbers.

```
Tom "LOVES" Nicole
1, 2, 0, 1, 0
```

The next step in the process is to add each of the adjacent numbers together
which would then result in 4 numbers.

```
'1 + 2', '2 + 0', '0 + 1', '1 + 0'
3, 2, 1, 1
```

This step would then be repeated until there were only two numbers remaining. At this
point you would just join the two numbers together and that was your percentage.

```
5, 3, 2
8, 5
85%
```

This proved to be a good test and when it was complete I created a BlackBerry
WebWorks Application using the algorithm.
