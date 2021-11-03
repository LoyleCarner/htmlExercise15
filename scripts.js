const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
      {
          'href': 'dog.jpg',
          'type': 'image',
          'title': 'My Title',
          'description': 'Example',
      },
      {
          'href': 'dog.jpg',
          'type': 'image',
          'title': 'My Title',
          'description': 'Example',
      },
      {
          'href': 'dog.jpg',
          'type': 'image',
          'title': 'My Title',
          'description': 'Example',
      },
  ],
});

const triggerCollection = document.getElementsByClassName('glightbox3');

console.log(triggerCollection);

for(let triggerNode of triggerCollection){
    console.log(triggerNode);

}