document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("cursive-text");
  const text = "Hello, World!"; // Customize this with the desired text

  let index = 0;

  function type() {
    if (index < text.length) {
      const letter = text.charAt(index);
      const strokes = getStrokesForLetter(letter);
      animateStrokes(strokes, textElement);
      index++;
    }
  }

  function getStrokesForLetter(letter) {
    // Define the individual strokes for each letter
    switch (letter) {
      case "H":
        return ["&#92;", "&#8207;|"];
      case "i":
        return ["&#8207;|", "."];
      case "e":
        return ["&#95;", "&#92;", "&#47;", "&#8207;|"];
      case "l":
        return ["&#8207;|"];
      case "o":
        return ["&#111;"];
      case "W":
        return ["&#92;", "&#95;", "&#95;", "&#95;", "&#47;", "&#8207;|"];
      case "r":
        return ["&#47;", "&#8207;|"];
      case "d":
        return ["&#92;", "&#111;"];
      case "!":
        return ["!"];
      default:
        return [];
    }
  }

  function animateStrokes(strokes, element) {
    let i = 0;
    const intervalId = setInterval(function() {
      if (i >= strokes.length) {
        clearInterval(intervalId);
        type();
        return;
      }
      element.innerHTML += strokes[i];
      i++;
    }, 300);
  }

  type();
});