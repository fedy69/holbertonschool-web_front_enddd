function createElement(data) {
    const paragraph = document.createElement("p");
    const text = document.createTextNode(data);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
    }
    
    function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xhr.onload = function() {
    if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const page = response.query.pages;
    const extract = page[Object.keys(page)[0]].extract;
    callback(extract);
    }
    };
    xhr.send();
    }
    
    queryWikipedia(createElement);