
const createHandler = () => {
    $("button.create").prop("disabled", true);
    let createForm = $('<div class="create_form">')
        .append('<input type="text" class="new_title" placeholder="Title">')
        .append('<input type="text" class="new_genre" placeholder="Genre">')
        .append('<input type="text" class="new_platform" placeholder="Platform">')
        .append('<input type="text" class="new_releaseYear" placeholder="Release Year">')
        .append('<input type="text" class="new_rating" placeholder="Rating">')
        .append('<button class="save_new">Save</button>');
    $(".access").after(createForm);

    $(".save_new").on("click", function () {
        let newGame = {
            title: $(".new_title").val(),
            genre: $(".new_genre").val(),
            platform: $(".new_platform").val(),
            releaseYear: $(".new_releaseYear").val(),
            rating: $(".new_rating").val(),
            image: "pics/default.jpg"
        };
        games.push(newGame);
        displayGames();
    });
};

const updateHandler = (index) => {
    let game = games[index];
    let updateForm = $('<div class="update_form">')
        .append(`<input type="text" class="update_title" value="${game.title}">`)
        .append(`<input type="text" class="update_genre" value="${game.genre}">`)
        .append(`<input type="text" class="update_platform" value="${game.platform}">`)
        .append(`<input type="text" class="update_releaseYear" value="${game.releaseYear}">`)
        .append(`<input type="text" class="update_rating" value="${game.rating}">`)
        .append(`<input type="text" class="update_image" value="${game.image}">`)
        .append('<button class="save_update">Save Update</button>');
    $(".access").after(updateForm);

    $(".save_update").on("click", function () {
        game.title = $(".update_title").val();
        game.genre = $(".update_genre").val();
        game.platform = $(".update_platform").val();
        game.releaseYear = $(".update_releaseYear").val();
        game.rating = $(".update_rating").val();
        game.image = $(".update_image").val();
        displayGames();
    });
};

const removeHandler = (index) => {
    games.splice(index, 1);
    displayGames();
};

const displayGames = () => {
    $(".games").empty();
    games.forEach((game, index) => {
        let card = $(`
        <div class="game_card">
            <img src="${game.image}" alt="${game.title}" width="100">
            <h3>${game.title}</h3>
            <p>Genre: ${game.genre}</p>
            <p>Platform: ${game.platform}</p>
            <p>Released: ${game.releaseYear}</p>
            <p>Rating: ${game.rating}</p>
            <div>
                <button onclick="updateHandler(${index})">Update</button>
                <button onclick="removeHandler(${index})">Remove</button>
            </div>
        </div>
        `);
        $(".games").append(card);
    });
};

$(document).ready(function() {
    displayGames();
    $(".create").on("click", createHandler);
});
    