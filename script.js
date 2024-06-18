// let text = document.getElementById('text');
// let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Define boundaries for text
    let minHeightText = 0; // Minimum scroll value for text
    let maxHeightText = 1100; // Maximum scroll value for text
    
    // Define boundaries for image
    let minHeightImage = 0; // Minimum scroll value for image
    let maxHeightImage = 300; // Maximum scroll value for image

    // Apply limits to the scroll values for text
    let marginTop = value * 2.5;
    let topLeaf = value * -1.5;
    let leftLeaf = value * 1.5;
    let leftHill5 = value * 1.5;
    // let leftHill4 = value * -1.5;
    let topHill1 = value * 1;
    hill4.style.left = value * -1.5 + 'px';


    // Apply limits to the scroll values for image
    // let topImage = value * 1.2; // Adjust as needed

    // Limit the scroll within the defined boundaries for text
    text.style.marginTop = `${Math.min(Math.max(marginTop, minHeightText), maxHeightText)}px`;
    leaf.style.top = `${Math.min(Math.max(topLeaf, minHeightText), maxHeightText)}px`;
    leaf.style.left = `${Math.min(Math.max(leftLeaf, minHeightText), maxHeightText)}px`;
    hill5.style.left = `${Math.min(Math.max(leftHill5, minHeightText), maxHeightText)}px`;
    // hill4.style.left = `${Math.min(Math.max(leftHill4, minHeightText), maxHeightText)}px`;
    hill1.style.top = `${Math.min(Math.max(topHill1, minHeightImage), maxHeightImage)}px`;

    // Limit the scroll within the defined boundaries for image
    if (value >= minHeightImage && value <= maxHeightImage) {
        leaf.style.top = `${topImage}px`;
    }
});
