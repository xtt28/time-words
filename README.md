# time-words

time-words is a Node.js library that converts an absolute time like 5:30 to a phrase like "half past five".

## Installation

Install the package using npm:

```sh
npm install time-words
```

## Usage

### Importing

First, require the library in your code:
```js
const { timeToWords } = require('time-words');
```

### Converting Time to Words

Use the `timeToWords` function to convert an absolute time to a phrase:

```js
const timePhrase = timeToWords(5, 30); // 5:30
console.log(timePhrase); // Output: "half past five"
```

## API

### `timeToWords(hours, minutes)`

Converts a time to its English phrase.

- `hours` (number): The hour part of the time, e.g., 5 if the time is 5:03. Must be an integer between 0 and 24.
- `minutes` (number): The minute part of the time, e.g., 3 if the time is 5:03. Must be an integer between 0 and 59.

Returns a string representing the time in words.

Throws an error if the inputs are not valid.

## License

This project is licensed under the MIT License. For more information, see the
LICENSE file in the repository root.