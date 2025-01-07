# MongoDB $toDouble Error Handling in $expr

This repository demonstrates a common error encountered when using the `$toDouble` operator within the `$expr` operator in MongoDB aggregation pipelines.  The issue arises when attempting to convert a field to a double, but the field is either missing or contains a non-numeric value. This results in an error instead of the expected behavior.

The `bug.js` file shows the erroneous query. The `bugSolution.js` file demonstrates a corrected approach that handles missing or non-numeric values more gracefully.

## Setup

1. Install Node.js and MongoDB.
2. Clone this repository.
3. Run the MongoDB shell and create a sample collection.
4. Execute the code snippets to observe the behavior of the bug and its solution.

## How to run the code

The provided code samples are designed to run directly in the MongoDB shell.

## Solution

The best way to fix this issue is by using a conditional operator such as `$ifNull` and `$type` to check for the existence and type of 'price' field before conversion.
