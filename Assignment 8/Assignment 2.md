//HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Animation</title>
  <style>
    img {
      width: 200px;
      margin: 20px;
    }
  </style>
</head>
<body>
  <img id="image1" src="image1.jpg" alt="Image 1">
  <img id="image2" src="image2.jpg" alt="Image 2">
  <img id="image3" src="image3.jpg" alt="Image 3">

  <script src="script.js"></script>
</body>
</html>

//JS

const animation = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(1.5)' }
];

const animationConfig = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

// Function to animate an image and return a Promise
function animateImage(imageId) {
  const image = document.querySelector(`#${imageId}`);
  const animationObject = image.animate(animation, animationConfig);

  return animationObject.finished; // Returns a Promise
}

// Animate images sequentially using Promises
animateImage('image1')
  .then(() => animateImage('image2'))
  .then(() => animateImage('image3'))
  .catch((error) => console.error('Animation failed:', error));
