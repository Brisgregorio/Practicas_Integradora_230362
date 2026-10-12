/* Práctica 06 · catálogo de pantallas y navegación. Datos y servicios de ejemplo. */
const titles = [
  {key:'stranger',name:'Stranger Things',tag:'UNA AVENTURA EXTRAÑA',poster:'/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',backdrop:'/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',tone:'#742b4c',meta:'2016 · 4 temporadas · 16+'},
  {key:'wednesday',name:'Wednesday',tag:'ALGO EXTRAORDINARIO',poster:'/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',backdrop:'/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',tone:'#44304e',meta:'2022 · 2 temporadas · 13+'},
  {key:'squid',name:'El juego del calamar',tag:'¿HASTA DÓNDE LLEGARÍAS?',poster:'/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',backdrop:'/2meX1nMdScFOoV4370rqHWKmXhY.jpg',tone:'#8d2035',meta:'2021 · 2 temporadas · 16+'},
  {key:'crown',name:'The Crown',tag:'EL PODER TIENE UN PRECIO',poster:'/1M876KPjulVwppEpldhdc8V4o68.jpg',backdrop:'/1M876KPjulVwppEpldhdc8V4o68.jpg',tone:'#9a7441',meta:'2016 · 6 temporadas · 16+'},
  {key:'onepiece',name:'One Piece',tag:'ZARPA HACIA LO DESCONOCIDO',poster:'/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg',backdrop:'/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg',tone:'#256a83',meta:'2023 · 1 temporada · 13+'},
  {key:'bridgerton',name:'Bridgerton',tag:'SECRETOS DE LA TEMPORADA',poster:'/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg',backdrop:'/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg',tone:'#57415d',meta:'2020 · 3 temporadas · 16+'},
  {key:'dark',name:'Dark',tag:'TODO ESTÁ CONECTADO',poster:'/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg',backdrop:'/3lBDg3i6nn5R2NKFCI9wK5p8Gz.jpg',tone:'#26333a',meta:'2017 · 3 temporadas · 16+'},
  {key:'lupin',name:'Lupin',tag:'EL ARTE DEL ESCAPE',poster:'/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg',backdrop:'/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',tone:'#68533c',meta:'2021 · 3 partes · 13+'}
];
const screens = [
 {id:'S01',name:'Splash Screen',role:'user',desc:'Pantalla de entrada minimalista con la marca y una transición hacia la bienvenida.',x:58,y:142,kind:'splash'},
 {id:'S02',name:'Bienvenida',role:'user',desc:'Presentación cinematográfica con acceso para comenzar o entrar a una cuenta existente.',x:250,y:142,kind:'welcome'},
 {id:'S03',name:'Selección de acceso',role:'both',desc:'Decisión académica para entrar como suscriptor o acceder al flujo administrativo ficticio.',x:442,y:142,kind:'access'},
 {id:'S04',name:'Inicio de sesión',role:'user',desc:'Acceso simulado de suscriptor con correo, contraseña, recuperación y alta de cuenta.',x:634,y:142,kind:'login'},
 {id:'S05',name:'Registro',role:'user',desc:'Formulario de registro de muestra con indicaciones de validación y acceso existente.',x:634,y:290,kind:'register'},
 {id:'S06',name:'Recuperar contraseña',role:'user',desc:'Captura del correo para solicitar instrucciones de recuperación simuladas.',x:826,y:142,kind:'recover'},
 {id:'S07',name:'Confirmación de recuperación',role:'user',desc:'Estado de éxito informativo y retorno al inicio de sesión.',x:1018,y:142,kind:'recoveryDone'},
 {id:'S08',name:'Selección de perfil',role:'user',desc:'Elección de un perfil ficticio antes de entrar a la pantalla principal.',x:1210,y:142,kind:'profiles'},
 {id:'S09',name:'Inicio / Catálogo',role:'user',desc:'Catálogo de streaming con hero, carruseles de carteles, accesos y navegación inferior.',x:1402,y:142,kind:'home'},
 {id:'S10',name:'Categorías',role:'user',desc:'Géneros seleccionables y rejilla de contenidos con barra inferior.',x:1402,y:414,kind:'categories'},
 {id:'S11',name:'Búsqueda',role:'user',desc:'Búsqueda de títulos con campo editable, recientes y sugerencias con carteles.',x:1210,y:414,kind:'search'},
 {id:'S12',name:'Resultados de búsqueda',role:'user',desc:'Lista visual de resultados con títulos, metadatos y breves descripciones.',x:1018,y:414,kind:'results'},
 {id:'S13',name:'Detalle de título',role:'user',desc:'Ficha cinematográfica con portada, sinopsis, metadatos, reparto y acción Mi lista.',x:826,y:414,kind:'detail'},
 {id:'S14',name:'Reproductor',role:'user',desc:'Vista de reproducción simulada con pausa, avance, progreso, audio y subtítulos.',x:634,y:414,kind:'player'},
 {id:'S15',name:'Mi lista',role:'user',desc:'Colección personal simulada con opciones de reproducción y retirada de títulos.',x:1402,y:614,kind:'mylist'},
 {id:'S16',name:'Cuenta y configuración',role:'user',desc:'Preferencias de perfil, reproducción, idioma y privacidad con acceso a la salida.',x:1210,y:614,kind:'account'},
 {id:'S17',name:'Confirmar cierre de sesión',role:'user',desc:'Confirma el cierre de la sesión o permite cancelarlo y volver a la cuenta.',x:1018,y:614,kind:'logout'},
 {id:'S18',name:'Acceso administrativo',role:'admin',desc:'Inicio de sesión demostrativo del rol académico de administración de contenido.',x:58,y:908,kind:'adminLogin'},
 {id:'S19',name:'Dashboard administrativo',role:'admin',desc:'Resumen de títulos publicados, borradores y accesos rápidos de gestión.',x:278,y:908,kind:'dashboard'},
 {id:'S20',name:'Administración del catálogo',role:'admin',desc:'Catálogo administrativo de ejemplo con búsqueda, filtros, estado y acciones.',x:498,y:908,kind:'adminCatalog'},
 {id:'S21',name:'Agregar contenido',role:'admin',desc:'Formulario de contenido nuevo con metadatos, portada de muestra, estado y guardado.',x:718,y:908,kind:'addContent'},
 {id:'S22',name:'Editar contenido',role:'admin',desc:'Formulario precargado para ajustar un título de muestra y guardar cambios.',x:938,y:908,kind:'editContent'},
 {id:'S23',name:'Confirmar publicación',role:'admin',desc:'Confirma publicar o despublicar el título seleccionado, o cancela la acción.',x:1158,y:908,kind:'publishConfirm'},
 {id:'S24',name:'Confirmación de cambios',role:'admin',desc:'Resultado de guardado simulado con resumen y retorno al catálogo administrativo.',x:1378,y:1035,kind:'saved'}
];
const edges = [
 ['S01','S02','Continuar'],['S02','S03','Comenzar'],['S02','S04','Ya tengo cuenta'],
 ['S03','S04','Iniciar sesión'],['S03','S05','Crear cuenta'],['S03','S18','Administrador académico'],
 ['S04','S08','Acceso correcto'],['S04','S04','Credenciales incorrectas'],['S04','S06','Olvidé mi contraseña'],['S04','S05','Crear cuenta'],
 ['S05','S08','Registro exitoso'],['S05','S05','Validar campos'],['S05','S04','Ya tengo cuenta'],
 ['S06','S07','Enviar instrucciones'],['S06','S04','Regresar'],['S07','S04','Volver a iniciar sesión'],
 ['S08','S09','Elegir perfil'],['S09','S10','Categorías'],['S09','S11','Buscar'],['S09','S15','Mi lista'],['S09','S16','Cuenta'],
 ['S10','S13','Abrir título'],['S10','S09','Inicio'],['S11','S12','Buscar título'],['S11','S09','Inicio'],['S12','S13','Seleccionar resultado'],['S12','S11','Cambiar búsqueda'],
 ['S13','S14','Reproducir'],['S13','S15','Agregar / quitar de Mi lista'],['S13','S09','Volver al inicio'],['S14','S14','Pausar / reanudar'],['S14','S13','Salir del reproductor'],
 ['S15','S13','Abrir título'],['S15','S09','Inicio'],['S16','S17','Cerrar sesión'],['S16','S09','Inicio'],['S17','S04','Confirmar salida'],['S17','S16','Cancelar'],
 ['S18','S19','Acceso correcto'],['S18','S18','Credenciales incorrectas'],['S18','S03','Volver al inicio'],['S19','S20','Administrar catálogo'],['S19','S18','Cerrar sesión'],
 ['S20','S21','Agregar contenido'],['S20','S22','Editar título'],['S20','S23','Publicar / despublicar'],['S20','S19','Dashboard'],
 ['S21','S24','Guardar borrador'],['S21','S24','Publicar nuevo título'],['S22','S24','Guardar cambios'],['S22','S20','Cancelar'],
 ['S23','S24','Confirmar acción'],['S23','S20','Cancelar'],['S24','S20','Volver al catálogo'],['S24','S19','Continuar administrando']
].map(([from,to,label])=>({from,to,label}));
const byId=Object.fromEntries(screens.map(screen=>[screen.id,screen]));
const artwork=(path,size='w500')=>`https://image.tmdb.org/t/p/${size}${path}`;
let selectedId='S01',activeFilter='all',playerPaused=false,activeCategory='Todo',lightboxOpen=false;
let savedTitles=['stranger','crown','squid'];
const gallery=document.querySelector('#sketch-gallery');

function posterCard(title,options={}){
 const classes=['mock-poster',options.className||''].filter(Boolean).join(' ');
 const img=title.poster?`<img src="${artwork(title.poster)}" alt="Cartel de ${title.name}" loading="lazy">`:'';
 return `<div class="${classes}" style="--poster-tone:${title.tone||'#333'}" ${options.go?'data-go="'+options.go+'" role="button" tabindex="0"':''}>${img}<span><b>${title.name}</b><small>${title.tag||'SERIE DE MUESTRA'}</small></span></div>`;
}
function artPanel(title,path,kind='preview-image'){
 return `<div class="${kind} artwork" style="--poster-tone:${title.tone}"><img src="${artwork(path,'w780')}" alt="Imagen de ${title.name}" loading="lazy"><span>${title.name}</span></div>`;
}
function button(label,target,kind='mock-button',extra=''){
 return `<button class="${kind}" type="button" data-go="${target}" ${extra}>${label}</button>`;
}
function mockHeader(admin=false,action=''){
 return `<header class="mock-header"><span><b class="mock-brand ${admin?'admin-brand':''}">NETFLIX</b>${admin?'<b class="mock-admin-label">ADMIN · DEMO</b>':''}</span>${action?`<span class="mock-header-action">${action}</span>`:'<span class="mock-header-action">⌕　⋮</span>'}</header>`;
}
function mockNav(current='home'){
 const items=[['home','⌂','Inicio','S09'],['categories','▦','Categorías','S10'],['search','⌕','Buscar','S11'],['mylist','▣','Mi lista','S15'],['account','●','Cuenta','S16']];
 return `<nav class="mock-nav" aria-label="Navegación de la aplicación">${items.map(([id,icon,label,target])=>`<button class="${current===id?'active':''}" data-go="${target}" aria-label="${label}"><span class="nav-icon">${icon}</span>${label}</button>`).join('')}</nav>`;
}
function posterRow(list=titles.slice(0,5),go='S13'){
 return `<div class="poster-row">${list.map(title=>posterCard(title,{go})).join('')}</div>`;
}
function titleList(list,withActions=false){
 return `<div class="poster-list">${list.map(t=>`<div class="title-row">${posterCard(t,{go:'S13'})}<div><b>${t.name}</b><p>${t.meta}</p><button class="mock-link" data-go="S13">▶ Reproducir</button>${withActions?` <button class="mock-link" data-remove-title="${t.key}">Quitar</button>`:''}</div></div>`).join('')}</div>`;
}
function mockInput(label,placeholder,type='text',value=''){
 return `<label class="mock-field-label">${label}<input class="mock-input" type="${type}" placeholder="${placeholder}" ${value?`value="${value}"`:''}></label>`;
}
function bottomActions(screen){
 const outgoing=edges.filter(edge=>edge.from===screen.id);
 if(!outgoing.length)return '';
 return `<section class="mock-body flow-action-area"><p class="mock-eyebrow">NAVEGACIÓN DE LA DEMOSTRACIÓN</p>${outgoing.map(edge=>button(`${edge.label} <span aria-hidden="true">→</span>`,edge.to,'mock-button small '+(edge.label.toLowerCase().includes('cancelar')||edge.label.toLowerCase().includes('regresar')?'outline':''))).join('')}</section>`;
}
function screenMarkup(screen){
 const bodyClass='mock-body';let markup='';const first=titles[0],second=titles[1],third=titles[2],fourth=titles[3];
 switch(screen.kind){
  case 'splash':
   markup=`<div class="splash-screen"><span class="splash-logo">NETFLIX</span><small>UNA HISTORIA COMIENZA</small>${button('Entrar al recorrido','S02','mock-button small')}</div>`;break;
  case 'welcome':
   markup=`<div class="welcome-screen">${mockHeader(false,'Ayuda')}<div class="welcome-art artwork" style="--poster-tone:#402133"><img src="${artwork(first.backdrop,'w780')}" alt="Imagen de portada ${first.name}"><div class="welcome-copy"><span class="mock-brand">NETFLIX</span><h2>Películas y series ilimitadas</h2><p>Historias increíbles, en cualquier momento.</p>${button('Comenzar','S03','mock-button')}${button('Iniciar sesión','S04','mock-button white')}</div></div></div>`;break;
  case 'access':
   markup=`${mockHeader()}<div class="${bodyClass}"><p class="mock-eyebrow">BIENVENIDO</p><h2 class="mock-title">¿Cómo quieres continuar?</h2><p class="mock-subtitle">Elige una opción para recorrer esta demostración académica.</p><div class="access-choice"><span>▶</span><div><b>Usuario / suscriptor</b><small>Explorar series y películas</small></div><span>›</span></div>${button('Iniciar sesión','S04','mock-button')}${button('Crear cuenta','S05','mock-button outline')}<div class="mock-divider"></div><div class="access-choice admin-choice"><span>▣</span><div><b>Panel de administración</b><small>Rol académico · contenido de muestra</small></div><span>›</span></div>${button('Entrar como administrador','S18','mock-button translucent')}</div>`;break;
  case 'login':
   markup=`${mockHeader()}<div class="${bodyClass} auth-body"><h2 class="mock-title">Iniciar sesión</h2><p class="mock-subtitle">Usa tus datos para continuar viendo.</p>${mockInput('Correo electrónico','nombre@correo.com','email')}${`<label class="mock-field-label">Contraseña<div class="password-field"><input class="mock-input" type="password" placeholder="Tu contraseña"><button data-password-toggle type="button" aria-label="Mostrar contraseña">◉</button></div></label>`}${button('Iniciar sesión','S08','mock-button')}${button('¿Olvidaste tu contraseña?','S06','mock-link') }<label class="mock-check"><input type="checkbox"> Recuérdame</label><p class="mock-subtitle">¿Primera vez en Netflix? ${button('Suscríbete ahora','S05','inline-mock-link')}</p><small class="mock-muted">La validación es demostrativa; no se envían credenciales.</small></div>`;break;
  case 'register':
   markup=`${mockHeader()}<div class="${bodyClass} auth-body"><p class="mock-eyebrow">CREA TU CUENTA</p><h2 class="mock-title">Disfruta tus historias favoritas</h2>${mockInput('Nombre','Tu nombre')}${mockInput('Correo electrónico','nombre@correo.com','email')}${mockInput('Contraseña','Crea una contraseña','password')}<p class="mock-muted">Usa al menos 8 caracteres. Puedes cambiar tus preferencias más adelante.</p>${button('Crear cuenta','S08','mock-button')}<p class="mock-subtitle">¿Ya tienes cuenta? ${button('Inicia sesión','S04','inline-mock-link')}</p></div>`;break;
  case 'recover':
   markup=`${mockHeader(false,'Ayuda')}<div class="${bodyClass} auth-body"><span class="form-icon">✉</span><h2 class="mock-title">¿Olvidaste tu contraseña?</h2><p class="mock-subtitle">Ingresa el correo asociado a tu cuenta y te mostraremos la confirmación de envío.</p>${mockInput('Correo electrónico','nombre@correo.com','email')}${button('Enviar instrucciones','S07','mock-button')}${button('Volver a iniciar sesión','S04','mock-button outline')}</div>`;break;
  case 'recoveryDone':
   markup=`${mockHeader()}<div class="${bodyClass} centered-message"><span class="success-mark">✓</span><p class="mock-eyebrow">SOLICITUD RECIBIDA</p><h2 class="mock-title">Revisa tu correo</h2><p class="mock-subtitle">En esta demostración, se enviaron instrucciones de recuperación al correo indicado.</p>${button('Volver al inicio de sesión','S04','mock-button')}</div>`;break;
  case 'profiles':
   markup=`${mockHeader(false,'Administrar')}<div class="${bodyClass}"><h2 class="mock-title centered">¿Quién está viendo?</h2><div class="avatar-grid">${[['Mía','M'],['Leo','L'],['Sofía','S'],['Alex','A'],['Infantil','★']].map(([name,avatar])=>`<button class="avatar-choice" data-go="S09"><span class="avatar-art">${avatar}</span>${name}</button>`).join('')}</div>${button('Administrar perfiles','S09','mock-button outline')}</div>`;break;
  case 'home':
   markup=`${mockHeader(false,'⌕　M')}<div class="home-tabs"><button class="active" data-go="S10">Series</button><button data-go="S10">Películas</button><button data-go="S10">Categorías⌄</button></div><div class="hero-feature artwork" style="--poster-tone:${first.tone}"><img src="${artwork(first.backdrop,'w780')}" alt="Portada destacada de ${first.name}"><div class="hero-feature-content"><span class="mock-eyebrow">SERIE · NÚMERO 1 HOY</span><div class="feature-logo">${first.name.toUpperCase()}</div><p class="mock-subtitle">Un verano cambia para siempre. Amistad, misterio y aventuras en Hawkins.</p><div class="feature-actions">${button('▶ Reproducir','S14','mock-button white')}${button('ⓘ Información','S13','mock-button translucent')}</div></div></div><div class="${bodyClass} catalog-content"><p class="mock-eyebrow">TENDENCIAS</p>${posterRow(titles.slice(0,5))}<p class="mock-eyebrow">POPULARES EN NETFLIX</p>${posterRow(titles.slice(2,7))}<p class="mock-eyebrow">CONTINUAR VIENDO</p>${posterRow([titles[1],titles[4],titles[5],titles[6]])}<p class="mock-eyebrow">MI LISTA</p>${posterRow(savedTitles.map(key=>titles.find(t=>t.key===key)).filter(Boolean))}</div>${mockNav('home')}`;break;
  case 'categories':
   markup=`${mockHeader()}<div class="${bodyClass}"><h2 class="mock-title">Categorías</h2><p class="mock-subtitle">Explora por género y encuentra tu próxima historia.</p><div class="category-chips">${['Todo','Acción','Drama','Comedia','Terror','Anime','Documentales'].map(label=>`<button class="category-chip ${activeCategory===label?'active':''}" data-category="${label}">${label}</button>`).join('')}</div><p class="mock-eyebrow">${activeCategory==='Todo'?'RECOMENDADOS':activeCategory.toUpperCase()}</p><div class="poster-grid">${titles.slice(0,6).map(t=>posterCard(t,{go:'S13'})).join('')}</div></div>${mockNav('categories')}`;break;
  case 'search':
   markup=`${mockHeader()}<div class="${bodyClass}"><h2 class="mock-title">Buscar</h2><label class="search-field"><span>⌕</span><input id="mock-search-input" type="search" placeholder="Series, películas, géneros"><button data-search-clear type="button" aria-label="Limpiar búsqueda">×</button></label><p class="mock-eyebrow">BÚSQUEDAS RECIENTES</p>${['Ciencia ficción','Historias de misterio','Comedia'].map((term,i)=>`<div class="search-suggestion"><span class="search-art" style="--poster-tone:${titles[i].tone}">${titles[i].name}</span><span>${term}</span><i>↗</i></div>`).join('')}<p class="mock-eyebrow">TÍTULOS SUGERIDOS</p>${posterRow(titles.slice(0,5))}</div>${mockNav('search')}`;break;
  case 'results':
   markup=`${mockHeader()}<div class="${bodyClass}"><label class="search-field"><span>⌕</span><input type="search" value="aventura" aria-label="Término buscado"><button data-search-clear type="button" aria-label="Limpiar búsqueda">×</button></label><p class="mock-subtitle">Resultados para <b>“aventura”</b> · 8 títulos</p>${titleList(titles.slice(0,6))}</div>${mockNav('search')}`;break;
  case 'detail':
   markup=`${mockHeader()}${artPanel(first,first.backdrop,'detail-backdrop')}<div class="${bodyClass} detail-content"><h2 class="mock-title">${first.name}</h2><p class="detail-meta-line">TOP 10 · ${first.meta} · HD</p>${button('▶ Reproducir','S14','mock-button white')}${button(savedTitles.includes(first.key)?'✓ En Mi lista':'＋ Mi lista','S15','mock-button translucent','data-toggle-list="stranger"')}<p class="detail-description">Cuando una niña desaparece, sus amigos descubren un misterio que cambiará para siempre su pequeño pueblo. Una serie de aventuras, amistad y sucesos inexplicables.</p><p class="mock-eyebrow">REPARTO</p><p class="mock-muted">Millie Bobby Brown · Finn Wolfhard · David Harbour</p><p class="mock-eyebrow">TAMBIÉN TE PODRÍA GUSTAR</p>${posterRow([second,third,fourth,titles[4]])}</div>`;break;
  case 'player':
   markup=`<div class="video-stage"><div class="video-scene">VISTA PREVIA · CONTENIDO FICTICIO</div><div class="player-top">${button('‹','S13','player-back')}${button('⋮','S13','player-back')}</div><button class="player-center" data-player-toggle type="button" aria-label="Pausar o reanudar">${playerPaused?'▶':'Ⅱ'}</button><div class="player-bottom"><b>${first.name} · Capítulo 1</b><div class="progress-track"></div><div class="player-times"><span>12:40</span><span>48:20</span></div><div class="player-options"><span>◖ Volumen</span><button type="button" data-player-toggle>${playerPaused?'▶ Reanudar':'Ⅱ Pausar'}</button><span>CC Subtítulos</span></div></div></div><div class="${bodyClass}"><p class="mock-muted">Reproducción de demostración · no se transmite video</p>${button('Salir del reproductor','S13','mock-button outline')}</div>`;break;
  case 'mylist':
   {const list=savedTitles.map(key=>titles.find(t=>t.key===key)).filter(Boolean);markup=`${mockHeader()}<div class="${bodyClass}"><h2 class="mock-title">Mi lista</h2><p class="mock-subtitle">Tus títulos guardados para ver cuando quieras.</p>${list.length?titleList(list,true):`<div class="empty-state"><span>＋</span><h3>Aún no tienes títulos</h3><p>Agrega películas y series desde su pantalla de detalles.</p>${button('Explorar catálogo','S09','mock-button')}</div>`}</div>${mockNav('mylist')}`;break;}
  case 'account':
   markup=`${mockHeader()}<div class="${bodyClass}"><p class="mock-eyebrow">PERFIL</p><div class="account-profile"><span class="avatar-art">M</span><div><b>Mía Rivera</b><small>Plan de demostración</small></div></div><p class="mock-eyebrow">AJUSTES</p>${[['Cuenta','Membresía y facturación'],['Idioma','Español'],['Notificaciones','Activadas'],['Reproducción','Uso de datos y calidad'],['Privacidad','Permisos y actividad']].map(([a,b])=>`<div class="settings-row"><span><b>${a}</b><small>${b}</small></span><i>›</i></div>`).join('')}${button('Cerrar sesión','S17','mock-button outline')}</div>${mockNav('account')}`;break;
  case 'logout':
   markup=`${mockHeader()}<div class="${bodyClass} centered-message"><span class="confirm-symbol">?</span><p class="mock-eyebrow">CONFIRMACIÓN</p><h2 class="mock-title">¿Quieres cerrar sesión?</h2><p class="mock-subtitle">Volverás a la pantalla de acceso de la demostración.</p>${button('Cerrar sesión','S04','mock-button')}${button('Cancelar','S16','mock-button outline')}</div>`;break;
  case 'adminLogin':
   markup=`${mockHeader(true)}<div class="${bodyClass} auth-body"><span class="admin-shield">▣</span><p class="mock-eyebrow">PANEL DE ADMINISTRACIÓN · DEMOSTRACIÓN ACADÉMICA</p><h2 class="mock-title">Acceso de contenido</h2>${mockInput('Usuario de demostración','admin@demo.edu','email')}${mockInput('Contraseña','Contraseña de muestra','password')}${button('Acceder','S19','mock-button')}<p class="validation-note">ⓘ Acceso de ejemplo. No se verifican credenciales reales.</p>${button('Volver al inicio','S03','mock-link')}</div>`;break;
  case 'dashboard':
   markup=`${mockHeader(true,'● Admin')}<div class="${bodyClass}"><p class="mock-eyebrow">PANEL DE CONTENIDO</p><h2 class="mock-title">Hola, administrador</h2><p class="mock-subtitle">Resumen del catálogo de demostración.</p><div class="stat-grid"><div class="stat-card"><b>128</b><small>TÍTULOS REGISTRADOS</small></div><div class="stat-card"><b>96</b><small>PUBLICADOS</small></div><div class="stat-card"><b>32</b><small>BORRADORES</small></div><div class="stat-card"><b>+12%</b><small>ESTE MES</small></div></div><p class="mock-eyebrow">ACTIVIDAD DE CATÁLOGO</p><div class="mini-chart">${[42,65,50,82,57,93,72].map((h,i)=>`<span style="height:${h}%" aria-label="Semana ${i+1}"></span>`).join('')}</div><p class="mock-eyebrow">ACCESOS RÁPIDOS</p>${button('▤  Administrar catálogo','S20','mock-button')}${button('＋  Agregar contenido','S21','mock-button outline')}${button('Cerrar sesión','S18','mock-link')}</div><nav class="mock-nav admin-nav"><button class="active" data-go="S19">▦<br>Panel</button><button data-go="S20">▤<br>Catálogo</button><button data-go="S21">＋<br>Agregar</button><button data-go="S18">↪<br>Salir</button></nav>`;break;
  case 'adminCatalog':
   markup=`${mockHeader(true)}<div class="${bodyClass}"><h2 class="mock-title">Catálogo de contenidos</h2><label class="search-field"><span>⌕</span><input type="search" placeholder="Buscar título"><button data-search-clear type="button">×</button></label><div class="admin-tabbar"><button class="active" data-catalog-filter="all">Todos · 128</button><button data-catalog-filter="movie">Películas</button><button data-catalog-filter="series">Series</button><button data-catalog-filter="published">Publicado</button><button data-catalog-filter="draft">Borrador</button></div>${button('＋ Agregar contenido','S21','mock-button')}<p class="mock-eyebrow">TÍTULOS · ESTADO · ACCIONES</p>${titles.slice(0,5).map((t,i)=>`<div class="admin-title-card" data-state="${i===2?'draft':'published'}" data-type="${i===4?'movie':'series'}">${posterCard(t,{go:'S22'})}<div><b>${t.name}</b><small>${i===4?'Película · 2024':'Serie · 2024'}</small><span class="status-pill ${i===2?'draft':''}">${i===2?'Borrador':'Publicado'}</span></div><div><button class="admin-icon-button" data-go="S22">Editar</button><button class="admin-icon-button" data-go="S23">•••</button></div></div>`).join('')}</div><nav class="mock-nav admin-nav"><button data-go="S19">▦<br>Panel</button><button class="active" data-go="S20">▤<br>Catálogo</button><button data-go="S21">＋<br>Agregar</button><button data-go="S18">↪<br>Salir</button></nav>`;break;
  case 'addContent':
   markup=`${mockHeader(true)}<div class="${bodyClass}"><p class="mock-eyebrow">CATÁLOGO / NUEVO</p><h2 class="mock-title">Agregar contenido</h2><div class="form-preview artwork" style="--poster-tone:#482632"><img src="${artwork(second.poster)}" alt="Vista previa de cartel"><span>Vista previa de portada</span></div>${mockInput('Título','Nombre de la película o serie')}${`<label class="mock-field-label">Descripción<textarea class="mock-input mock-textarea" placeholder="Sinopsis breve"></textarea></label>`}<div class="mock-row">${selectField('Tipo','Serie')}${selectField('Género','Drama')}</div><div class="mock-row">${mockInput('Año','2025','number')}${selectField('Clasificación','13+')}</div><div class="mock-row">${mockInput('Duración / temporadas','2 temporadas')}${selectField('Estado','Borrador')}</div>${mockInput('URL de portada','https://…','url')}<p class="validation-note">Los campos marcados son necesarios para guardar.</p>${button('Guardar borrador','S24','mock-button outline')}${button('Publicar','S24','mock-button')}</div>`;break;
  case 'editContent':
   markup=`${mockHeader(true)}<div class="${bodyClass}"><p class="mock-eyebrow">CATÁLOGO / EDITAR</p><h2 class="mock-title">Editar contenido</h2><div class="edit-preview">${posterCard(second)}<span><b>Publicado</b><small>Último cambio · 12 oct 2026</small></span></div>${mockInput('Título','Título', 'text',second.name)}<label class="mock-field-label">Descripción<textarea class="mock-input mock-textarea">Una estudiante llega a una academia extraordinaria donde nada es lo que parece.</textarea></label><div class="mock-row">${selectField('Tipo','Serie')}${selectField('Género','Misterio')}</div><div class="mock-row">${mockInput('Año','2022','number','2022')}${selectField('Clasificación','13+')}</div>${mockInput('Duración / temporadas','2 temporadas','text','2 temporadas')}${mockInput('URL de portada','Póster actual','url')}<span class="status-pill">PUBLICADO</span>${button('Guardar cambios','S24','mock-button')}${button('Cancelar','S20','mock-button outline')}</div>`;break;
  case 'publishConfirm':
   markup=`${mockHeader(true)}<div class="${bodyClass} centered-message"><p class="mock-eyebrow">CAMBIO DE ESTADO</p><h2 class="mock-title">¿Cambiar estado de publicación?</h2><div class="confirmation-card"><div class="confirm-poster">${posterCard(second)}<div><b>${second.name}</b><p class="mock-muted">Serie · Misterio · 13+</p><span class="status-pill">ACTUAL: PUBLICADO</span><p><span class="status-pill draft">NUEVO: BORRADOR</span></p></div></div></div><p class="mock-subtitle">Confirma publicar o despublicar el título seleccionado en el catálogo de esta demostración.</p>${button('Confirmar cambio','S24','mock-button')}${button('Cancelar','S20','mock-button outline')}</div>`;break;
  case 'saved':
   markup=`${mockHeader(true)}<div class="${bodyClass} centered-message"><span class="success-mark">✓</span><p class="mock-eyebrow">OPERACIÓN COMPLETADA</p><h2 class="mock-title">Cambios guardados correctamente</h2><p class="mock-subtitle">El título de demostración se actualizó en el catálogo local.</p><div class="confirmation-card">${posterCard(second)}<p><b>${second.name}</b></p><span class="status-pill">CAMBIOS SIMULADOS</span></div>${button('Volver al catálogo','S20','mock-button')}${button('Continuar administrando','S19','mock-button outline')}</div>`;break;
 }
  const body=markup;
 const content=document.createElement('div');content.className='screen-content';content.innerHTML=body+bottomActions(screen);
 return content.innerHTML;
}
function selectField(label,value){return `<label class="mock-field-label">${label}<select class="mock-input"><option>${value}</option><option>Otro</option></select></label>`;}

function visibleScreens(){
 return screens.filter(screen=>activeFilter==='all'||screen.role==='both'||screen.role===activeFilter);
}
function renderGallery(){
 const filtered=visibleScreens();
 gallery.innerHTML=filtered.map(screen=>`<article class="sketch-card" data-id="${screen.id}" data-role="${screen.role}" tabindex="0" aria-label="Ampliar sketch ${screen.id}: ${screen.name}"><div class="card-heading"><div><span class="card-number">${screen.id.slice(1)} <i>${screen.id}</i></span><h3>${screen.name}</h3></div><span class="card-role ${screen.role==='admin'?'admin':screen.role==='both'?'both':''}">${screen.role==='admin'?'ADMINISTRADOR':screen.role==='both'?'DOS ROLES':'USUARIO'}</span></div><div class="gallery-device-stage"><div class="device gallery-device"><div class="device-island"></div><div class="device-status"><span>9:41</span><span aria-hidden="true">●●●　▰</span></div><div class="mock-screen" data-gallery-screen="${screen.id}">${screenMarkup(screen)}</div><div class="device-home"></div></div></div><p class="card-description">${screen.desc}</p><button class="expand-sketch" data-open-screen="${screen.id}">Ampliar sketch <span aria-hidden="true">↗</span></button></article>`).join('');
 document.querySelector('#visible-count').textContent=filtered.length;
 gallery.querySelectorAll('.mock-screen').forEach(root=>bindMockInteractions(root));
 gallery.querySelectorAll('[data-open-screen]').forEach(button=>button.addEventListener('click',()=>openSketch(button.dataset.openScreen)));
 gallery.querySelectorAll('.sketch-card').forEach(card=>{card.addEventListener('click',event=>{if(event.target.closest('button,input,select,textarea,[data-go]'))return;openSketch(card.dataset.id);});card.addEventListener('keydown',event=>{if(event.target===card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openSketch(card.dataset.id);}});});
}
function openSketch(id){
 const screen=byId[id];if(!screen)return;
 if(activeFilter!=='all'&&screen.role!=='both'&&screen.role!==activeFilter){activeFilter='all';updateFilters();renderGallery();}
 selectedId=id;lightboxOpen=true;
 const box=document.querySelector('#sketch-lightbox');box.hidden=false;document.body.classList.add('lightbox-active');
 document.querySelector('#lightbox-number').textContent=screen.id.slice(1);
 document.querySelector('#lightbox-title').textContent=screen.name;
 const role=document.querySelector('#lightbox-role');role.textContent=screen.role==='admin'?'ADMINISTRADOR · ROL ACADÉMICO':screen.role==='both'?'DOS ROLES':'USUARIO / SUSCRIPTOR';role.className=`lightbox-role ${screen.role}`;
 document.querySelector('#lightbox-description').textContent=screen.desc;
 const stage=document.querySelector('#large-screen');stage.innerHTML=screenMarkup(screen);bindMockInteractions(stage);
 const list=visibleScreens(),position=list.findIndex(item=>item.id===id);
 document.querySelector('#previous-sketch').disabled=position<=0;
 document.querySelector('#next-sketch').disabled=position===list.length-1;
 document.querySelector('#close-lightbox').focus();
}
function closeSketch(){
 if(!lightboxOpen)return;lightboxOpen=false;document.querySelector('#sketch-lightbox').hidden=true;document.body.classList.remove('lightbox-active');
}
function stepSketch(direction){
 const list=visibleScreens(),position=list.findIndex(item=>item.id===selectedId),next=list[position+direction];if(next)openSketch(next.id);
}
function updateFilters(){
 document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.filter===activeFilter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
function bindMockInteractions(root){
 root.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>openSketch(button.dataset.go)));
 root.querySelectorAll('[data-password-toggle]').forEach(button=>button.addEventListener('click',()=>{const input=button.parentElement.querySelector('input');input.type=input.type==='password'?'text':'password';button.setAttribute('aria-label',input.type==='password'?'Mostrar contraseña':'Ocultar contraseña');}));
 root.querySelectorAll('[data-search-clear]').forEach(button=>button.addEventListener('click',()=>{const input=button.parentElement.querySelector('input');input.value='';input.focus();}));
 root.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{activeCategory=button.dataset.category;openSketch('S10');}));
 root.querySelectorAll('[data-toggle-list]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.toggleList;savedTitles=savedTitles.includes(key)?savedTitles.filter(item=>item!==key):[key,...savedTitles];renderGallery();if(lightboxOpen)openSketch(selectedId);}));
 root.querySelectorAll('[data-remove-title]').forEach(button=>button.addEventListener('click',()=>{savedTitles=savedTitles.filter(key=>key!==button.dataset.removeTitle);renderGallery();if(lightboxOpen)openSketch(selectedId);}));
 root.querySelectorAll('[data-player-toggle]').forEach(button=>button.addEventListener('click',()=>{playerPaused=!playerPaused;if(lightboxOpen)openSketch('S14');else renderGallery();}));
 root.querySelectorAll('[data-catalog-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.catalogFilter;root.querySelectorAll('[data-catalog-filter]').forEach(tab=>tab.classList.toggle('active',tab===button));root.querySelectorAll('.admin-title-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.state!==filter&&card.dataset.type!==filter;});}));
 root.querySelectorAll('[data-go][role="button"]').forEach(button=>button.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openSketch(button.dataset.go);}}));
 root.querySelectorAll('.artwork img,.mock-poster img').forEach(img=>img.addEventListener('error',()=>{img.closest('.artwork,.mock-poster')?.classList.add('poster-fallback');img.remove();},{once:true}));
}

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;updateFilters();renderGallery();}));
document.querySelector('#close-lightbox').addEventListener('click',closeSketch);
document.querySelectorAll('[data-close-lightbox]').forEach(item=>item.addEventListener('click',closeSketch));
document.querySelector('#previous-sketch').addEventListener('click',()=>stepSketch(-1));
document.querySelector('#next-sketch').addEventListener('click',()=>stepSketch(1));
document.addEventListener('keydown',event=>{if(!lightboxOpen)return;if(event.key==='Escape')closeSketch();if(event.key==='ArrowLeft')stepSketch(-1);if(event.key==='ArrowRight')stepSketch(1);});
renderGallery();
