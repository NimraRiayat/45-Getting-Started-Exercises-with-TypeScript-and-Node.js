/*Album: Write a function called make_album() that builds a Object describing a music album. The function should
take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show that
Objects are storing the album information correctly.*/
function make_album(artist, album, num_of_tracks) {
    var music_album = {
        artist_name: artist,
        album_title: album,
    };
    if (num_of_tracks !== undefined) {
        music_album.num_of_tracks = num_of_tracks;
    }
    console.log(music_album);
}
make_album("Chet", "Chet Atkins");
make_album("Bille", "Bille Joe");
make_album("Bette", "Bette Midler");
make_album("Arlo", "Arlo Guthier", "11");
