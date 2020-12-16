window.onload = () => {
    const scene = document.querySelector('a-scene');
    const icon = document.querySelector('a-image');

    //
    //
    // document
    //   .querySelector(".say-hi-button")
    //   .addEventListener("click", function () {
    //     // here you can change also a-scene or a-entity properties, like
    //     // changing your 3D model source, size, position and so on
    //     // or you can just open links, trigger actions...
    //     alert("Hi there!");
    //   });
    const clickListener = function () {
            alert('Here!');

            // // after click, we are adding a label with the name of the place
            // const label = document.createElement('span');
            // const container = document.createElement('div');
            // container.setAttribute('id', 'place-label');
            // label.innerText = 'Talk to the mask.';
            // container.appendChild(label);
            // document.body.appendChild(container);
            //
            // setTimeout(() => {
            //     // that will disappear after less than 2 seconds
            //     container.parentElement.removeChild(container);
            // }, 1500);
         }
    icon.addEventListener('click', clickListener);
    scene.appendChild(icon);

};

// window.onload = function () {
//   document
//     .querySelector(".say-hi-button")
//     .addEventListener("click", function () {
//       // here you can change also a-scene or a-entity properties, like
//       // changing your 3D model source, size, position and so on
//       // or you can just open links, trigger actions...
//       alert("Hi there!");
//     });
// };
