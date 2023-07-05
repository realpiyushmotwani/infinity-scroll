const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

const count = 10;
const apiKey = "RKKvmmzQwhD4Pus_E118pNp9eLr2HgD37VgDsKPe4C0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attribute)
{
    for(const key in attribute)
    {
        element.setAttribute(key,attribute[key])
    }
}
// create element s for links and photos , add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    //create link tag to link to unsplash
    const item = document.createElement('a');
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item,{
        href:photo.links.html,
        target: "_blank"


    })

    const img = document.createElement('img');
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img,{
        src:photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description

    })

    item.appendChild(img);
    imageContainer.append(item);
  });
}

// get photos from unsplash API
async function getPhotos() {
  try {
    const resp = await fetch(apiUrl);
    photosArray = await resp.json();
    displayPhotos();
    console.log(photosArray);
  } catch (err) {}
}

// on load
getPhotos();
