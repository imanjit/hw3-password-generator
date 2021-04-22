# hw3-password-generator
Javascript

## Elevator Pitch

Refactored a password generator code designed to generate a password for the user based on users input. 

![Image](password-generator-img.png)

## Application

When the user presses the "Generate Password" button, prompt the user to select how many characters they would like their password to be. Once they choose a character length between 8 and 128, they will be prompted on whether they would like to include:
* Uppercase letters
* Lowercase letters
* Numbers
* Special Characters

## Current Challenges

Find a way to cancel function if user clicks cancel on prompts. Currently the function keeps running if user clicks cancel, which as a result displays undefined in the password box. 
