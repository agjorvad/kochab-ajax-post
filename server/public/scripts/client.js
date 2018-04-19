console.log('client.js has been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
}

$.ajax({
    type: 'GET',
    url: '/records'
})
    .then(function (response) {
        console.log(response);
        // for (let i = 0; i < response.length; i++) {
        //     $('ul').append('<li>' + response[i].title + (' ') + response[i].year + (' ') + response[i].artist + (' ') + response[i].cost + '</li>');
        response.forEach(function (record) {
            $('#recordList').append(`<tr>
                <td>${record.title}</td>
                <td>${record.year}</td>
                <td>${record.artist}</td>
                <td>${record.cost}</td>
                </tr>`);
        })
    });