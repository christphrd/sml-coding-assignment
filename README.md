# Currency Project
> Coding assignment made to assess how I think through problems

This project is for command line fun to generate all possible combinations for the currency of your choice adding up to the total of your choice.

In the world of the United States and their currency or in a world where anarchy has created a new system of currency.

(Feel free to be inspired by Harry Potter and its currency, too!)

Your life is only going to get better from here on out.

## Getting started

### Environment

Please install Node.js. (Consult the [guide](https://nodejs.org/en/download/package-manager/ "Installing Node.js via package manager"))

Here's an example of using Homebrew on macOS:

```shell
brew install node
```

This would install Node.js using Homebrew.

### Downloading

Make sure you have the project on your computer:

```shell
git clone https://github.com/christphrd/sml-coding-assignment.git
cd sml-coding-assignment/
```

## Features

This project can:
* Print out all the possible combinations of currency to add up to a value
* Print the total count of all the possibilities

### How to use?

#### Option 1
Type: `String`  
Default: `'default value'`

State what an argument does and how you can use it. If needed, you can provide
an example below.

Go to the Node REPL.

```bash
node
```

Then load the JavaScript file from the current working directory.
```node
.load assets/js/coinCombo.js
```

Now you can use the JavaScript function `countCombo`

Pass in an argument for the function. The argument is a comma delimited list which specifies the name of each denomination along with the number required of that denomination to reach our target sum.

Examples:

```
let str1 = "Quarter,4,Dime,10,Nickel,20,Penny,100";
let str2 = "Coin,1.5,Arrowhead,3,Button,150";
```

When the JavaScript file loads, it invokes the function with those strings.

```
countCombo(str1)
countCombo(str2)
```

#### Option 2
This is similar to option 1. It just involves using your browser and not installing Node.js.

1. Copy the absolute path of index.html
2. Open it in a browser. (Preferably Google Chrome or Mozilla Firefox)
3. Go to the Developer Console. (JavaScript Console in Chrome or Web Console in Firefox)

Now you can use the JavaScript function `countCombo`

## Author

My name is Christopher Diep. View my [website](https://christopherdiep.com/ "Christopher Diep | Software Engineer") for my information.