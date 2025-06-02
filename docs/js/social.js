// Social Interactions
document.getElementById('likeBtn').addEventListener('click', () => {
  alert('+10 TRUY tokens awarded for like!');
});

document.getElementById('commentBtn').addEventListener('click', () => {
  const comment = prompt('Enter your comment:');
  if (comment) alert(`Comment posted: "${comment}"`);
});

document.getElementById('shareBtn').addEventListener('click', () => {
  alert('Shared to connected social networks!');
});
