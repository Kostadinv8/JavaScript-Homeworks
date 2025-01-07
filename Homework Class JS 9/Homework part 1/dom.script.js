$( document ).ready(function() {
    $("#btnGreeting").on('click', () => {
    const name = $("#txtName")[0].value;
    $("#greetingMessage").text(`Hello there ${name}!`);
    });
});