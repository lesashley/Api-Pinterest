'use strict';
const Header = () => {
    const header = $('<header class="center-align"></header>');
    const titulo = $('<h3 class="red-text text-darken-2">Pokédex</h3>');
    header.append(titulo);

    return header;
}
