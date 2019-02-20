// let polaroidsList = document.getElementsByClassName("polaroids-list")[0].children;
// console.log(document.querySelectorAll(".polaroid"));
let arrayOfPolaroids = document.querySelectorAll(".polaroid");
let arrayTransformationClass = ["traY", "rotateL", "rotateR"];
// [...polaroidsList].forEach(row => {
//     arrayOfPolaroids.push(...row.children);
// });
arrayOfPolaroids.forEach(polaroid => {
    let number = Math.floor((Math.random() * (arrayTransformationClass.length + 1)));
    if (number < arrayTransformationClass.length) {
        polaroid.classList.add(arrayTransformationClass[number]);
    }
})
for (let i=0; i<arrayOfPolaroids.length; i++) {
    (function (i) {
        setTimeout(function () {
            arrayOfPolaroids[i].classList.add("animation");
        }, 600 * i);
    })(i);
}