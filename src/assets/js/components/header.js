'use strict';
const Header = () => {
  const header = $('<header class="header"></header>');
  const row = $('<div class="row"></div>');
  const topHeader = $('<div class="col-xs-12 header__top"></div>');
  const logo = $('<div id="logo" class="col-sm-1 text-center"><a href="index.html"><img width="35" src="assets/img/pinterest-logo.png" alt="Pinterest" title="Pinterest" /></a></div>');
  const search = $('<div class="col-sm-9 header__top--buscar"><i class="glyphicon glyphicon-search"></i><input type="text" placeholder="Buscar"></div>');
  const icons = $('<div class="col-sm-2 text-center"><img width="34" src="assets/img/icon-arrow.png" /><img width="34" src="assets/img/icon-profile.png" /><img width="34" src="assets/img/message.png" /></div>');
  const belowHeader = $('<div class="col-xs-12 header__below"><div class ="col-xs-5"><i class="glyphicon glyphicon-share header__below--icon"></i></div><div class="col-xs-2"></div><div class="col-xs-5"><button class="btn header__below--seguir">Seguir tablero</button></div></div>');

  topHeader.append(logo);
  topHeader.append(search);
  topHeader.append(icons);
  row.append(topHeader);
  row.append(belowHeader);
  header.append(row);

  return header;
}
