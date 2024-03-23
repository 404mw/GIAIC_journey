// create object for music album

function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));



// passing array to function

let magician: string[] = ["Bob", "Mark", "Alex", "David"]

function log_magician(magician: string[]) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
log_magician(magician)




// passing array to function + a string

function the_great(magician: string[]){
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " The GOAT"
    }
}
 the_great(magician)
 log_magician(magician)
