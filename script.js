const canvas = document.getElementById(
 'canvas');
const ctx = canvas.getContext('2d');
const exportButton = document
 .getElementById('exportButton');
const imageInput = document
 .getElementById('imageInput');

imageInput.addEventListener('change', (
 event) => {
 const file = event.target.files[0];
 if (!file) return;

 const img = new Image();
 img.onload = () => {
  ctx.clearRect(0, 0, canvas.width,
   canvas.height
  );
  ctx.drawImage(img, 0, 0, 32,
   32
  );
 };
 img.src = URL.createObjectURL(
  file
 );
});

exportButton.addEventListener('click',
 () => {
  const pngDataUrl = canvas.toDataURL(
   'image/png');

  const link = document.createElement(
   'a');
  link.download = 'favicon.png';
  link.href = pngDataUrl;
  link.click();
 });
