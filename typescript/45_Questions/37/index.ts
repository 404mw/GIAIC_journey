/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt2(
    size: string = "large",
    message: string = "I love TypeScript",
){
    console.log(`Make a ${size} sized shirt with a message "${message}" printed on it`);
}
make_shirt2("medium");