'use strict';
const Header = () => {
    const header = $('<header></header>');
    const row = $('<div class="row"></div>');
    const content = $('<div id="logo" class="col-sm-1 text-center"><a href="index.html"><img width="35" src="assets/img/pinterest-logo.png" alt="Pinterest" title="Pinterest" /></a></div><div class="col-sm-9 buscar"><i class="glyphicon glyphicon-search"></i><input type="text" placeholder="Buscar"></div><div class="col-sm-2 text-center"><img width="34" src="assets/img/icon-arrow.png" /><img width="34" src="assets/img/icon-profile.png" /><img width="34" src="assets/img/message.png" /></div>');

    row.append(content);
    header.append(row);
    return header;
}
