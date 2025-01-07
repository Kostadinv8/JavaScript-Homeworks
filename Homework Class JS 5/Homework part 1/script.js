
let animal = {
    name: prompt("what is the name of your dog"),
    kind: "Dog",
    speak: function () {
        alert(this.name + " says hello!");
    }
}
animal.speak();
