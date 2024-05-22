"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
/*   • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

     • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

     • Write one version of this program that runs the if block and another that runs the else block. */
alien_color = "Green";
if (alien_color == "Green") {
    console.log("You've just earned 5 points for shooting the alien.");
}
else {
    console.log("You've just earned 10 points");
} // runs if
if (alien_color == "Red") {
    console.log("You've just earned 5 points for shooting the alien.");
}
else {
    console.log("You've just earned 10 points");
} // runs else
