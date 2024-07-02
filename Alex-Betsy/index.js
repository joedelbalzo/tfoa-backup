//header
<>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500;&display=swap"
    rel="stylesheet"
  ></link>
</>;
//</link>

//footer
function warmUpServer() {
  const url = "https://yhg-assessment.onrender.com/";
  fetch(url)
    .then((response) => {
      console.log("yhg launched");
    })
    .catch((error) => {
      console.error("error launching yhg");
    });
}
document.addEventListener("DOMContentLoaded", warmUpServer);
