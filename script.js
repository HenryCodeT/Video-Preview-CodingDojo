console.log("page loaded...");
function over(event) {
    console.log("event over",event);
    console.log(event.play());
    event.play()
}
function out(event) {
    console.log("event out",event);
    event.pause()
}