const _0x5b30bb=_0x50e0;(function(_0x385b4a,_0x6de973){const _0x57608d=_0x50e0,_0x39a20b=_0x385b4a();while(!![]){try{const _0x18ef98=parseInt(_0x57608d(0x1c8))/0x1+-parseInt(_0x57608d(0x18a))/0x2*(-parseInt(_0x57608d(0x1b7))/0x3)+parseInt(_0x57608d(0x12a))/0x4+-parseInt(_0x57608d(0x19c))/0x5+parseInt(_0x57608d(0x18f))/0x6*(-parseInt(_0x57608d(0x170))/0x7)+-parseInt(_0x57608d(0x175))/0x8*(-parseInt(_0x57608d(0x15b))/0x9)+-parseInt(_0x57608d(0x167))/0xa*(parseInt(_0x57608d(0x130))/0xb);if(_0x18ef98===_0x6de973)break;else _0x39a20b['push'](_0x39a20b['shift']());}catch(_0x5aa91e){_0x39a20b['push'](_0x39a20b['shift']());}}}(_0x1322,0x59e0b),process[_0x5b30bb(0x14e)][_0x5b30bb(0x166)]='0');import'./config.js';import{createRequire}from'module';import _0x498eda,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';global[_0x5b30bb(0x1ad)]=function filename(_0x4b5399=import.meta[_0x5b30bb(0x16f)],_0x4e4dfd=platform!==_0x5b30bb(0x14f)){const _0x6ae03=_0x5b30bb;return _0x4e4dfd?/file:\/\/\//[_0x6ae03(0x16e)](_0x4b5399)?fileURLToPath(_0x4b5399):_0x4b5399:pathToFileURL(_0x4b5399)[_0x6ae03(0x189)]();},global[_0x5b30bb(0x1bd)]=function dirname(_0x442c9f){const _0x1599e7=_0x5b30bb;return _0x498eda['dirname'](global[_0x1599e7(0x1ad)](_0x442c9f,!![]));},global[_0x5b30bb(0x14a)]=function require(_0x50db80=import.meta[_0x5b30bb(0x16f)]){return createRequire(_0x50db80);};import*as _0x2f3b28 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch}from'fs';import _0x3abead from'yargs';import{spawn}from'child_process';import _0x56aacc from'lodash';import{clear}from'console';import _0x2f5ce2 from'cfonts';import _0x5f3ff2 from'syntax-error';import{tmpdir}from'os';import _0x9a492c from'chalk';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x4c9741 from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';const {makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,PHONENUMBER_MCC}=await import(_0x5b30bb(0x1b0)),{CONNECTING}=_0x2f3b28,{chain}=_0x56aacc,PORT=process[_0x5b30bb(0x14e)]['PORT']||process[_0x5b30bb(0x14e)][_0x5b30bb(0x196)]||0xbb8;protoType(),serialize(),global[_0x5b30bb(0x186)]=(_0x2c0eee,_0x3d14f1='/',_0x3cb3ea={},_0x161321)=>(_0x2c0eee in global[_0x5b30bb(0x190)]?global[_0x5b30bb(0x190)][_0x2c0eee]:_0x2c0eee)+_0x3d14f1+(_0x3cb3ea||_0x161321?'?'+new URLSearchParams(Object[_0x5b30bb(0x165)]({..._0x3cb3ea,..._0x161321?{[_0x161321]:global[_0x5b30bb(0x172)][_0x2c0eee in global[_0x5b30bb(0x190)]?global['APIs'][_0x2c0eee]:_0x2c0eee]}:{}})):''),global['timestamp']={'start':new Date()};const __dirname=global[_0x5b30bb(0x1bd)](import.meta[_0x5b30bb(0x16f)]);global[_0x5b30bb(0x15c)]=new Object(_0x3abead(process[_0x5b30bb(0x156)][_0x5b30bb(0x143)](0x2))['exitProcess'](![])[_0x5b30bb(0x187)]()),global[_0x5b30bb(0x13b)]=new RegExp('^['+(opts[_0x5b30bb(0x13b)]||_0x5b30bb(0x146))[_0x5b30bb(0x137)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x5b30bb(0x198))+']'),global['db']=new Low(/https?:\/\//[_0x5b30bb(0x16e)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i[_0x5b30bb(0x16e)](opts['db'])?opts[_0x5b30bb(0x19a)]?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x5b30bb(0x174))),global[_0x5b30bb(0x169)]=async function loadDatabase(){const _0x329a9f=_0x5b30bb;if(global['db'][_0x329a9f(0x139)])return new Promise(_0x9299b2=>setInterval(async function(){const _0x414e5c=_0x329a9f;!global['db'][_0x414e5c(0x139)]&&(clearInterval(this),_0x9299b2(global['db'][_0x414e5c(0x1a0)]==null?global[_0x414e5c(0x169)]():global['db'][_0x414e5c(0x1a0)]));},0x1*0x3e8));if(global['db'][_0x329a9f(0x1a0)]!==null)return;global['db']['READ']=!![],await global['db'][_0x329a9f(0x182)]()['catch'](console[_0x329a9f(0x12b)]),global['db'][_0x329a9f(0x139)]=null,global['db']['data']={'users':{},'chats':{},'stats':{},'msgs':{},'banned':{},'sticker':{},'settings':{},...global['db'][_0x329a9f(0x1a0)]||{}},global['db'][_0x329a9f(0x171)]=chain(global['db'][_0x329a9f(0x1a0)]);},loadDatabase(),global[_0x5b30bb(0x17b)]=''+(opts['_'][0x0]||_0x5b30bb(0x13f)),console['log'](_0x5b30bb(0x184)+authFile);function _0x50e0(_0x6b7d19,_0x4593a6){const _0x13223c=_0x1322();return _0x50e0=function(_0x50e060,_0x4dd6b9){_0x50e060=_0x50e060-0x12a;let _0x2e6be3=_0x13223c[_0x50e060];return _0x2e6be3;},_0x50e0(_0x6b7d19,_0x4593a6);}const {state,saveCreds}=await useMultiFileAuthState(global['authFile']),{version,isLatest}=await fetchLatestBaileysVersion();console[_0x5b30bb(0x13c)]('using\x20WA\x20v'+version[_0x5b30bb(0x192)]('.')+',\x20isLatest:\x20'+isLatest);const pairingCode=process[_0x5b30bb(0x156)][_0x5b30bb(0x191)](_0x5b30bb(0x154)),connectionOptions={'version':version,'logger':_0x4c9741({'level':_0x5b30bb(0x19f)}),'printQRInTerminal':!pairingCode,'browser':global[_0x5b30bb(0x17e)],'auth':{'creds':state[_0x5b30bb(0x13e)],'keys':makeCacheableSignalKeyStore(state[_0x5b30bb(0x185)],_0x4c9741()[_0x5b30bb(0x19d)]({'level':_0x5b30bb(0x19f),'stream':'store'}))}};global[_0x5b30bb(0x16a)]=makeWASocket(connectionOptions),conn['isInit']=![];!opts[_0x5b30bb(0x16e)]&&setInterval(async()=>{const _0x322b9c=_0x5b30bb;if(global['db'][_0x322b9c(0x1a0)])await global['db'][_0x322b9c(0x1a5)]()['catch'](console['error']);},0x3c*0x3e8);if(opts[_0x5b30bb(0x12c)])(await import(_0x5b30bb(0x1c6)))[_0x5b30bb(0x133)](global[_0x5b30bb(0x16a)],PORT);async function connectionUpdate(_0x208d18){const _0x59e037=_0x5b30bb,{receivedPendingNotifications:_0x2dba17,connection:_0x30d616,lastDisconnect:_0x474796,isOnline:_0x155ab2,isNewLogin:_0x6d64a0}=_0x208d18;if(_0x6d64a0)conn[_0x59e037(0x1a2)]=!![];if(_0x30d616=='connecting')console['log'](_0x9a492c['redBright'](_0x59e037(0x1b5)));if(_0x30d616=='open')console[_0x59e037(0x13c)](_0x9a492c[_0x59e037(0x17d)](_0x59e037(0x1b4)));if(_0x155ab2==!![])console[_0x59e037(0x13c)](_0x9a492c[_0x59e037(0x17d)](_0x59e037(0x1c1)));if(_0x155ab2==![])console[_0x59e037(0x13c)](_0x9a492c[_0x59e037(0x149)](_0x59e037(0x1b6)));if(_0x2dba17)console[_0x59e037(0x13c)](_0x9a492c[_0x59e037(0x12d)](_0x59e037(0x15f)));if(_0x30d616==_0x59e037(0x150))console[_0x59e037(0x13c)](_0x9a492c['red']('koneksi\x20terputus\x20&\x20mencoba\x20menyambung\x20ulang...'));global[_0x59e037(0x1c5)]['connect']=new Date();_0x474796&&_0x474796['error']&&_0x474796[_0x59e037(0x12b)]['output']&&_0x474796[_0x59e037(0x12b)]['output'][_0x59e037(0x176)]!==DisconnectReason[_0x59e037(0x160)]&&(console[_0x59e037(0x13c)](_0x9a492c['red']('Connecting...')),await global[_0x59e037(0x159)](!![]));if(global['db']['data']==null)await global[_0x59e037(0x169)]();}process['on']('uncaughtException',console[_0x5b30bb(0x12b)]);let isInit=!![],handler=await import(_0x5b30bb(0x1b2));global[_0x5b30bb(0x159)]=async function(_0x4406eb){const _0x151705=_0x5b30bb;try{const _0x22c613=await import(_0x151705(0x163)+Date[_0x151705(0x19b)]())[_0x151705(0x14b)](console['error']);if(Object[_0x151705(0x185)](_0x22c613||{})[_0x151705(0x15e)])handler=_0x22c613;}catch(_0xdf1f00){console[_0x151705(0x12b)](_0xdf1f00);}if(_0x4406eb){const _0x2f90f2=global[_0x151705(0x16a)][_0x151705(0x1c0)];try{global['conn']['ws']['close']();}catch{}conn['ev']['removeAllListeners'](),global['conn']=makeWASocket(connectionOptions,{'chats':_0x2f90f2}),isInit=!![];}return!isInit&&(conn['ev'][_0x151705(0x1a4)](_0x151705(0x18d),conn[_0x151705(0x181)]),conn['ev'][_0x151705(0x1a4)](_0x151705(0x183),conn['participantsUpdate']),conn['ev'][_0x151705(0x1a4)]('groups.update',conn['groupsUpdate']),conn['ev'][_0x151705(0x1a4)](_0x151705(0x153),conn[_0x151705(0x134)]),conn['ev'][_0x151705(0x1a4)](_0x151705(0x1a6),conn[_0x151705(0x162)]),conn['ev'][_0x151705(0x1a4)](_0x151705(0x1ba),conn[_0x151705(0x17a)])),conn[_0x151705(0x141)]=_0x151705(0x1b3),conn['bye']=_0x151705(0x14d),conn['spromote']=_0x151705(0x148),conn[_0x151705(0x1bc)]='@user\x20sekarang\x20bukan\x20admin!',conn['sDesc']=_0x151705(0x188),conn['sSubject']=_0x151705(0x18e),conn['sIcon']='Icon\x20grup\x20telah\x20diubah!',conn[_0x151705(0x177)]=_0x151705(0x18b),conn['handler']=handler[_0x151705(0x181)]['bind'](global[_0x151705(0x16a)]),conn['participantsUpdate']=handler[_0x151705(0x142)][_0x151705(0x12e)](global[_0x151705(0x16a)]),conn[_0x151705(0x1ca)]=handler['groupsUpdate'][_0x151705(0x12e)](global[_0x151705(0x16a)]),conn[_0x151705(0x134)]=handler[_0x151705(0x157)][_0x151705(0x12e)](global[_0x151705(0x16a)]),conn[_0x151705(0x162)]=connectionUpdate[_0x151705(0x12e)](global[_0x151705(0x16a)]),conn[_0x151705(0x17a)]=saveCreds[_0x151705(0x12e)](global[_0x151705(0x16a)]),conn['ev']['on'](_0x151705(0x18d),conn[_0x151705(0x181)]),conn['ev']['on']('group-participants.update',conn[_0x151705(0x142)]),conn['ev']['on'](_0x151705(0x12f),conn[_0x151705(0x1ca)]),conn['ev']['on']('message.delete',conn[_0x151705(0x134)]),conn['ev']['on'](_0x151705(0x1a6),conn[_0x151705(0x162)]),conn['ev']['on'](_0x151705(0x1ba),conn['credsUpdate']),isInit=![],!![];};const pluginFolder=global[_0x5b30bb(0x1bd)](join(__dirname,_0x5b30bb(0x1ae))),pluginFilter=_0x48c450=>/\.js$/[_0x5b30bb(0x16e)](_0x48c450);global[_0x5b30bb(0x14c)]={};async function filesInit(){const _0x34a699=_0x5b30bb;for(let _0x40941c of readdirSync(pluginFolder)[_0x34a699(0x179)](pluginFilter)){try{let _0x56ddd2=global[_0x34a699(0x1ad)](join(pluginFolder,_0x40941c));const _0x1c511b=await import(_0x56ddd2);global[_0x34a699(0x14c)][_0x40941c]=_0x1c511b[_0x34a699(0x133)]||_0x1c511b;}catch(_0x24c1ca){conn[_0x34a699(0x1bb)][_0x34a699(0x12b)](_0x24c1ca),delete global[_0x34a699(0x14c)][_0x40941c];}}}filesInit()[_0x5b30bb(0x155)](_0x6a512a=>console['log'](Object[_0x5b30bb(0x185)](global[_0x5b30bb(0x14c)])))['catch'](console['error']),global[_0x5b30bb(0x193)]=async(_0x4b54f4,_0x27d52e)=>{const _0x28d54f=_0x5b30bb;if(pluginFilter(_0x27d52e)){let _0x26815e=global[_0x28d54f(0x1ad)](join(pluginFolder,_0x27d52e),!![]);if(_0x27d52e in global[_0x28d54f(0x14c)]){if(existsSync(_0x26815e))conn['logger'][_0x28d54f(0x15d)](_0x28d54f(0x151)+_0x27d52e+'\x27');else return conn[_0x28d54f(0x1bb)][_0x28d54f(0x178)](_0x28d54f(0x194)+_0x27d52e+'\x27'),delete global['plugins'][_0x27d52e];}else conn[_0x28d54f(0x1bb)][_0x28d54f(0x15d)]('requiring\x20new\x20plugin\x20\x27'+_0x27d52e+'\x27');let _0x1f9153=_0x5f3ff2(readFileSync(_0x26815e),_0x27d52e,{'sourceType':_0x28d54f(0x19e),'allowAwaitOutsideFunction':!![]});if(_0x1f9153)conn[_0x28d54f(0x1bb)][_0x28d54f(0x12b)](_0x28d54f(0x164)+_0x27d52e+'\x27\x0a'+format(_0x1f9153));else try{const _0x4a1a4b=await import(global['__filename'](_0x26815e)+_0x28d54f(0x1ac)+Date[_0x28d54f(0x19b)]());global[_0x28d54f(0x14c)][_0x27d52e]=_0x4a1a4b[_0x28d54f(0x133)]||_0x4a1a4b;}catch(_0x25b685){conn['logger'][_0x28d54f(0x12b)](_0x28d54f(0x161)+_0x27d52e+'\x0a'+format(_0x25b685)+'\x27');}finally{global[_0x28d54f(0x14c)]=Object[_0x28d54f(0x145)](Object[_0x28d54f(0x165)](global['plugins'])[_0x28d54f(0x180)](([_0x401f8e],[_0x4b2237])=>_0x401f8e[_0x28d54f(0x1be)](_0x4b2237)));}}},Object[_0x5b30bb(0x17f)](global[_0x5b30bb(0x193)]),watch(pluginFolder,global[_0x5b30bb(0x193)]),await global[_0x5b30bb(0x159)]();async function _quickTest(){const _0xe33491=_0x5b30bb;let _0x4b9242=await Promise['all']([spawn('ffmpeg'),spawn(_0xe33491(0x1cc)),spawn(_0xe33491(0x1b9),[_0xe33491(0x1ab),_0xe33491(0x195),'error',_0xe33491(0x138),_0xe33491(0x16d),_0xe33491(0x158),'1','-f',_0xe33491(0x13d),'-']),spawn(_0xe33491(0x152)),spawn(_0xe33491(0x1bf)),spawn('gm'),spawn('find',[_0xe33491(0x18c)])][_0xe33491(0x197)](_0x17cee8=>{const _0x32963b=_0xe33491;return Promise[_0x32963b(0x199)]([new Promise(_0x3160c7=>{const _0x1c262d=_0x32963b;_0x17cee8['on'](_0x1c262d(0x150),_0x412ad0=>{_0x3160c7(_0x412ad0!==0x7f);});}),new Promise(_0x3416e3=>{const _0x50165f=_0x32963b;_0x17cee8['on'](_0x50165f(0x12b),_0x38b96a=>_0x3416e3(![]));})]);})),[_0x13d2ac,_0x513dd8,_0x5249b7,_0x3fdc53,_0x2e31e3,_0x5d306c,_0x4a47a8]=_0x4b9242;console[_0xe33491(0x13c)](_0x4b9242);let _0x352993=global[_0xe33491(0x17c)]={'ffmpeg':_0x13d2ac,'ffprobe':_0x513dd8,'ffmpegWebp':_0x5249b7,'convert':_0x3fdc53,'magick':_0x2e31e3,'gm':_0x5d306c,'find':_0x4a47a8};Object['freeze'](global['support']);if(!_0x352993['ffmpeg'])conn[_0xe33491(0x1bb)][_0xe33491(0x178)](_0xe33491(0x136));if(_0x352993['ffmpeg']&&!_0x352993[_0xe33491(0x15a)])conn['logger']['warn'](_0xe33491(0x173));if(!_0x352993[_0xe33491(0x152)]&&!_0x352993[_0xe33491(0x1bf)]&&!_0x352993['gm'])conn['logger'][_0xe33491(0x178)](_0xe33491(0x1c3));}_quickTest()[_0x5b30bb(0x155)](()=>conn[_0x5b30bb(0x1bb)][_0x5b30bb(0x15d)](_0x5b30bb(0x144)))[_0x5b30bb(0x14b)](console['error']);function _0x1322(){const _0x572539=['reload','deleted\x20plugin\x20\x27','-loglevel','SERVER_PORT','map','\x5c$&','race','mongodbv2','now','1473655EpxdmK','child','module','silent','data','blue','isInit','\x0a\x0aMasukan\x20nomor\x20kamu\x20:','off','write','connection.update','bgBlack','startsWith','bold','stdout','-hide_banner','?update=','__filename','./plugins/index','say','@adiwajshing/baileys','left','./handler.js','*@user*\x0a*𝚑𝚊𝚜\x20𝚓𝚘𝚒𝚗𝚎𝚍\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙*\x0a\x0a𝙱𝚎𝚏𝚘𝚛𝚎\x20𝚝𝚑𝚊𝚝,\x20𝚍𝚘𝚗𝚝\x20𝚏𝚘𝚛𝚐𝚎𝚝\x20𝚝𝚘\x20𝚛𝚎𝚊𝚍\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙\x20𝚛𝚞𝚕𝚎𝚜','Tersambung','Mengaktifkan\x20Bot,\x20Mohon\x20tunggu\x20sebentar...','Status\x20Mati','150693bWveHu','repeat','ffmpeg','creds.update','logger','sdemote','__dirname','localeCompare','magick','chats','Status\x20Aktif','greenBright','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','fromCharCode','timestamp','./server.js','tiny','333871umibyw','some','groupsUpdate','authState','ffprobe','1333168ZTpEyO','error','server','yellow','bind','groups.update','7832qJYULW','question','clear','default','onDelete','\x0aMasukan\x20nomor\x20:','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','replace','-filter_complex','READ','\x0aPAIRING\x20CODE\x0a','prefix','log','webp','creds','sessions','registered','welcome','participantsUpdate','slice','☑️\x20Quick\x20Test\x20Done','fromEntries','â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â�?:;?&.\x5c-','stdin','@user\x20sekarang\x20admin!','red','__require','catch','plugins','*@user*\x20*𝚑𝚊𝚜\x20𝚕𝚎𝚏𝚝\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙*','env','win32','close','re\x20-\x20require\x20plugin\x20\x27','convert','message.delete','--pairing','then','argv','deleteUpdate','-frames:v','reloadHandler','ffmpegWebp','4703931iOLizV','opts','info','length','Menunggu\x20Pesan\x20Baru','loggedOut','error\x20require\x20plugin\x20\x27','connectionUpdate','./handler.js?update=','syntax\x20error\x20while\x20loading\x20\x27','entries','NODE_TLS_REJECT_UNAUTHORIZED','11450ASEwlN','MASUKAN\x20NOMORMU\x20DENGAN\x20BENAR\x20AWALI\x20DENGAN\x2062\x20!!!','loadDatabase','conn','━━━━━━━━━━━\x20https://github.com/XM4ZE\x20━━━━━━━━━━━','match','color','test','url','7QnfBRE','chain','APIKeys','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','database.json','8bCBsOn','statusCode','sRevoke','warn','filter','credsUpdate','authFile','support','green','browser','freeze','sort','handler','read','group-participants.update','Load\x20AuthFile\x20from\x20','keys','API','parse','Deskripsi\x20telah\x20diubah\x20ke\x20\x0a@desc','toString','22JPRudY','Link\x20group\x20telah\x20diubah\x20ke\x20\x0a@revoke','--version','messages.upsert','Judul\x20grup\x20telah\x20diubah\x20ke\x20\x0a@subject','1585518qgtgEw','APIs','includes','join'];_0x1322=function(){return _0x572539;};return _0x1322();}import _0x2b01f7 from'readline';const more=String[_0x5b30bb(0x1c4)](0x200e),readMore=more[_0x5b30bb(0x1b8)](0xfa1),sleep=_0x502881=>{return new Promise(_0x5f319f=>setTimeout(_0x5f319f,_0x502881));},rl=_0x2b01f7['createInterface']({'input':process[_0x5b30bb(0x147)],'output':process[_0x5b30bb(0x1aa)]}),question=_0x42b594=>new Promise(_0x381372=>rl[_0x5b30bb(0x131)](_0x42b594,_0x381372));if(pairingCode&&!conn[_0x5b30bb(0x1cb)][_0x5b30bb(0x13e)][_0x5b30bb(0x140)]){console['clear'](),await sleep(0x1b58),console[_0x5b30bb(0x132)](),_0x2f5ce2[_0x5b30bb(0x1af)](_0x5b30bb(0x13a),{'font':_0x5b30bb(0x1c7),'align':_0x5b30bb(0x1b1),'gradient':[_0x5b30bb(0x149),_0x5b30bb(0x1a1)]}),console[_0x5b30bb(0x13c)](_0x9a492c[_0x5b30bb(0x1a9)]['white'](_0x5b30bb(0x16b))),console[_0x5b30bb(0x13c)](_0x9a492c[_0x5b30bb(0x1a9)][_0x5b30bb(0x17d)](_0x5b30bb(0x1a3)));let phoneNumber=await question(_0x9a492c[_0x5b30bb(0x1a7)](_0x9a492c[_0x5b30bb(0x1c2)]('>\x20')));phoneNumber=phoneNumber['replace'](/[^0-9]/g,'');!Object[_0x5b30bb(0x185)](PHONENUMBER_MCC)[_0x5b30bb(0x1c9)](_0xd5c63b=>phoneNumber[_0x5b30bb(0x1a8)](_0xd5c63b))&&(console[_0x5b30bb(0x13c)](_0x9a492c[_0x5b30bb(0x1a9)][_0x5b30bb(0x149)](_0x5b30bb(0x168))),console[_0x5b30bb(0x13c)](_0x9a492c[_0x5b30bb(0x1a9)][_0x5b30bb(0x17d)](_0x5b30bb(0x135))),phoneNumber=await question(_0x9a492c[_0x5b30bb(0x1a7)](_0x9a492c[_0x5b30bb(0x1c2)]('>'))),phoneNumber=phoneNumber[_0x5b30bb(0x137)](/[^0-9]/g,''));let code=await conn['requestPairingCode'](phoneNumber);code=code?.[_0x5b30bb(0x16c)](/.{1,4}/g)?.[_0x5b30bb(0x192)]('-')||code,console[_0x5b30bb(0x13c)](_0x9a492c['bold'][_0x5b30bb(0x17d)]('Kode\x20tautan\x20kamu\x20:\x20'),_0x9a492c['bold'][_0x5b30bb(0x12d)](code)),rl[_0x5b30bb(0x150)]();}