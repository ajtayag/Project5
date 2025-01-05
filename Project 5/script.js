window.addEventListener("load", event => {
  const firstButton = document.getElementById('firstButton');
  const secondButton = document.getElementById('secondButton');
  const thirdButton = document.getElementById('thirdButton');
  firstButton.addEventListener("click", fetchFirstButton);
  secondButton.addEventListener("click", fetechSecondButton);

  function fetchFirstButton() {
    const url = 'https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php';
    const firstButton = document.getElementById('firstButton');
    firstButton.disabled = true;

    fetch(url)
      .then(response => response.text())
      .then(text => {
        createH1Element(text +  ' 000907201');
   
      })

  }

  function createH1Element(text) {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    h1.style.textAlign = 'center';
    const container = document.getElementById('firstTask');
    container.appendChild(h1);
  }

  function fetechSecondButton() {
    const theme = document.getElementById('themeSelect').value;
    console.log(theme);
    const url = `https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=${theme}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayData(data);
      })

  }

  function displayData(arr) {
    let contentRow = document.getElementById("mainContent");
    contentRow.innerHTML = '';
    let divWidth = 100 / arr.length;

    arr.forEach(item => {
      let div = document.createElement('div');
      div.classList.add('content-div');
      div.style.width = `${divWidth}%`;

      let h2 = document.createElement('h2');
      h2.innerText = item.series;
      div.appendChild(h2);

      let img = document.createElement('img');
      img.src = item.url;
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.classList.add('img-fluid');
      div.appendChild(img);

      let p = document.createElement('p');
      p.innerText = item.name;
      div.appendChild(p);

      contentRow.appendChild(div);
    });
  }

  function fetchPostData() {
    const theme = document.getElementById('themeSelect').value;
    const url = 'https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php';
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `choice=${encodeURIComponent(theme)}`
    })
    .then(response => response.json())
    .then(data => {
        buildTable(data);
        displayCopyrightNotice(theme);
    })

}

function buildTable(data){
  const table = document.createElement('div');
}

});
