'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "872c77cef21a583e2fe9db620562211f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/assortment.png": "53fb5876c2b2880b602365938a1d4b20",
"assets/images/bread.png": "fca9b2645c1a0521e48549584090d07b",
"assets/images/brinjal.png": "be07e468939eb332fd35a8b5b8fde4fc",
"assets/images/c.png": "32e101a3de2a7fcab396d465160c308b",
"assets/images/facebook.jpg": "726fda2fd12ee5c1d726ce394bd1f1c9",
"assets/images/google.png": "c36dc8ee002e03cf2fb5e9265c8a45f3",
"assets/images/mushrooms.png": "b7a6048a16e380e6580e733d9ddb9cb9",
"assets/images/neonbrand.png": "6761cf78c1dbe203bb8cfc20f4c1cfeb",
"assets/images/o.png": "bdf1d4e4b90917531bfce999702ed395",
"assets/images/onion.png": "1f87263c2ccc86484093118eda6a5b82",
"assets/images/palak.png": "161d45495d74ac1965326fd843dcd440",
"assets/images/potato.png": "cdd49fa92011403db6b7aa7028b5c298",
"assets/images/Screenshot.png": "e05294ae4a6e3326c1a91fdf2beb53e8",
"assets/images/smallonion.png": "96aa17b71e7845fe9da7782b8f5838ed",
"assets/images/tomato.png": "a164e107cf32c87ca6601a37033fbbaa",
"assets/images/vinc.png": "04949805d2ca7fd0202395eb1a67b341",
"assets/images/vince.png": "3d4e1edaa05ff9891b40f691e3b033a3",
"assets/NOTICES": "ac0f34daa82feb8e9f3b6a7a32df9cfe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9748d9bed509aa0b3dc0043b667dd406",
"/": "9748d9bed509aa0b3dc0043b667dd406",
"main.dart.js": "5945474ad123e5a80c7845f9eadcd6ec",
"manifest.json": "2a498781f7395507d6d358093fa2c734",
"node_modules/.bin/mime": "1415d6750f45e9c12a12c1495be6fd45",
"node_modules/.bin/mime.cmd": "d18b78ba63ebe3f96215a6f5443ea8c1",
"node_modules/.bin/mime.ps1": "5ef323628f61e2e003bd818f3f0d0da5",
"node_modules/accepts/HISTORY.md": "a5ab659ea52c189a52686b7b2d0aaa2e",
"node_modules/accepts/index.js": "4fe4d2c90a2fd19d6e97443a7d24f815",
"node_modules/accepts/LICENSE": "bf1f9ad1e2e1d507aef4883fff7103de",
"node_modules/accepts/package.json": "38b6f248b9132438a198ca77196d7c9d",
"node_modules/accepts/README.md": "9e6a0252de997173ebb7a3ff44a785b8",
"node_modules/array-flatten/array-flatten.js": "4b17fa06c54846b686b8b799e9dd253a",
"node_modules/array-flatten/LICENSE": "44088ba57cb871a58add36ce51b8de08",
"node_modules/array-flatten/package.json": "50f586d42aed0a2af20b6d5ad0bdfa2d",
"node_modules/array-flatten/README.md": "328fdaf1ee65869341567f4fb6716e02",
"node_modules/body-parser/HISTORY.md": "fdc24998caf881fb588b5dd9c564fc33",
"node_modules/body-parser/index.js": "7b203b1ba7da7e9e3824e8c0c1708ea8",
"node_modules/body-parser/lib/read.js": "046366a27279a7d65e7ae694823e76bc",
"node_modules/body-parser/lib/types/json.js": "ef0d64e8db843813870c15cd5eb1efb3",
"node_modules/body-parser/lib/types/raw.js": "acb38e4fe575afaf8d1a257e47c6e362",
"node_modules/body-parser/lib/types/text.js": "beb4ada09306f8d6435566d9e88076d3",
"node_modules/body-parser/lib/types/urlencoded.js": "906a833480ce8841bfa5aeb95b5c085f",
"node_modules/body-parser/LICENSE": "0afd201e48c7d095454eed4ac1184e40",
"node_modules/body-parser/package.json": "73dc4d55140330f60874f469f1cb1dd5",
"node_modules/body-parser/README.md": "0b6a422b2b1b220d6f54adea76b538d5",
"node_modules/bytes/History.md": "cdb58f28139f5c1c229d1bce042250da",
"node_modules/bytes/index.js": "a317b58c1896b9b1d2124bfb8886484d",
"node_modules/bytes/LICENSE": "013e95467eddb048f19a6f5b42820f86",
"node_modules/bytes/package.json": "84a677ee04f37ad679742e5715439038",
"node_modules/bytes/Readme.md": "80be7bb75739cf008ed7400efd5b0b0d",
"node_modules/content-disposition/HISTORY.md": "2fa841b0727d6434c26332a4ea07838b",
"node_modules/content-disposition/index.js": "30daea1ccaec65c195c624437fd7ea20",
"node_modules/content-disposition/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/content-disposition/package.json": "648e3a149de106b1b4e442eec4751ad6",
"node_modules/content-disposition/README.md": "64d104d47f8de5e7776a6098f29db130",
"node_modules/content-type/HISTORY.md": "bf5a18f36e5be9cfb5614c0a154d6de9",
"node_modules/content-type/index.js": "44890ac38a6cffb3d6efb5652bfce578",
"node_modules/content-type/LICENSE": "f4b767f006864f81a4901347fe4efdab",
"node_modules/content-type/package.json": "1c18c6d2c27391f290dbf5bf4b9d87f3",
"node_modules/content-type/README.md": "7dd3c3a8fa71a08b63a4cc4c26b67fc4",
"node_modules/cookie/HISTORY.md": "91a6932f361ba4272eb4c69bade2094a",
"node_modules/cookie/index.js": "7c823649d28959ab6a327bb7a75251a6",
"node_modules/cookie/LICENSE": "bc85b43b6f963e8ab3f88e63628448ca",
"node_modules/cookie/package.json": "5dcad76dc768b7de1851f9526325428b",
"node_modules/cookie/README.md": "116384f13856d5718b1d4313494dfda9",
"node_modules/cookie-signature/History.md": "dc394515ce0ad9e572acab06c54847ca",
"node_modules/cookie-signature/index.js": "a9634aa95d321b9a6d90bec5d3d23937",
"node_modules/cookie-signature/package.json": "e686ff96f5c50021abd29782284b4ed2",
"node_modules/cookie-signature/Readme.md": "57ae8b42de3dd0c1f22d5f4cf191e15a",
"node_modules/debug/CHANGELOG.md": "504a70c7eb9eba0c4b26965cf4d252c6",
"node_modules/debug/component.json": "510af4d67a35446e6dccea1429399c3a",
"node_modules/debug/karma.conf.js": "06f3babbdc43c6c4dd1493b6c1af32e2",
"node_modules/debug/LICENSE": "ddd815a475e7338b0be7a14d8ee35a99",
"node_modules/debug/Makefile": "f8739cab4ae015ee84820716a8ac193a",
"node_modules/debug/node.js": "79f3814f32362c1c6f9dbb8a1e3b01bf",
"node_modules/debug/package.json": "46f39e96f33f52e4b4c6b5cea00ddb0e",
"node_modules/debug/README.md": "03694893d682191b3c893701ba6f4a55",
"node_modules/debug/src/browser.js": "62cfee6d6dd5ffec5d3ed35073791aec",
"node_modules/debug/src/debug.js": "74bdccf347345d27fe8a4ac3add99c60",
"node_modules/debug/src/index.js": "dd13897ea2eed92695bb7e4e744a9148",
"node_modules/debug/src/inspector-log.js": "b22697b673c7c3586f22ae0206258fde",
"node_modules/debug/src/node.js": "25807a97fbb1fcc42a013abc7d7768c4",
"node_modules/depd/History.md": "bbe1469d587d6d7e5e5deb717e9aa31a",
"node_modules/depd/index.js": "fc83ac89ac144234a74ca42769f0c4c6",
"node_modules/depd/lib/browser/index.js": "5b958f39df1df069739ccd3765bad0de",
"node_modules/depd/lib/compat/callsite-tostring.js": "6b7b6b5b14ad2be86acce3d6bb4a64e6",
"node_modules/depd/lib/compat/event-listener-count.js": "12b1ddab08bda110a232d7e724fe162c",
"node_modules/depd/lib/compat/index.js": "863b7f4fae75ce11af3ce68aa7a4e962",
"node_modules/depd/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/depd/package.json": "179a23b389538e38a0e7b2b9fbc95c10",
"node_modules/depd/Readme.md": "7bdff4ed8d628fd33365a6314fa7a7d8",
"node_modules/destroy/index.js": "f16c90b1ea929c508f3be515a6a141f4",
"node_modules/destroy/LICENSE": "c8d3a30332ecb31cfaf4c0a06da18f5c",
"node_modules/destroy/package.json": "33e41e81108d85310fbdea7e60909695",
"node_modules/destroy/README.md": "1781169baa24e5f44c7ad740f3d71df9",
"node_modules/ee-first/index.js": "e7a3f46d4b903c9f8a025cb753b1a538",
"node_modules/ee-first/LICENSE": "c8d3a30332ecb31cfaf4c0a06da18f5c",
"node_modules/ee-first/package.json": "a57122fff346d0713e3cf41a481243ff",
"node_modules/ee-first/README.md": "8591e9d47fb8574f4a99ac3de242b3cc",
"node_modules/encodeurl/HISTORY.md": "6af548dfa20004d203a20ca28f0ded82",
"node_modules/encodeurl/index.js": "b90cf71779f72e14be703a4e494e968c",
"node_modules/encodeurl/LICENSE": "272621efa0ff4f18a73221e49ab60654",
"node_modules/encodeurl/package.json": "9410a382040cc3c3e512fd2d23015e8b",
"node_modules/encodeurl/README.md": "927f12b955e3abfe907852d1ab957002",
"node_modules/escape-html/index.js": "0c95e46d0f08bd96b93cfbea66888afc",
"node_modules/escape-html/LICENSE": "f8746101546eeb9e4f6de64bb8bdf595",
"node_modules/escape-html/package.json": "44ca49038d60261bc380dbf502c37cd2",
"node_modules/escape-html/Readme.md": "79c73d9ec4ca382fa642702f356b4046",
"node_modules/etag/HISTORY.md": "959d386c253288fd5dd2dc4765efa273",
"node_modules/etag/index.js": "8eaca1927e67861a7682b7b2c0906ef1",
"node_modules/etag/LICENSE": "6e8686b7b13dd7ac8733645a81842c4a",
"node_modules/etag/package.json": "40384b96e1ad6e2f264a26a5d04a06b6",
"node_modules/etag/README.md": "89c2c0f9f52f551591bfc484e9e4a5bb",
"node_modules/express/History.md": "7096ebc3aca3b6bb3b8a2f6766915631",
"node_modules/express/index.js": "866e37a4d9fb8799d5415d32ac413465",
"node_modules/express/lib/application.js": "569b549e619807c5cd58ab89d7e81109",
"node_modules/express/lib/express.js": "d467bc485eddf6d38278bc6b1dc16389",
"node_modules/express/lib/middleware/init.js": "3711ae7ea348d39a41c5139a63e89c12",
"node_modules/express/lib/middleware/query.js": "a6e9a6c92c5bfdd9d7b08b267a3b1d44",
"node_modules/express/lib/request.js": "4f3a3b078531e551c6784f08a7ea02e4",
"node_modules/express/lib/response.js": "b5a9b48bef9b072a350d0b8737d54bbf",
"node_modules/express/lib/router/index.js": "c11694deadcecb691f6860a530cc7472",
"node_modules/express/lib/router/layer.js": "c6e16965ef05cc02cfee78022496abab",
"node_modules/express/lib/router/route.js": "be5fcf9a22c2524e813c9a79effb4610",
"node_modules/express/lib/utils.js": "23899065325f9a3b0501bccc5231be8d",
"node_modules/express/lib/view.js": "91c7455190f39cc30d0c5d4627d701fd",
"node_modules/express/LICENSE": "5513c00a5c36cd361da863dd9aa8875d",
"node_modules/express/package.json": "1785504a82233d90ec525ba636e122f7",
"node_modules/express/Readme.md": "5012106533bf4472fcbaf4dc77912023",
"node_modules/finalhandler/HISTORY.md": "307cefb319b745bc613eefb9efa80e5b",
"node_modules/finalhandler/index.js": "a3444524d4b81aeec8b0be8b54cefd24",
"node_modules/finalhandler/LICENSE": "b506956e5cbfbe0d04f8a5c40107ec89",
"node_modules/finalhandler/package.json": "aaff0563d1d97db18396439f9764e7c4",
"node_modules/finalhandler/README.md": "8358f10f677962dbb488edd7d1019aa7",
"node_modules/forwarded/HISTORY.md": "3928ce4ac62e3040d60e43b7216e6305",
"node_modules/forwarded/index.js": "533f21ced73e5093ecccaf516a54eb0c",
"node_modules/forwarded/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/forwarded/package.json": "936b66b90d1405af1675c4e2088f7c57",
"node_modules/forwarded/README.md": "0e968e9ff49393a7754106edf1735697",
"node_modules/fresh/HISTORY.md": "47e08786429a2f1a69b5d251e51a9d16",
"node_modules/fresh/index.js": "57dbafb6c310ce7063690f5688acedd5",
"node_modules/fresh/LICENSE": "373c2cf0978b37e434394a43b4cbbdb4",
"node_modules/fresh/package.json": "fb789f6e6d66d7b3d78634ed23cb60c8",
"node_modules/fresh/README.md": "2409eba75b77a1b1258045cd372b4b6e",
"node_modules/http-errors/HISTORY.md": "54bff0d52f53f60163559b7b466172b5",
"node_modules/http-errors/index.js": "1eb9f6e0a67d3a37f02d9f98cf9163cc",
"node_modules/http-errors/LICENSE": "607209623abfcc77b9098f71a0ef52f9",
"node_modules/http-errors/package.json": "7eb46a9c5fb9af853fc95ff62ed3a145",
"node_modules/http-errors/README.md": "ca084980372754c3b5251fd2172af981",
"node_modules/iconv-lite/Changelog.md": "11f7c1fc239799ded47d06c8abd91b9b",
"node_modules/iconv-lite/encodings/dbcs-codec.js": "6decbcdfe2ba5ed5c3a75466ce94cdfc",
"node_modules/iconv-lite/encodings/dbcs-data.js": "e56d3d57df85dc818087254a8a16a699",
"node_modules/iconv-lite/encodings/index.js": "7a13671a7fbc74c463377b3cda863503",
"node_modules/iconv-lite/encodings/internal.js": "701b0858fb6fa82101365d81d7406f04",
"node_modules/iconv-lite/encodings/sbcs-codec.js": "6f257833a4d930eaa9af9225faef16b8",
"node_modules/iconv-lite/encodings/sbcs-data-generated.js": "78c27d9268d36644ac77b82b956f5b1f",
"node_modules/iconv-lite/encodings/sbcs-data.js": "336be4eda323a03b88d06985f15c3524",
"node_modules/iconv-lite/encodings/tables/big5-added.json": "f29eda07f68f9e3f234638d42956f9ab",
"node_modules/iconv-lite/encodings/tables/cp936.json": "9eae47acf0b20461508fdc4506bd905e",
"node_modules/iconv-lite/encodings/tables/cp949.json": "d99876b274d44fc737c8495ba36b3784",
"node_modules/iconv-lite/encodings/tables/cp950.json": "15d09686ce9e9ba80b3014d3161e2e7e",
"node_modules/iconv-lite/encodings/tables/eucjp.json": "98d5cf16fc6b791a0b2c829339766d16",
"node_modules/iconv-lite/encodings/tables/gb18030-ranges.json": "4fbec8c88acbb1ef60a5aebf9e8e719b",
"node_modules/iconv-lite/encodings/tables/gbk-added.json": "ef78bd5dab20daf8c2bb6c34e5b66bff",
"node_modules/iconv-lite/encodings/tables/shiftjis.json": "6d542ffdf3409fd2e8bd01247777b6f7",
"node_modules/iconv-lite/encodings/utf16.js": "7ad12158af65189b85796de64923f031",
"node_modules/iconv-lite/encodings/utf7.js": "cf6746c76930fe21a716ef03d700b208",
"node_modules/iconv-lite/lib/bom-handling.js": "7b3d4519f05bf0cc8d70a4d950c72c55",
"node_modules/iconv-lite/lib/extend-node.js": "24ac97737522b61c26b830d350cfcaea",
"node_modules/iconv-lite/lib/index.d.ts": "083c701ad23d900ab019a2e094158898",
"node_modules/iconv-lite/lib/index.js": "c1da5b53fa60006bc973dc785bed2ca6",
"node_modules/iconv-lite/lib/streams.js": "8628e41438801c5bfdabf3be9b1ff548",
"node_modules/iconv-lite/LICENSE": "f942263d98f0d75e0e0101884e86261d",
"node_modules/iconv-lite/package.json": "c5fbb3a41ac2a5dd6111779a592bc0ab",
"node_modules/iconv-lite/README.md": "011c8d9193893a9aa6ab12469e808399",
"node_modules/inherits/inherits.js": "09b210610125b162700734fb93dc892c",
"node_modules/inherits/inherits_browser.js": "7c26fc24b695f2afbc284bbd5f64d6a4",
"node_modules/inherits/LICENSE": "5b2ef2247af6d355ae9d9f988092d470",
"node_modules/inherits/package.json": "79d9e22b8cd3e890ce9760bd6b858a84",
"node_modules/inherits/README.md": "de7eab94959b05c9765cad499ab092db",
"node_modules/ipaddr.js/ipaddr.min.js": "25cbb7a40252e3e2004437b72e1eaee5",
"node_modules/ipaddr.js/lib/ipaddr.js": "faea7806284886c6c63a41c247008fbd",
"node_modules/ipaddr.js/lib/ipaddr.js.d.ts": "69fe76ecec2eb98cd45f17ec7dc7393b",
"node_modules/ipaddr.js/LICENSE": "88f60a4b6e44cb849b5d907a7664c0ef",
"node_modules/ipaddr.js/package.json": "1c6c0f38d6656dc432efe0b2c607a9ba",
"node_modules/ipaddr.js/README.md": "6782f9a6accf829084c303895a2c26a9",
"node_modules/media-typer/HISTORY.md": "370be51f8776b7e79b16228f7dc6762a",
"node_modules/media-typer/index.js": "ef1845377cbbf76edd411a370738ed2b",
"node_modules/media-typer/LICENSE": "c6e0ce1e688c5ff16db06b7259e9cd20",
"node_modules/media-typer/package.json": "30e8d36d983713a7d098ac5a538f0315",
"node_modules/media-typer/README.md": "6e254e8ccc8ce7eaf9cdd8e5852d7bdf",
"node_modules/merge-descriptors/HISTORY.md": "ed8bad35fde048c49302f3138bc4ec7b",
"node_modules/merge-descriptors/index.js": "b4d3859e603602c87a45682862055af0",
"node_modules/merge-descriptors/LICENSE": "aaf57ba8c5c9bf256fea7e943991a81a",
"node_modules/merge-descriptors/package.json": "e7a06e907deefcf1ff437eab6fd42f8a",
"node_modules/merge-descriptors/README.md": "92a3bcc5f7e8a33de24b60bd6ca5c33f",
"node_modules/methods/HISTORY.md": "0355fb5e6662ffcdf19e5f736882f34d",
"node_modules/methods/index.js": "17d4a4ba378c1fd10dcfd061439f7ea0",
"node_modules/methods/LICENSE": "c16a7dd9f946172f07086576d135d9d3",
"node_modules/methods/package.json": "ce81d92f427d1176ff05acc744be86dc",
"node_modules/methods/README.md": "882a4df2d7dc4b518fd3bb8c85e1c652",
"node_modules/mime/CHANGELOG.md": "90baac6a6f8d7e4a7dc0b15bb7a6ce65",
"node_modules/mime/cli.js": "d028184965062ef86cdcfe246753ef27",
"node_modules/mime/LICENSE": "8e8ea2ad138ce468f8570a0edbadea65",
"node_modules/mime/mime.js": "2930e6caad95dfad928d76fc1eb2e003",
"node_modules/mime/package.json": "241073868c1df53f93e879897a547a83",
"node_modules/mime/README.md": "72cfb57e293629e482629af74f4a92fd",
"node_modules/mime/src/build.js": "daf164e6d251c818b190db781f845776",
"node_modules/mime/src/test.js": "e79c602593f0f279e1cb2d8d4a3ce3bf",
"node_modules/mime/types.json": "4ac089e4f393ed139cb2ee55726c66a5",
"node_modules/mime-db/db.json": "9a29c7f3e6c0275efa9cc5a328185624",
"node_modules/mime-db/HISTORY.md": "26f71195531be360862c90bc3f8c8a00",
"node_modules/mime-db/index.js": "a3e41e93954b3742ed84d3050d6038cf",
"node_modules/mime-db/LICENSE": "c8d3a30332ecb31cfaf4c0a06da18f5c",
"node_modules/mime-db/package.json": "7cbbb313157aaf966d9b2e8fd4693705",
"node_modules/mime-db/README.md": "6f6c25c4b6273f38ec4986d8a12101e4",
"node_modules/mime-types/HISTORY.md": "3cdd6210968467b71940a7bc3f8a142d",
"node_modules/mime-types/index.js": "bf015bb6811afc5c98e3e5f7072fdc79",
"node_modules/mime-types/LICENSE": "bf1f9ad1e2e1d507aef4883fff7103de",
"node_modules/mime-types/package.json": "652d3c0faaa3a86a5bbae1dd218d47be",
"node_modules/mime-types/README.md": "9926edd395b9c9c2ef8e1ce166fc2a15",
"node_modules/ms/index.js": "ae157c9a8e70902576c2d8a06dbcde32",
"node_modules/ms/license.md": "fd56fd5f1860961dfa92d313167c37a6",
"node_modules/ms/package.json": "e63fb80f15b71923e1f25d8355e4f2a3",
"node_modules/ms/readme.md": "90e631c6afccde3ed414d3d230734864",
"node_modules/negotiator/HISTORY.md": "9286f41017a183d586addf8609bcb2bd",
"node_modules/negotiator/index.js": "9ed619fb70c6bc360f3908dd90a79046",
"node_modules/negotiator/lib/charset.js": "7977a65b1542fa8ce9650e58607f4b07",
"node_modules/negotiator/lib/encoding.js": "e03dd226452c58ce083ab4468851f0b1",
"node_modules/negotiator/lib/language.js": "4538455326d31cc086bb901f7e3b83fc",
"node_modules/negotiator/lib/mediaType.js": "0fdaa0ed7cab2ce5fcbd7b361a85892c",
"node_modules/negotiator/LICENSE": "6417a862a5e35c17c904d9dda2cbd499",
"node_modules/negotiator/package.json": "ce9189d6fd3be69fb06cba64feca0b5a",
"node_modules/negotiator/README.md": "2b89b1a3e31c185b5cea428ebd5569d9",
"node_modules/on-finished/HISTORY.md": "58ca467c6ca386064f1d5832c9c03b95",
"node_modules/on-finished/index.js": "befdf51b0f78ec7b5e61fe648aa9df75",
"node_modules/on-finished/LICENSE": "1b1f7f9cec194121fdf616b971df7a7b",
"node_modules/on-finished/package.json": "c380f386d89f08c6e70dd05cfa7f3efc",
"node_modules/on-finished/README.md": "a3c532cc93a36f95dc4f19a0ecce50df",
"node_modules/parseurl/HISTORY.md": "0f7f38fa8d79e3bf70557ef4a655d412",
"node_modules/parseurl/index.js": "3750351b6b1aa7f3e65d5499ea45006e",
"node_modules/parseurl/LICENSE": "e7842ed4f188e53e53c3e8d9c4807e89",
"node_modules/parseurl/package.json": "5070c62e533964c141d7dd29259b1b3d",
"node_modules/parseurl/README.md": "59555697a7f93937af7f76fe5326fa0d",
"node_modules/path-to-regexp/History.md": "9f6ae1a279c6994a01a2ec44294cb607",
"node_modules/path-to-regexp/index.js": "cb184302e8d26369e9c0392fa4c8d0cb",
"node_modules/path-to-regexp/LICENSE": "44088ba57cb871a58add36ce51b8de08",
"node_modules/path-to-regexp/package.json": "1603fa447bf7cf850864f4d50974ac65",
"node_modules/path-to-regexp/Readme.md": "ec68cdeaf09933d8bf7a962c261aed81",
"node_modules/proxy-addr/HISTORY.md": "454085667c440fdcc9b650e71ccf3f2e",
"node_modules/proxy-addr/index.js": "0ec33ea2ccb3a107c666a0b311f0e28e",
"node_modules/proxy-addr/LICENSE": "6e8686b7b13dd7ac8733645a81842c4a",
"node_modules/proxy-addr/package.json": "fa5a82e86718c28d2ecb01de5cd2fb08",
"node_modules/proxy-addr/README.md": "25a3eea3d57b45c4e33ff8605d469f89",
"node_modules/qs/CHANGELOG.md": "cccf4ef4f2c9ef63008645c88cb73f82",
"node_modules/qs/dist/qs.js": "61970fed53534892319f5d11d9ea3281",
"node_modules/qs/lib/formats.js": "547b7a8b6b81236db977dcd1a548c9e8",
"node_modules/qs/lib/index.js": "1459a9952f6b500d24818bb6e3e37368",
"node_modules/qs/lib/parse.js": "e8d7396234ffb4c2772844eb86e52ce5",
"node_modules/qs/lib/stringify.js": "98adbcd903baa8d38e70aa4f7384fc9f",
"node_modules/qs/lib/utils.js": "9231894a95b9eb149920c7711a1ba6ba",
"node_modules/qs/LICENSE": "d5c7c6dc45a33a0a9620ed81315672d7",
"node_modules/qs/package.json": "277cd5bcae2ca03c21049ae23860d5f6",
"node_modules/qs/README.md": "0b7348e09324003311fba7c55e710f3c",
"node_modules/qs/test/index.js": "16c8338cc83b85a875270f50ac1e4ed6",
"node_modules/qs/test/parse.js": "fe15b5909c82c908b1b92d89d9695aae",
"node_modules/qs/test/stringify.js": "7270ccf1e92b2ecd35b92d526e12526b",
"node_modules/qs/test/utils.js": "6a378244218f385cdd20d6dc3b49b567",
"node_modules/range-parser/HISTORY.md": "6fdb98eb13b0d3dd31f0ff795be6a52b",
"node_modules/range-parser/index.js": "e72576333d27d1c9b3901c4b9e597f27",
"node_modules/range-parser/LICENSE": "d4246fb961a4f121eef5ffca47f0b010",
"node_modules/range-parser/package.json": "33218f7c2939943005dcafeed6f8760d",
"node_modules/range-parser/README.md": "f4b241a4d3c3eac1d542759d73164083",
"node_modules/raw-body/HISTORY.md": "941e8b9351551d9635b1f58eed0ea138",
"node_modules/raw-body/index.d.ts": "ee9c2c994cbbc6d6e96d6460488ae4f1",
"node_modules/raw-body/index.js": "baf003bb8c6c6fc1cffe0d4afe787e21",
"node_modules/raw-body/LICENSE": "c970d30155ebbdb1903e6de8c0666e18",
"node_modules/raw-body/package.json": "df88248eddbec518e7528fc87f32f386",
"node_modules/raw-body/README.md": "f0bbd92a99e34ac64ba86f1853eec8e0",
"node_modules/safe-buffer/index.d.ts": "372fa012d04e945ab97c27e000f8df78",
"node_modules/safe-buffer/index.js": "b1622ff2944ba3f13a1cf6fbcf0f9e3f",
"node_modules/safe-buffer/LICENSE": "badd5e91c737e7ffdf10b40c1f907761",
"node_modules/safe-buffer/package.json": "5c5c3343f31fa19f334d828d03e8d0ae",
"node_modules/safe-buffer/README.md": "570381ffb15269fa623a0b75e67eb63a",
"node_modules/safer-buffer/dangerous.js": "7557e84f2db56a79916613053f9297d6",
"node_modules/safer-buffer/LICENSE": "3baebc2a17b8f5bff04882cd0dc0f76e",
"node_modules/safer-buffer/package.json": "3c523ea2bf2217e00cbd6d16f5a0c438",
"node_modules/safer-buffer/Porting-Buffer.md": "fcaa030e67b1d41e34571b602a343f72",
"node_modules/safer-buffer/Readme.md": "b65f4b9724ff4c546ee7d4820e3c91dc",
"node_modules/safer-buffer/safer.js": "b548fa7365e81d472250949a6b4ccc69",
"node_modules/safer-buffer/tests.js": "373f9327325c35bb109038dc3b8e5a14",
"node_modules/send/HISTORY.md": "4f5680a2dbc10cfc2dd07af3169bf474",
"node_modules/send/index.js": "edf8ff5c77445e2bd6e21cfa4bf6deab",
"node_modules/send/LICENSE": "df2b0938eba0709b77ac937e2d552b7a",
"node_modules/send/node_modules/ms/index.js": "52620b13382ca384cbe89011c4b16460",
"node_modules/send/node_modules/ms/license.md": "fd56fd5f1860961dfa92d313167c37a6",
"node_modules/send/node_modules/ms/package.json": "180d4782bf138bcc07b61b9db130d428",
"node_modules/send/node_modules/ms/readme.md": "b68b70253368a0c383cd67171269fb00",
"node_modules/send/package.json": "faf6b3e360eeace557407978f8028fa4",
"node_modules/send/README.md": "5793eb6b10ef0df065e01c8a0e5c35ba",
"node_modules/serve-static/HISTORY.md": "42a409931684070e79db555331ce7178",
"node_modules/serve-static/index.js": "3707f8d6ee2c6d88ffab23c0c4f1509b",
"node_modules/serve-static/LICENSE": "27b1707520b14d0bc890f4e75cd387b0",
"node_modules/serve-static/package.json": "451949b53c691d07660aecadbaa6535f",
"node_modules/serve-static/README.md": "82cd51b8e01130ac88fe4cd9c9ea972d",
"node_modules/setprototypeof/index.d.ts": "9b4107177bcdb4f9438d31bf446f629f",
"node_modules/setprototypeof/index.js": "dd15d377665805ff7251e0a0f52fb837",
"node_modules/setprototypeof/LICENSE": "4846f1626304c2c0f806a539bbc7d54a",
"node_modules/setprototypeof/package.json": "f0190175ff5b087fd00ece88e0f19799",
"node_modules/setprototypeof/README.md": "5fffc64ea56408057a5ccd7f84f8b050",
"node_modules/setprototypeof/test/index.js": "057b874f30e15981324966ff9294dbe5",
"node_modules/statuses/codes.json": "24a60aa6f42d759204b75dc8ecc0ecf4",
"node_modules/statuses/HISTORY.md": "59a03d6bdd1d4de4888fae4450f8bd61",
"node_modules/statuses/index.js": "93ef82ab57885976022f1b594741dc19",
"node_modules/statuses/LICENSE": "36e2bc837ce69a98cc33a9e140d457e5",
"node_modules/statuses/package.json": "37e54003d951c7fc5e01b28943aee7d0",
"node_modules/statuses/README.md": "b24bdc13faa92fbcf1fe2cf6a63d098a",
"node_modules/toidentifier/index.js": "279de9b706fd68a63d92cb4bc364c772",
"node_modules/toidentifier/LICENSE": "1a261071a044d02eb6f2bb47f51a3502",
"node_modules/toidentifier/package.json": "5436a3f9539a4078271bd91ac0cbeab9",
"node_modules/toidentifier/README.md": "fd789409142ed442ccec71e57b173376",
"node_modules/type-is/HISTORY.md": "6025a974d281159ed5421301b58fd126",
"node_modules/type-is/index.js": "f9aa3afdc332adae59aa21d31090582d",
"node_modules/type-is/LICENSE": "0afd201e48c7d095454eed4ac1184e40",
"node_modules/type-is/package.json": "8b534924cd826d05e7de6e52dce4fd1a",
"node_modules/type-is/README.md": "2683527a9b2faadd364a0eab9cc00935",
"node_modules/unpipe/HISTORY.md": "3e523df8ac60d8c162c57521955bda8c",
"node_modules/unpipe/index.js": "377f0c4bddbbd7e73b32a53e687df342",
"node_modules/unpipe/LICENSE": "934ab86a8ab081ea0326add08d550739",
"node_modules/unpipe/package.json": "84a2f5a2f881155108a0f76cabd1d199",
"node_modules/unpipe/README.md": "b242ac151ac9750bf7ca20fe02dcf7b0",
"node_modules/utils-merge/index.js": "20d03f8bf4486091c44f17a97cbb6c24",
"node_modules/utils-merge/LICENSE": "1cf0906082187f374cb9a63c54eb782c",
"node_modules/utils-merge/package.json": "915aa36a3deaac93fb1b7249ad2f27b4",
"node_modules/utils-merge/README.md": "9e6a49a7623199d699f595777116296f",
"node_modules/vary/HISTORY.md": "01fb6033779e4f75d95e327672ebd572",
"node_modules/vary/index.js": "8217c2d942ee5bf6866c92662515d975",
"node_modules/vary/LICENSE": "13babc4f212ce635d68da544339c962b",
"node_modules/vary/package.json": "1c1048b6972ca2c9a5260116a6e27329",
"node_modules/vary/README.md": "d7add56e89e476e09f62ad4a926f1f7a",
"package-lock.json": "ddcbdce211512a2b9daf86d6b5eaffa6",
"package.json": "9896cb327e5b4ed4b31d3e181ad442dc",
"server.js": "64b04541eca837b1245fd25a8735cfd6",
"version.json": "d6b0c0a111b910e238330eed750aa8ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
