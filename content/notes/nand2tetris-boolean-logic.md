---
title: "Nand2Tetris - Boolean Logic"
date: 2025-05-25
tags: ["Boolean Algebra", "Logic", "Gates", "Chips", "Algorithms"]
draft: false
---
# Boolean Logic

## Boolean Values

 - 0 (off, false, no)
 - 1 (on, true, yes)

## Boolean Operations

 - AND Operation
 - OR Operation
 - NOT Operation

**Example**:

### AND Operation

 - (X AND Y)
 - (x^y)

### Truth Table
It is a table that has all the possibilities of inputs here( x and y) and lists output of operation `(X AND Y)`

| X | Y | X AND Y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

### Boolean Expressions

 - NOT(0 OR (1 AND 1)) => NOT(0 OR 1) => NOT(1) => 0

### Boolean Functions

Functions in boolean logic are a rule, when given an input, an operation is performed in those inputs and an output is returned.

**Example**

f(x,y,z) = (x OR y) AND (x OR (NOT(z)))

### Boolean Identities
These are the laws of for boolean functions expressions that always gives equality.
#### Commutative Law
 - (x AND y) = (y AND x)
 - (x OR y) = (y OR x)

#### Associative Laws
 - (x AND (y AND z)) = ((x AND y) AND z)
 - (x OR (y OR z)) = ((x OR y) OR z)

#### Distributive Laws
 - (x AND (y OR z)) = ((x AND y) OR (x AND z))
 - (x OR (y AND z)) = ((x OR y) AND (x OR z))

#### De Morgan Law
De Morgan Law govern how `NOT` works, how they interrelate with `AND` and `OR`.

 - NOT(x AND y) = NOT(x) OR NOT(y)
 - NOT(x OR y) = NOT(x) AND NOT(y)

#### Idempotence Law
 - NOT(x) AND NOT(x) = NOT(x)

All of these given laws can be proved by listing all the possibilities in a truth table

#### Problem Statement
**NOT(NOT(x) AND NOT(x OR y))**
 - `NOT(NOT(x) AND (NOT(x) AND NOT(y)))`  -> De Morgan Law
 - `NOT((NOT(x) AND NOT(x)) AND NOT(y))`  -> Associative Law
 - `NOT(NOT(x) AND NOT(y))`               -> Idempotence Law
 - `NOT(NOT(x)) OR NOT(NOT(y))`           -> De Morgan Law
 - `x OR y`                               -> Double Negation
