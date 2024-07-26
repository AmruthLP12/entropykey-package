# EntropyKey

EntropyKey is a tool that generates unique tokens using the camera feed for randomness. This makes it great for creating passwords or other secure identifiers.

## Installation

To install the EntropyKey package, use npm:
```bash
npm install entropykey
```

## Project Structure

```txt
your-project/
├── index.html
├── style.css
├── script.js
├── entropykey.js
├── node_modules/
├── package.json
└── .gitignore
```


## Usage

To start using EntropyKey, you need to include the HTML, CSS, and JavaScript files in your project. Here is an example setup:


## HTML
Create an `index.html` file and include the necessary references to the EntropyKey package files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EntropyKey</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-body text-center">
                <h1 class="card-title text-primary">EntropyKey</h1>
                <video id="video" autoplay class="d-none"></video>
                <button id="generateTokenBtn" class="btn btn-primary mt-3">Generate Token</button>
                <div id="tokenContainer" class="mt-3 d-none">
                    <div class="input-group">
                        <input type="text" id="tokenOutput" class="form-control" readonly>
                        <div class="input-group-append">
                            <button id="copyIcon" class="btn btn-outline-secondary" title="Copy Token">
                                <i class="bi bi-clipboard"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="description mt-4">
                    <h2 class="text-primary">How It Works</h2>
                    <p>This tool generates a unique token by using the camera on your device. The randomness in the video feed helps create a secure and unpredictable token. This makes it great for creating passwords or other secure identifiers.</p>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js" type="module"></script>
</body>
</html>


```


## CSS

Create a `style.css` file in your project directory and use the following content:

```css
body {
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;
}

.container {
    max-width: 600px;
}

.card {
    border-radius: 8px;
}

.card-title {
    margin-bottom: 20px;
}

#generateTokenBtn {
    font-size: 16px;
}

#tokenContainer {
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-group {
    width: 100%;
}

#tokenOutput {
    font-size: 16px;
}

#copyIcon {
    cursor: pointer;
}

.description {
    text-align: left;
}

.description h2 {
    margin-bottom: 15px;
}

```
## JavaScript

Create a `script.js` file in your project directory with the following content:

```javascript
import generateTokenFromVideo from './entropykey.js';

document.getElementById('generateTokenBtn').addEventListener('click', async () => {
    const tokenLength = 16; // Change this to your desired token length
    const token = await generateTokenFromVideo(tokenLength);
    document.getElementById('tokenOutput').value = token;
    document.getElementById('tokenContainer').classList.remove('d-none');
});

document.getElementById('copyIcon').addEventListener('click', () => {
    const tokenOutput = document.getElementById('tokenOutput');
    tokenOutput.select();
    document.execCommand('copy');
    alert('Token copied to clipboard');
});


```

## Additional File

Create an `entropykey.js` file in the root of your project with the following content to serve as a bridge to import the module correctly:

```javascript
// entropykey.js
export { default } from './node_modules/entropykey/script.js';

```


## Explanation

1. HTML Setup: The HTML file sets up the basic structure of the application, including the button to generate the token and a container to display the token.

2. CSS Styling: The CSS file provides styles for the HTML elements, ensuring a consistent and visually appealing design.

3. JavaScript Functionality:

* Token Generation: The JavaScript code accesses the user's webcam, captures a frame, and uses the pixel data to generate a random token.
* Event Listeners: Event listeners are set up to handle button clicks for generating and copying the token.
## Example

After installing the package, create an index.html file in your project directory, and copy the provided HTML code into it. Ensure you have the necessary CSS and JS files referenced correctly.

```javascript


import generateTokenFromVideo from './entropykey.js';

document.getElementById('generateTokenBtn').addEventListener('click', async () => {
    const tokenLength = 16; // Change this to your desired token length
    const token = await generateTokenFromVideo(tokenLength);
    document.getElementById('tokenOutput').value = token;
    document.getElementById('tokenContainer').classList.remove('d-none');
});

document.getElementById('copyIcon').addEventListener('click', () => {
    const tokenOutput = document.getElementById('tokenOutput');
    tokenOutput.select();
    document.execCommand('copy');
    alert('Token copied to clipboard');
});


```


## Contribution

If you would like to contribute to EntropyKey, please fork the repository and submit a pull request. We appreciate any contributions that can improve the functionality or usability of this tool.
## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)
 License.



## Repository

You can find the repository for this project [here](https://github.com/AmruthLP12/entropykey-package).


## Contact

For any questions or support, please open an issue in the repository or contact the author at amruthlp12@gmail.com.