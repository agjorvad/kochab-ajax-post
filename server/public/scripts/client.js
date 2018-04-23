console.log('client.js has been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $('#addNewSong').on('click', addNew);
    getAllSongs();
}

function getAllSongs() {
    $.ajax({
        type: 'GET',
        url: '/record'
    })
        .then(function (response) {
            console.log(response);
            $('#recordList').empty();
            response.forEach(function (record) {
                $('#recordList').append(`<tr>
                <td>${record.title}</td>
                <td>${record.artist}</td>
                <td>${record.year}</td>
                <td>${record.cost}</td>
                </tr>`);
            });
        });
    }
    function addNew() {
        const newSong = {
            title: $('#newSongTitle').val(),
            year: $('#newSongArtist').val(),
            artist: $('#newSongYear').val(),
            cost: $('#newSongCost').val()
        }
        console.log(newSong);
        $.ajax({
            method: 'POST',
            url: '/record',
            data: newSong
        })
            .then(function (response) {
                console.log(response);
                getAllSongs();
            });
    }
