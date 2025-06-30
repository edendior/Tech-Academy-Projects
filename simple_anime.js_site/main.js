 // animation 1: text changing color
anime({
    targets: '#text',
    color: ['#2ecc71', '#e74c3c'],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 1000
});
 // animation 2: box bouncing
  anime({
    targets: '#box',
    translateY: [0, -100],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 1000
});

// animation 3: circle scaling in and out
anime({
    targets: '#circle',
    scale: [1, 1.5],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 1000
});

