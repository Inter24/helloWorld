window.onload = function()
{
    const name = prompt('What is your name?');
    document.getElementById('messageField').innerText = `Hello, ${name}!`;
}
