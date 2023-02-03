function addFilm() {
  var filmeFav = document.getElementById("film").value
  var nameFilm = document.getElementById("name").value
  if (
    filmeFav.endsWith("jpg") ||
    filmeFav.endsWith("png") ||
    filmeFav.endsWith("svg") ||
    filmeFav.endsWith("jpeg")
  ) {
    var link =
      "https://www.youtube.com/results?search_query=" +
      nameFilm.replaceAll(" ", "+")
    var elementFilme = document.getElementById("listaFilmes")
    elementFilme.innerHTML =
      elementFilme.innerHTML +
      "<div class='poster'><a href=" +
      link +
      "><img src=" +
      filmeFav +
      "></a><footer>" +
      nameFilm +
      "</footer>"
    document.getElementById("film").value = ""
    document.getElementById("name").value = ""
  } else {
    alert("[Error] Coloque uma imagem!!")
    document.getElementById("film").value = ""
    document.getElementById("name").value = ""
  }
}
