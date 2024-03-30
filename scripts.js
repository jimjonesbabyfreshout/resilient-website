// Dark mode toggle functionality
const toggleDarkModeButton = document.getElementById(‘toggleDarkMode’);
toggleDarkModeButton.addEventListener(‘click’, () => {
    document.body.classList.toggle(‘dark-mode’);
});

// Function to fetch file content from input file
async function fetchInputFileContent(fileInput) {
    try {
        const file = fileInput.files[0];
        const fileContent = await file.text();
        return fileContent;
    } catch (error) {
        console.error(‘Error reading file:’, error);
        return null;
    }
}

// Function to handle GitHub API request
async function handleGitHubAPIRequest(inputCode) {
    try {
        const response = await fetch(‘https://api.github.com/jimjonesbabyfreshout.github.io/resilient-website/’, {
            method: ‘POST’,
            headers: {
                ‘Content-Type’: ‘application/json’
            },
            body: JSON.stringify({ code: inputCode })
        });

        if (response.ok) {
            const decodedFile = await response.text();
            // Handle decoded file
            console.log(‘Decoded file:’, decodedFile);
        } else {
            throw new Error(‘Failed to fetch data’);
        }
    } catch (error) {
        console.error(‘Error:’, error);
    }
}

// Event listener for file input change
const fileInput = document.getElementById(‘fileInput’);
fileInput.addEventListener(‘change’, async () => {
    try {
        const inputCode = await fetchInputFileContent(fileInput);
        if (inputCode) {
            await handleGitHubAPIRequest(inputCode);
        }
    } catch (error) {
        console.error(‘Error:’, error);
    }
});
