"use strict";
/*
Album: Write a function called make_album() that builds an Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/
// Function to create an album object
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Taylor Swift", "Fearless"));
console.log(make_album("The Beatles", "Abbey Road"));
console.log(make_album("Nirvana", "Nevermind"));
console.log(make_album("Adele", "25", 11));
