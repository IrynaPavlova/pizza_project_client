function getFileName() {
  let file = document.getElementById('uploadeFile').value;

  file = file.replace(/\\/g, '/').split('/').pop();

  document.getElementById('fileName').innerHTML = 'Имя файла: ' + file;
}
export default getFileName;
