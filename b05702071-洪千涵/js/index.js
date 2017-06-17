var random = function(min, max) {
    var min = $('#min').val()
    var max = $('#max').val()
    min = Number(min)
    max = Number(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

$('#random').on('click', function() {
    var n = Number($('#n').val());

    var data = [];
    for (var i = 1; i <= n; i++) {

        data.push(random(min, max));

    }


    $('div#data').empty();

    for (var i = 0; i < data.length; i++) {
        $item = $('<div>').attr('class', 'item').text(data[i]);
        $div = $('<div>').attr('class', 'col-2 4');
        $div.append($item);

        $('div#data').append($div);
    }
})