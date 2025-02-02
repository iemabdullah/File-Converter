
function convertFile() {
  const fileName = document.getElementById('fileName').value;
  const fileContent = document.getElementById('fileContent').value;
  const format = document.getElementById('format').value;

  if (!fileName || !fileContent) {
    alert("Please fill in all fields!");
    return;
  }

  const convertedFileName = `${fileName}.${format}`;
  const convertedFileContent = fileContent;
  
  document.getElementById('convertedFile').textContent = convertedFileName;
  document.getElementById('result').style.display = 'block';

  const blob = new Blob([convertedFileContent], { type: 'text/plain' });
  const link = document.getElementById('downloadLink');
  link.href = URL.createObjectURL(blob);
  link.download = convertedFileName;
}
