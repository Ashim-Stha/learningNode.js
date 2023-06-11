const arr = [
  {
    text: "string",
    num: 4,
  },
  {
    text: "string1",
    num: 3,
  },
];

function getarr() {
  setTimeout(() => {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
      output += `<li>${arr[i].text}</li>`;
    }
    console.log(output);
  }, 1000);
}

getarr();
