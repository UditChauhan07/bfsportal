'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9e759a692c96ab84d965e659c5b473a6",
".git/config": "81597746e2850defddde3684d01a0c16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de52c3977f3ded4c2829f41004e8f880",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19dfcf80e6ad309a4c4bca188d274279",
".git/logs/refs/heads/main": "f12bb447698b3f0ce7197378febfc5a9",
".git/logs/refs/remotes/bfs/latest": "db06584095c3e2a6cc9fbbc85d14d692",
".git/logs/refs/remotes/bfs/main": "8f9d9098b9dd0f72983693f4506907d6",
".git/objects/02/ff70ed12d48b2ced0747bd55c671285c88846f": "90d92ca76b4fa4de9a86bb94aef24dbd",
".git/objects/04/01bcd3e960df67b0124ad820b373e1f549923c": "1cfe4645f9e8b4aea7be5c9e6bdf592e",
".git/objects/04/c90324ceec06f4c73d466f8215d14af95db8f7": "af811c0d96445f0dd8eec01c52859cd3",
".git/objects/05/9d6a9bf135c88adccb48b5d02d394ef3d117d0": "d495e35cefe5d63d444b0ab237ebdd89",
".git/objects/06/02c4d73964aa147edad3a07ae7790be66210a8": "33fb37073b1f9172e19ac54588fb340e",
".git/objects/06/c3604d64a118307ff8f321a7d27ce5adaa9067": "7401f76fefc0710ba1da54a5caa45062",
".git/objects/08/7072b7fe2e603f2e1ca9c46ab34011fdf576cd": "4787645ce3af6588229d7cfed0a01060",
".git/objects/08/cc5ce9124be7e90095c2f394127bde081c66d9": "5e27e03b223024e06a31c5b4342a9617",
".git/objects/09/9378654c9efb2cd074ef4461868a4f4a8e44b4": "3843969666dbaa8bfde6a172d4e23a5b",
".git/objects/0a/29f0e07781616bbface809113c534b5a58a1d4": "658952b4d06f0c5be431d54a89096837",
".git/objects/0a/31f23f38426bb95becfca5ae3694be21ac9702": "0459a53abdabd074dcc4b66965523f74",
".git/objects/0a/e17ad890b4678f4d06adf89e22031f5414b524": "f161e041bbbf8cf9c07ba6beb2f41e65",
".git/objects/0b/56eefc96b681d490d4101979c1cbf1fbfa0209": "5cd0cf0c4fdcdb3b95a3e9a16fce3542",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0d/ad7dff80ed8a04ae463f1f3465592db319d6d0": "1726c35c6d55302561d6231b53b1d697",
".git/objects/0e/8dff553b7382f967a4c388d4b74ea56b564571": "b467163fdc0c630ad1bf589635e4330c",
".git/objects/0f/4f785e3ecca11f8334eb90a8ed92bfa84bb229": "c2f9ad8f5eb6a4feee1cebdd0f4061ad",
".git/objects/11/09cb05ae9b4b2ece7416e34b980d8f3f8c3138": "5ef8c644a9ac0585e9f8fd853b9d56f5",
".git/objects/12/0f57284964dcf70f2b4dcfb06aaf311d2a84e0": "a4f88b4c78a192c4f73b483066bcc334",
".git/objects/13/33f8ef5828d5c18d7e23b5aa87886ad0c834d9": "b027074e0c027fcb918762cb0ed4e25e",
".git/objects/13/3f1c33dca980a7ae96161a9f5eab0f969258d9": "e0cbb539688e270203430a2f3bc55556",
".git/objects/13/8dabcea8e21c4a5fd8c899f550e8cb02252d93": "c166f297869abbf934d6f59aade32e1d",
".git/objects/14/5b7be096c5f6e688257fdd0a5c4c9beeaf850c": "be75f692a5facf50c8c17d9bcf694fff",
".git/objects/15/7c3338f7acae2e61b8844a54bd9a000ed35afd": "1a56f46c56c70ff03b348833b5a1cb3b",
".git/objects/15/aeb98048c566d479f23a249a46d8507b654243": "dd51ecb08a89c94135c93d08463cb56b",
".git/objects/16/cbb67b1376df11f86ee4df595b683af84f4bc3": "75315dcdf1488f797c7b37561b422f05",
".git/objects/17/0a8a1231d402116319c6f16fbe2fa905b15476": "b47da3d710bf477f3de29b1c3da6d587",
".git/objects/18/33cdfaae145e4b593674d844bce12a20fd3a29": "1b8087f2550c448e9816625ba86a1f56",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/41746c518a0c1c0cf55752a93dbe240f68ebea": "e083a5c04baccf51da73dc8056d9a72a",
".git/objects/1c/99b9a7b946481f998b7210f4484e404e027489": "ad2cfac1cc949abcf58bef4ac0d24ac3",
".git/objects/1c/c21e4fdf4d69c9334f8417a9d5fc58dddeda69": "c75a1c2c23f3518fc065a8e3fc70637a",
".git/objects/1d/7fac48a33aa9767605cbd78e0024c4313d512f": "aaaf19af366e7ee217dfd0464f97a56f",
".git/objects/1d/7fb1d68b9570c375df02cc3e06b0da83ac219a": "79594797d22b181fa295f68b193174b9",
".git/objects/1d/91afb28b090c318081ef0d4614a110d15e2fd6": "ef61c0a8baa3157fa02fa42e4302c428",
".git/objects/1e/141005036bd64b10be0702e98a902dc8a1cdab": "745f61271ae6c43ef39a3a51a8707f4e",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/c1406353f227585851ad0c025f487a01ffbe78": "e7e9b07925f9f1c48ea523ea03468233",
".git/objects/21/3d4d1c96b29e772dd1ebe534cf6059f20663b7": "f2735b880caa1031d6d237c7566483f7",
".git/objects/23/8e91b285add547f2ffbdb5b7806abb34373197": "fa39472c16801208edfd98a83bd50856",
".git/objects/25/3c037b6b82107c745c179cfcf859383cc7deb0": "9c1060cae03893baff9cb89ce13c2bb2",
".git/objects/26/edda19b6143887ad33efb66c753314c9fd5d35": "5f5d3e9184012151e225ba44e0aad6b1",
".git/objects/27/fb49832fc4ff7479d5e9100b6cd231ae2014a4": "011f0bb570409fe0fa06cb5dc8e5b486",
".git/objects/28/5ca4577bc8b9f456e7d9661cad2e230c828b9a": "01fc3beaab8a380770e41fabeb202c9d",
".git/objects/28/81d2c036d3e28003aad9c9f8adc34e40c11d98": "b64b26e14513b7280f7b9b0ad880f30d",
".git/objects/29/24e07ab27fbb929afb03a0efdcb88ddb36e2e4": "6c0684876a738f5419718b1b9a337871",
".git/objects/2a/bb8179717832259929e574c4ee1549746d9bdd": "8a4c59ac4de49b98296109630a57cbd4",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/9152f47612d19ae245f28f25e08f9f958da144": "e986f974de0c92ced6566c66f8c9c9df",
".git/objects/2c/5b58fa03889175499d21193acbba5de5fd9508": "062414534b8aba4e5ab30e26f3f2ed4a",
".git/objects/2d/6374664520d7bc5ee34dc308d725d4c6422e85": "a38b9a5dc0ccc3240a98b81c74e307db",
".git/objects/2e/0594fd87d269314af9baf14fb01ecf9e87b261": "becf4da1709c1f5de9b89001c2672964",
".git/objects/2e/6a5b2743b651fe08029447e225c63c3c3fea98": "d18cac68e9baf094bbf6f3881cda8318",
".git/objects/2e/71b37bb1f4c301c6d30c62cab78a9a3727a777": "7b9db51066e241e1854deda34e573b2d",
".git/objects/30/a9ac77674d0a4d072bc9eed5ac5db82ac292f0": "bfb991352ba9cd47f640e5e4e7d6e8dc",
".git/objects/31/e46388f89100b55984aac2b588865ca437df30": "efeee11473d8efdd2bb9f646e29d5ab6",
".git/objects/32/2e1c156765211b26043bee54b9700498a0c6b0": "a19495dd06a8f3ddef3355d9d6deb9dd",
".git/objects/35/644182590996bc48a42c7dddc46b2e46336347": "7004be066a7daefec009a5eb25242e5e",
".git/objects/36/b798693d3ae80ff64a74d7970b9cfa96329623": "ac62d37fcf6cc6c842f1a38678759a7e",
".git/objects/36/fd477ef519f2942890f453fc81bda9f063d346": "0b04b81af1468094df45b340b283d96b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/5ac3bd33e8da173401b20dc6396ce534d14bf2": "87d1d6b178c6a17640691555abd409dc",
".git/objects/38/afc665704210bf217799a39e8be0f50bf9fbe2": "1df6627b6949bc82ab3d88ac448306f9",
".git/objects/3b/ce10818cfd6b90407079904bbba549cb098b61": "724fa8cf2df8914dfbe71c788bc214d8",
".git/objects/3c/d2bff996ce5cb6eb19764845b1d6909e70b99f": "4e32e3366518e6444a20903db3ba8fec",
".git/objects/3c/d9d73976d6d38372057da4bad23717d5bc0fc7": "b5a49ddbd50176080a19b40bd3c1afe2",
".git/objects/3f/24fb23dc6e93f67a1cb9f8e51fcde59a41ac0b": "28f6ca1ed52355a0b13d91838c05ec59",
".git/objects/3f/37727aa3b62b8aab8b0c83023bb616532631ed": "a8a3ab469049c033d8f3b8e0b73166c6",
".git/objects/3f/5dc9ebdc1d40da50aaf721168e27b6e88a2f84": "a1a98aa090a1b222965f0b6486c7a08f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/d379f9858c8026cab4c0bb43a2957316e38270": "da486419dad49da955d965c6a690e487",
".git/objects/43/15bce4e07565535167f00cbdead5d8bdbf9ed5": "0e6054eea90d316bcccac1917b7925b6",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/44/0811974a1d29ef9cfb929a6a1bd02a36f8f9c1": "17cb1cc91f227d0e6d6653be3f131400",
".git/objects/45/242dfdac1269e44d30b4264a61baa40fa54734": "663ab03ca0e3779026b80cbec6f00ebc",
".git/objects/47/092c92f0f0fa53b9047c4799d763232cc90877": "70c2af583f7e39f2a7784bb2abdff3a1",
".git/objects/47/193e2c31cb9192644de9def6aec90039da0195": "f7415be609445b6e88273be37315b221",
".git/objects/48/262ca0821e0c755f64d604087b6561776d9c0e": "6c849fd2cb20612175607eafe0a026b1",
".git/objects/4a/4c18deef228fae1ce6d0017d276e1ffe6353b6": "64d0ffabad58b99c9cd3c0117001b425",
".git/objects/4c/cfa0a4d7674b82690df707c8f5b81632206794": "0c0c5cb281a86d3f5cc7d67076f6fb9d",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/50/b50fdc399ec123ec2d1a4be1841780d18b6aec": "87766bf1f723d9f6da361d7534a0887d",
".git/objects/52/5628d575bba3814f73ba3c75bd1b3dbacfda54": "1fde9e5791dd750264e98b4560a464d1",
".git/objects/52/5ad2a45ba12a7757315b300d7442f3847f6e28": "7e9d220fc599a8160e1e484c9469b7c4",
".git/objects/52/5fd28d6c4714fbfb99d18161efd7cca527571d": "d1ceebea8c71dd776dabdf7f19c0dbb4",
".git/objects/53/23eb31bd29431d5b347967609d4f6242dca1fb": "213e96760d602a14176cd67351e0e1bd",
".git/objects/53/ed4e06e1f370237b016f94247216382ea6f7b7": "a0deef260a1b41c783a88fbb3f789924",
".git/objects/54/179a060eb2cce087e8c1ea7efb1da146ba2b78": "aa8c7a97ef628b25c625b8837463e98d",
".git/objects/54/79b865be6641feaa054ae1d4f61636e22e1e70": "3ed5143d216ccb81b36c6460fb67abb8",
".git/objects/54/b0dd037e45a49f304ed47db83d9dd4caa80d44": "ad052620776296bed0d7e63f60283c7d",
".git/objects/55/1c753c88bcc0c014b39167121375b2a5170a05": "c808f3475cf17bced61dcc326ab4df79",
".git/objects/56/525a73028a455997e816cab375fc03b85e4a78": "754b2cad03e920c8326ac6c56ada596a",
".git/objects/56/aa748937490175a0ec0b850e19ae0fae844a6e": "04a93063341b5319419ecbcca084c195",
".git/objects/57/e4dff8013c29ad9f3df99cc6cc985aa98235a8": "d02f417797cdaeabd2e1bb24537823c9",
".git/objects/58/8dcd2fd49a386e0cb14e464c3253d8ac2c3d27": "4ff817b107aaad8c1b9816ba2ddaeff1",
".git/objects/59/17fbf8ddb1568f06c09c896d740d2c1df6222e": "56455fe7b052697a2ae04f3c24e0f7a4",
".git/objects/5a/2844f5916194b23dbe65510029552e02e556db": "3a0f6000aa4e5ddd407202b4846b0304",
".git/objects/5a/7a16a5e209eadeebc7999ee016c50f0382be8b": "238cd8126a47da1023cfcb3aeb0d26e9",
".git/objects/5a/967d31850db87b0c6f4d5afc54aea7458b0355": "869db6a210535a7b4f385cb6de217565",
".git/objects/5a/c4f21def13de93db52314c1e74d93fa23aacb1": "833175cedf48bee2b61bd85b0dd7fa83",
".git/objects/5b/1c467f59a05f47651e56b7e253ff20b62abb64": "5f3b32cb4095d2c525a4a575855d89af",
".git/objects/5b/43141c85cb58828e056f6ed7cc9eeb80dff01f": "7e4146e1c281f08496e9c9ddd607312f",
".git/objects/5d/0a48b7e857d46e41d5e97c8034bb06567870c6": "da716920de5c2bd7fbae2c608a9ee6dd",
".git/objects/5d/31e2494a3cf05044593b1ce227141b8ad064c9": "88430f272c2ae4f5a28d524737479b07",
".git/objects/5e/450b135989b66ad86e54d9abe3d1999f559f7e": "661e27cba518604cac7dd3c4f3a91dc4",
".git/objects/5f/f614e4668878fa20be064a3abb1b8f7765dae0": "00a309f3c550be0a49d482fab593073e",
".git/objects/60/41fb3dcc3cccb9ac4726b9f3112768431eb26a": "6956bf0b2bcbb60d94751976c56227f0",
".git/objects/60/a42a031cabd3e10ecc9743e5c1347466d08a31": "b1f324b0fea8f757be87cb96a84e7146",
".git/objects/60/fba5f2907af3a392a7a86a34267ee28abc2aee": "79e8f5357955248719bf64278ca07c7c",
".git/objects/61/4f96dcac2d8268259896d19af9e3730092eaf8": "cf23f3ffc8d3b175949f69d194fdd730",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/c43fa2f0596ddcdefd2c9fb117a3ca5417e556": "9d3b7541ef23ee3c21028163c189c35c",
".git/objects/64/5120121d0e3505a6d57062d8378af9b7213cff": "6725a8e70ec926b35d1ba3346714bf5a",
".git/objects/65/e6347518ef12be0b10541102fca48250982948": "d2f14f74436d064dcac91f44a6deea6c",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/68/7db6ff89dc1d8fe87d5415f594401b61c6b3ce": "b68ac04b6a01d494b1749a8190a0fee2",
".git/objects/68/f6266fba6592d704bd848ab5431c7062c9954e": "88b8b3e84b85f7a57c68d9246aa7a36d",
".git/objects/69/3916212f6829f68025c30db2b6ceebb091204a": "57a729551faa455a973c723a7b3c3729",
".git/objects/6b/8214d2f24a7d0cf3e6739abc4cf1b756bf21b8": "4346e872f73ed1571c74790117713d2f",
".git/objects/6c/b9c810b768e5679cf08c9567c7673e650956ee": "a102ce5cdbeb8e774b79c64a66045f17",
".git/objects/6d/f472b2407d7c2616d74a730fda4800d15027dc": "d15399605b8914aa0518a043e19d0a9f",
".git/objects/6d/fa1cb999c07caa435b01773273073ad256ca73": "89e418bc8731407d2094ccb9f215b168",
".git/objects/6f/093ceb59b794bdbd5e1927ca8990d898d8b99f": "40058048c263bfb2b3e4d8b0166b9b9c",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/1d45f2931370f0525663a05886d48b76b5fc34": "8f72bf94e7f7034ac60fd085b76fa8fc",
".git/objects/70/304fec9ddd5e78ecb867142facd06fda44e3cc": "c0feb486331df6593461a77489ee9c48",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/73/4e1b0a1bdf0fa1a1764e47fcac024fac61ca5f": "815eae0d2e9383f3996ce49a215821ce",
".git/objects/73/6f5753f04544ada1fe477897be50fea20f5e32": "158d9e4cac6c2ed38799a50bb1246c56",
".git/objects/74/edbb50250f4314523d40440dfe05bf4b755f8f": "59958a492ebcf33e53b4917c4a7c4352",
".git/objects/75/0687020043892cdc8fca06f7dee7e1f9688f33": "62a17c9ca3a2d2e1c308b04eebd343ee",
".git/objects/75/34f2efe05ff5f11c1603fd192d61b32e7eb2c6": "4dde3a6ca289fd321035d10700fd217b",
".git/objects/75/d65b4b02b823a11d07e5f322d2c72cfe557e4c": "2d17cd67f939c383949bf3f09ca1aa90",
".git/objects/76/65c777536bf76d7595e590667fd068c50e8083": "2165bfac4b30de5b54196dd36f3727d3",
".git/objects/77/8a98c1bd6e667daeab332940c948eb41a16b71": "5b6575c241b51067d3e5b765d98ec654",
".git/objects/77/b0dc9960f5bc1e05405aa30c0fc7ec54a0e177": "06969a7b71ea49eb15b042242bd830b7",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/79/81fe5f9c4142dd8bead8a978aa57b65211aaa6": "cae892338870cb501a9936a4740e56b6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0af2eaa5d18ea26d53cbc994049a6dc2a40980": "aee3e11b76200a5ee2d86b4099a61116",
".git/objects/7a/11332f1926284cbeaefcb5e86712a3d47a984f": "1c83f2e8f7a9810293097e1636254a0a",
".git/objects/7a/90af3912a46de86249e919c49ee7821a0709e7": "1171f4728092cc5145ce4362ce51b0a4",
".git/objects/7a/f25f5f3ecff65e47fbfbe4432380ca3b664fde": "0e975571899dc85bc5e0e5bdbf511912",
".git/objects/7b/0a209971de7153acc5e97a5a30c362e0e09ed1": "14c54de80df56a76b39bbf62c0390bfb",
".git/objects/7b/36b73e14f9adbcca8ea03168db3bc77ecd5ea4": "00a54edaff29206ec0f7f9598320fc89",
".git/objects/7c/0b8735ac2dee4b1ac207690ee9eb08fb1bd3ab": "89c8d7cb9dc1b7b8790d2e2a536f5ad1",
".git/objects/7c/6893e4a7b6c19e0b36ad12340480b550b3403d": "d173c67da435e21d8ab032d4cd56ff9a",
".git/objects/7c/9e9438bef5df2f72b13400317e77678e91d3b9": "8fc0c906c1fbdb71239dbf34fb0df5fb",
".git/objects/7d/b3bcbd63c6e8b9bbffa38bd5b50ecc798ef4b1": "f5b6b3af05aaca9015495cc6ebfa9749",
".git/objects/7d/d9050edc45ad0f25b90a6b5157e93011f0f228": "2d119356154f97bdb44ac777c19db198",
".git/objects/80/a2d77bca5ab78ba7996f1aebd85ebd56b60a64": "02375781756940a5232c021c3373601e",
".git/objects/80/a94382b6a52790a00b826a4cf9bb1654a3b3c9": "4296fb21de4b8be893ee68b3885c4015",
".git/objects/81/b1979947aa20ce1ab54104450fde569c0deaf1": "4601368d20a666a67f461cf2f02cebbe",
".git/objects/81/e30149f0bbaac1ffa3ec7ffa51bf95dcfb6bbf": "bc5bef47729c81acfbd8a08f69d1b7fc",
".git/objects/83/78188d00966356b83d058c9528bab3a7710cb0": "df2b8dbda9a09095dd103782e9bb7814",
".git/objects/84/384826e1563f24301a1ed405a2f5cf04936640": "547126d523f565e258f831b3e98b1d56",
".git/objects/84/aead7b5a15e932d168fe3e794fbac8a4041af1": "adc234b049da8ec77672750fbc831069",
".git/objects/84/e51a8096820404cb68ad89413785e78e860800": "5ebcce38236b45f2143de1c65df0a007",
".git/objects/87/66924c3339d4d614b9acf65c839eb55c8e53c1": "237878855b9aaf3e109f1d95a7907af0",
".git/objects/87/a1c434e5d7492098e0ed9b988ada595ac0da2a": "61fff05facbdb96a185d650119f46a96",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/84a5537523cde58cd60121c85fada8778c8751": "62eaaa01d3817dc1129c89d8a360c68d",
".git/objects/8a/0d5bfb2ba117ccdb2f064445f5a08cde8ed310": "1c7bbec32f097f775465357e3abb87ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/28300c2bc3bd6c09b200d87a1d8c8156968030": "632e265f8a0472cbafcdd726d644488d",
".git/objects/8d/2bf8b8e1e33a92c07a536a7c753e85e3cfc9a2": "52de69562d7b64e4b5269d0ea5c22bb2",
".git/objects/8f/0679f6970cd011a5d1d1ef0df3f6aa937f7831": "3afe6e63fba22d6906905d820a243278",
".git/objects/8f/1e810d742db9b80e55050364384722bf4414f3": "eb734106f316ca8f9d849d1f0e0a0bdf",
".git/objects/8f/68807183db3cf737d19c7fe306a2ce3af09069": "c0f5ec0f5722bcfff9f0986c41e70170",
".git/objects/90/5dc2b3682e6d9cba0c889832f1aacd705d532b": "d180924a6e57979ded3c6c1bced40cdf",
".git/objects/92/336888d951f9ba867b1e7d48661ac2d7cc0491": "1ecf1062b4d0f610c981d8ae0ec5c40f",
".git/objects/92/ccc64eba01b2dde78cb60fa958df77de00463e": "16b9ba41ba4a8e1ae6a09260f3f6148c",
".git/objects/93/0f19fc5a658cc78f2bef9b56678e03fd86c2ab": "521f9e6dea0680d15b54c5776d8ce085",
".git/objects/93/480e71179394b3f6a43598ed9115d28b1482d3": "a8a4cb2880f9ef45e087506e561fb87b",
".git/objects/93/eea2bc5504b8942a46fa0f69091d4cbabb4602": "ff88c7efccd1f3438a7f59c3c6bf6895",
".git/objects/94/c737746a9c6250665ba13d8ca444e08e9cddf6": "3456c7d87fe71ca1d50325106907842f",
".git/objects/95/12a8cde412bbeec4cd8170bcfd83db940b9a93": "6e64d67b1f0fec762c30706375849007",
".git/objects/97/0d210af7bff8c18fecce16a79c82089d9a7bb4": "fffc922c7bb70b24978aac7d5922f657",
".git/objects/97/1c305e4beda9081154f9e72911c96a82277ec7": "bcf9376b53c9bdb612a4ab57e84d1995",
".git/objects/97/682310bb4a14914bad9cf46db0fa60735a6d7a": "85f56eea632b34d804e846e1b80c8740",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/ecc7adcb2bdbd64cd1e549c5b6ec1088584039": "7d244e9a4476e55cf45892ea485ba604",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/99/bc02aed82bb018ef935a850cf6136f3118121c": "899ca5f5bbc56a5ccc4ac037187bcf25",
".git/objects/9c/3dfaac6aca45ab6e8521797a4920e82cbd6bf9": "dd01bbf9ce0e473736392c30758c1b04",
".git/objects/9c/83ddc48e87b7b7019764accdfc0260e71fce3e": "72460146a2a9b82e82c431c7acfaefad",
".git/objects/9d/82ba50a8120eaf65dee092b30d0e0174d3f56a": "6be85b7b8a2e083dc46d9969121f479c",
".git/objects/9e/f60d415d8f5043aa1d227ab671cf14aec59e77": "bd60508ea3ea2ef7b5dbf63c65ea50fd",
".git/objects/a0/2505d535cc091508257637104679749945b5c6": "9e6d3a24ff90b0b733147cbed8afad9e",
".git/objects/a0/9c15d369aa6474ea9b986240f515ac71e9ff59": "80fec07db19129f0f96db4c2f76224f9",
".git/objects/a0/b4dd92f6c0cecb89485f89f75a4ee63e153bdf": "70717007e83d34d1b7f1dc9137bfd6e3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0f5f51012c6ba31f1d35ac005d6683cdb60712": "b76d5bd213a5c60d62c06760303c2bb0",
".git/objects/a3/e0cd89a8303ef174d71442afc2abeac0f0c98b": "99183a68df252c984c3003a9fcda9be2",
".git/objects/a4/c1a6a522f1514a6afd9e4a2b9fdf3574fb30ce": "9ab4453fc36181354f5800df70f0ee0e",
".git/objects/a6/b2b31911333d85c92af92e091f6ea48d79b9c3": "2a3f58df7eced7605c27f522ef992c3d",
".git/objects/a9/2f463c259da7c8d2a635aca1e9b614dcb0fc2e": "7a7a435ade2fdf8140f033a0f84eb596",
".git/objects/a9/7982163c9feb63e4c99a1905635b7da1adf440": "b44ce85040ffd5dd99351bf81a628f95",
".git/objects/aa/69179ad659f61382ee4d86ad8f868c69f85af5": "f326a8f004d491f478615a50fd6d9d29",
".git/objects/aa/f74856aa767665f5a4abccd33debd369682863": "351cd30d29b5163887ad79a5b7281926",
".git/objects/ab/272700faba8972038f800515fb0b6245be8464": "fc64c295aeee516a1fa78503f3da1211",
".git/objects/ab/96e90088773ab92179124306be44cb706ef076": "a309b6c2beb3c1cc22cea9da7eccdae0",
".git/objects/ac/5a507c9dee9af4f096234bfb6b378706d54b27": "2e85798b67e4a9dd0afd26972860ec0a",
".git/objects/ad/26e0a24baa5d367ef0c1c5a7c6791081f11fc5": "8738d8201fadffa39b43b557e4f3f36a",
".git/objects/ad/4dcb813aaf650c2faf545ffa7b222dafcfc6cb": "819a7ebe2a37be78d4960d265a18339b",
".git/objects/ad/955fe2e0f11c87b65f725021395418e38adca5": "b4ca194ed49b8fd29449b4138d891ba0",
".git/objects/ad/f2be357ea6c7d99c36e6cab4e73853db393825": "d3f9d22fe2d330e025c3eaae4e646595",
".git/objects/ae/7d42650278602878149d4c7c4de95f94433bc3": "14d466309a123ea84bd3a238f1135a55",
".git/objects/ae/e594a27d7d96691a8b09fda1a4d10a58c46b95": "71e2f6a8c1ad769eafb114407e7c503b",
".git/objects/af/a1485f1b4d2902f3d04f28b93b1629ddc5f92b": "f4a85fcb8e6095a5d0148639078932fd",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/b0/b7b567e4da492880486d93f868d41b39b6d2cc": "f4a83369513d2ee1ab90d0f8c04c2668",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/c977a58a7646ed06860b8e533764b849881698": "73ec97e5f62930c54208bb81aa678824",
".git/objects/b3/eb0f7f12c3c16f18cfdcea01a0fe3777e16811": "8d510d2b751e3743f0bf5970f7fb8628",
".git/objects/b4/f673c0891166f3a634b86a3c1bf4ac9a170816": "ffc5ed6ad9154adbaf22d1ff4476a0c8",
".git/objects/b5/7b59d19b60e9003e4c422fa67afcddd4ddc451": "2fd6ddf725b379a78a4fc526c63e342a",
".git/objects/b5/830990344dcf34dccf2678b9a22a55d1fc8bf9": "a24323046ea9077fe2fa972d2ed71f9f",
".git/objects/b6/51b1229654af811d991c8b1f226d79d82bb553": "a6ae21d8cb19d17c65b7a5688f105db2",
".git/objects/b6/5854e3275622cc38164b0b2c46743050b062bf": "b763581e27a1ca39a120aca884970b55",
".git/objects/b6/fe61f8c16b9ebad82414bad8c9512c7ae989e9": "b9d4f36a9f602f3e29fa9a192f5f47d0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6a5945cbafe03ae996a9875ec0810fbefef690": "485812a417dd0ae90b35bf9e88e78924",
".git/objects/b8/a046f74ca5b0681f3c6355a3e6e79ec8986c25": "9f10065bf81500a05dfcdad040b70785",
".git/objects/b8/db259fab29334a50545ca0648618922e3168df": "240d3a047605d62a45d3d2a546163c49",
".git/objects/bc/f46396cb5e15e7b4d358a1b514961e45c9c7d5": "acee783d20ec344e10a76a0a08fc7ecc",
".git/objects/bd/151ad3042f57df310f6dca178cd9a7921cf019": "0952d085af10f5f026ec58cbef3a2fe2",
".git/objects/be/85db57d2cd0699db2c33e941b605b6c294a4dc": "fbc5ab2ef2b6ddba8ed6713aff12b8e8",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c0/6c4df4225efedc3bb4d3b61de54dc81592e16b": "78deaba88c1aec5b0cc085a0c845af88",
".git/objects/c0/7b7f9a2427cdeef7f3f336da3c1d5ea0caa845": "530218526f5133825523ab56b3ff8fb7",
".git/objects/c0/a7fcf9d5717cc90653ea6b9dcebf0143b47e00": "89593b3286b57866d8346de47bf980ff",
".git/objects/c1/20fdb51a1dddbc54c077be84beeb70d8285623": "f1f69234d460369df789fdb5e2511e8f",
".git/objects/c1/4c525da3e758cba2c0f0db1835e9cb7700721f": "fa9ce7e9eb691d0e549421654346c542",
".git/objects/c1/ada4e08a69c0e3b11ed9ea822bf788a80444b6": "b1e47d2a0533b7d1579ede00e1173f6b",
".git/objects/c2/161dc6f991fb8fc45fffac2db97ae0f404945a": "94c5269b0adfbfc63c6a4468225a7ceb",
".git/objects/c2/48ff51f917a5e84bfc79cb24ee80e049f83cf9": "74d6422aed642ba9bbd5069a6b20995a",
".git/objects/c3/79184896e1a328e09818d86a94098e7b0f16f8": "018468cb6eacb8414125f81e1c8dc7df",
".git/objects/c3/831d75f7f5778b7a06b0a20b76e83d3179fa36": "c4f4063e027006ee092b4049476470da",
".git/objects/c4/556c1050ee59b9d70cb8916a73453d4d43886d": "523d1906d18e6b4a0015f0b0291ababb",
".git/objects/c5/0884cc0314d1d21450109e888c8afb901e0ec4": "53ab907688e5d8f7749942c4d12c95ab",
".git/objects/c7/ec6d57f9f1a3e457714c5ab39244d688e5a93e": "ac385505edd837c54527b558f8d5ad5e",
".git/objects/c8/ee095ace7fb212f9bda755b48d822c0b1a5cf5": "7259bea6c30936c4d8a8422a77e8f69d",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/bac2464259dc8fe800d8d9ce13fbea0f41539d": "ff69259a74a506da41ebfc1886d8d8fe",
".git/objects/cd/154b6cc90d055faf4d0cb15f4dd617c96691fa": "c484f73a9612a3233d999110df9bdb06",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/5cc5420c203dd771da7ebeb4618d71df419a56": "6670f6a3fb5f685992587c10a947d247",
".git/objects/cd/8f78a04b80e9d7a1eab75502b5a09ba2e3eabe": "8346e7a97b9cefd48dc2fbce4299dca0",
".git/objects/cd/a46671ccc6388a073fccd97157a903d57be008": "92180c5ede4253e4bc1ad540f4001c16",
".git/objects/cd/f1f8afbd161a20cdc315a7997719f5eb56bdaf": "64c968eee047a87f03f433e78491222f",
".git/objects/ce/35fbf32363e3587a9e8417d6c56f87a0edd77c": "8955dbdcaecaf7c5a401a0e1c5efe160",
".git/objects/cf/f8747d04890eac675c7a410f442ae0489614e7": "b76f59b8ca2b7ee14b1d93c8a6a45782",
".git/objects/d1/0d21e50083894cffc3fee74ed8c37dfc1b19f6": "ec9468e0cde323aaf72fbea408dc0296",
".git/objects/d1/caab84fd8786b908856b2731d5314c6bda3077": "4131c85afc95c8000f935f3e53514b88",
".git/objects/d2/10828ceb916e5a143703cf97a752c447b5fd0e": "74a33993b1275c064f7ca75240d87f49",
".git/objects/d3/ea80d4898383c7553ce78e76738cd944f251c0": "b9a575e6a8d21736a5a95a1210dd89a4",
".git/objects/d4/81615d7dc2d7307b3fc096c14e4f3b21a009df": "4cc25249a456b6d475490a5136fa734b",
".git/objects/d6/495bef600427cee0d5d6e18d0eff877de3189f": "61a064af34e0d0da64dfcce592882719",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/caba03a5c70fef7993a6d3f4b15b9bec047ac4": "19ba3c46ee69a69c48e51e2fe908c10a",
".git/objects/d7/463cf18ab21a7911f849bd25005143c66c1951": "e2a5b47f3db318aab1c05c6647dd4169",
".git/objects/d8/cb8f16dcbe144dbb480f649e2b038addc2b7be": "5682f438a0f9eda0ba61284a767da107",
".git/objects/d9/7a59b646f898c7a1ad6dfdeb5ba5f5f5e0fc04": "9b8131e539821d44ab41e8ef0e04dbe6",
".git/objects/da/2d9f82a2f57d0c2517c80339dc272163fe8c49": "c6483c2fdb4f232625ce1519aeeac773",
".git/objects/da/3938a921b48c495b9650b25daa076de0f5b57b": "4ee32d6a6cdb89cb4925961b61816ee5",
".git/objects/db/60c5dfae4feb6886b6ae086bab48fce7c6c161": "8e037a831bdc1e8a5f88de7f9ae43626",
".git/objects/db/8c3461b4577798b34b26dbff09ad015e401fd8": "f6af3e7a8dc13ccfebecd309dabefc77",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e0e8e5c51f3c1d4f55024440527ca853221072": "a050b7046b913a8e38d9a94b51cff759",
".git/objects/df/0652dba5abf0dc8465742c0c2c30381b85ce2e": "5f9a6e755aff41a5cd1f5d26d1c8a1fd",
".git/objects/df/d5ae14a41d7f107b3631cb5676848d59b6dcec": "71ff094cc175f846674cabfa6ee58e40",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/65046fe15a419d3871852a28c0cdd904938389": "5404d323bde800654ea2983b1f8fcf3a",
".git/objects/e2/30732baeb56cf461602acd0a4c171c594b9f22": "5d23514f1a2901857e4f4e27804cc95c",
".git/objects/e2/3d76f2a23dabfc370d8dab31998e0e5492a15a": "64fbc522e7ae704a7c74577b80782f72",
".git/objects/e2/98d2fc8470b8175dae8debbec08d8637f25716": "c5c3126d8f62820f26b21816fd0e3aff",
".git/objects/e2/e1614b7566f2d307bae09d839766c0e43c7360": "80da9ebe99a3a8b608104c9f5e3bb95b",
".git/objects/e5/1266db400a88605ee8aa33c557715a1d62af3a": "5571830210d8b79f5ab7f0609821c74e",
".git/objects/e5/2711125bc729028d51c5f1833f33d19dad792f": "f1d4424f060fe25add81790ad2018b78",
".git/objects/e5/52fad806f257e98d4faa9f23bcc14fc2d613ed": "d60f97ccd4552b18e1a5267a5eedb91e",
".git/objects/e5/683f83b4defcaeb9fd0fd6c91fcd71b5667907": "1bdd6462da8c73e62583b7df594d9c47",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c80a630e09624f37ff3c718f6225d728c6c478": "c3017159a81e776b3d9e660b3baa6522",
".git/objects/e6/c662cf911fbe549c3334c7d63fc91b837d6036": "20916ed1f66c37569c32c856194f605d",
".git/objects/e8/6cc96fa470e51ad7d772c826726bb5d75b643e": "8d125bdca6f75666195e1b5a429e5458",
".git/objects/e8/e24c3fb10735c62f32d0507e49bfcabd7736ee": "941356c0eb34d1e110824651f3fd2a24",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6862ce629869545ba1c751ac243794887e9307": "40107ad4abb2e5b2b97dcb0a0c8e9296",
".git/objects/ed/7388778b58ca97aa291dadaf4f7452b05a7742": "e642d5a3ff22ac4e1e4b53a65c92efd3",
".git/objects/ed/9f5dfab70804e84ca272e3a7bef0761f4d9dbe": "d7b682076b351ccb217d54432528769e",
".git/objects/ee/11a54d13e25c64f1f48346771e1a76ffafe6b5": "898075c40b5144b7427978467f5cce07",
".git/objects/ee/de09b598f7757e1356b21530e175bc921f469c": "2b0f58fa50c084d0a185e18e0ae6c0d3",
".git/objects/ef/431739acb936d4158d6ec2c1e84fa573ab5d46": "830e1b414083a55c28d441f315a263bc",
".git/objects/ef/bf41f9a8efbac33f929da3afebf2e2b4ebc2bc": "55f9b06fa6dd5983ce030d3c26920ebb",
".git/objects/f1/f1b418ebb1fce9c67fd46f7cd8e06320315c34": "124db706094360b35de27cf2af1deee7",
".git/objects/f2/173b3d08ba13bba9b857213c5e3533821d0875": "6cc009484c42c0b2ee7439cf4358fc30",
".git/objects/f3/48f86377a35224068a4f5637dd3128153ff854": "89881bd7c6d3f4bcb522573766e22264",
".git/objects/f6/a0db5a52a202747653749dca4559cbe7301419": "a1dd8e4453d7028508d98856c927543c",
".git/objects/f8/eaa4ccb0529d9ebc2aad10a05cc05c1999d8e6": "3d9baa0032a90cccd3c581710f4d0d87",
".git/objects/f9/80b639896e208fc4ccf87e0d72ac627daba095": "2e23dc26a5bf67c914d19e45422e468a",
".git/objects/fb/0562c773e798313973904aab0b721ab6aef572": "1bf6c114680ec6a03496ebfbb687e9b1",
".git/objects/fb/343874c6240bf0c78582a7cc8328c24b3d5c59": "3865c3d8f86941bcc29a9c000a67befb",
".git/objects/fb/ce7f4efeb4c02bcca2d36f0571408c576b3f43": "59f0578e483c44de0bd5e2cec47d755c",
".git/objects/fc/8400ae786fd16408f4d18114e27116caee5f42": "c72ac89378140bd50e512aa1a2e03292",
".git/objects/fc/9270dded646d09bec5b31175e45bedf675cef4": "8e9b1b597f4b3bd5c821b8a7071e96b0",
".git/objects/fc/ba5acc51bb854f58da16ddacd00948adec1fdf": "888f2c2f52d66eb00ac0c965ad73bd7e",
".git/objects/fc/d96cda609dfe89cedbf54ff8dfb67472c88820": "f94ebb2c8025f6e009c29051bd50c5c2",
".git/objects/ff/1bcfe9766604b74efcf5e8209cb2e09d9c587a": "9cf9cf7f43ef6d786bdd7c08a4281854",
".git/objects/ff/52a3eb2d4e8c06b560ce59d85af8f5ea35fa37": "5880f6a71e6b92e01ee4c4a988ea023a",
".git/objects/ff/5b54116870b5bc8335d217bcb5f4c4ec0ded34": "74b8980c2bda9f02e3237838eda3e445",
".git/objects/ff/f01fadcb1630098b8a041c86be6b52d7d7629d": "bd588af0a526d71ec07ced0c4a9c0331",
".git/refs/heads/main": "5477cfe031b9c0d424abfe0997d38cdb",
".git/refs/remotes/bfs/latest": "d2c4972a0a81546086c39e05ee3131ae",
".git/refs/remotes/bfs/main": "5477cfe031b9c0d424abfe0997d38cdb",
"assets/AssetManifest.json": "b616cea4d6e1682c97bbbf8469b9db91",
"assets/assets/icons/BFS%2520Portal%2520Site.png": "e8906845e93a527df999060c58d0659b",
"assets/assets/icons/cart.svg": "05200fffc800d87a21c128549be6c67f",
"assets/assets/icons/default-image.png": "0e417231100ee5d59c1cdbfd9a5d58a3",
"assets/assets/icons/document-checklist-icon-in-flat-.jpg": "82ec0798a68341bb30850ed0b402f6a2",
"assets/assets/icons/icon/Group%252057.png": "843727a506fa3e1cf3a47dc27c393b3d",
"assets/assets/icons/icon/Group%252058.png": "9a144d14ab302dc0acdc1ccf81fe93ca",
"assets/assets/icons/icon/Group.png": "03e2bc9bb7e2e562f0198f5bb35f72d1",
"assets/assets/icons/icon/Vector.png": "8cd5488ca5587efd77180c9252fb6e7c",
"assets/assets/icons/image.png": "6f46f50bf4fa687e3446c948b6759fae",
"assets/assets/icons/read-icon.png": "60b97f9cacba768b87dbcf3887cadac2",
"assets/assets/icons/report.png": "035e88c4c1a45ca557bbb88f04f0e39c",
"assets/assets/icons/reportss.png": "1bff157f786f9d5709e84646506b7569",
"assets/assets/icons/setting.svg": "469aa8dce072538da761e26983f0c777",
"assets/assets/icons/user.svg": "95065a518fabb035734f2167cbd39a3d",
"assets/assets/img/1.jpg": "b08d813c342a6cf65848910b0e61a57c",
"assets/assets/img/banner-imag.jpg": "99fcc4f5ee58fbde35af1dcaf21dc3d6",
"assets/assets/img/BeautyFashionLogo.png": "67d097ffb43af9e71e40e3fe304cdeab",
"assets/assets/img/BFS-makeup-bg-Mobile%25201.png": "671f44133a0fe43d6922264d947259c6",
"assets/assets/img/BFS-makeup-bg-with-logo.jpg": "0372f162f82b204ed1f803618648da5b",
"assets/assets/img/boj_1600x.jpg": "ca5c5d527f5365174a093b8245f2e955",
"assets/assets/img/btif-sale-logo%25202.png": "0949bd4b4750ca31b7025f1097a12b39",
"assets/assets/img/Group%25202.png": "c738a12f54f6e28daa286ad34afe86a1",
"assets/assets/img/Hair-care%2520(1).png": "3b834875259e477e9a25ddae6f39b655",
"assets/assets/img/Hair-care.png": "92a6cad647e820e039cd38ef6c942191",
"assets/assets/img/image%2520(1).png": "d7c31843ef2d01f40ad4d94bfa8bf58c",
"assets/assets/img/image%252013.png": "c9548e9472111071f8902603870463b2",
"assets/assets/img/image%25209.png": "973cf968b2e55f7d5586ec49820a2c7e",
"assets/assets/img/menu-banner.jpg": "cef0c0007976a5a3366277c16e5852d3",
"assets/assets/img/Rectangle%25203.png": "2570e5ee7ce3784f4b8634b2da1fee57",
"assets/assets/img/Rectangle%252033.png": "69044be7766eb0abae2f7dd5dd5ffbd3",
"assets/assets/img/Rectangle%252034.png": "bd96496b79dfe1e6edb09ba3f37bb5d3",
"assets/assets/img/Rectangle%252035.png": "8b40bac0285c942f1208b8a12696108c",
"assets/assets/img/Rectangle%25204.png": "30f1b890c9df1fb3cfe15b972c3a61d5",
"assets/assets/img/Rectangle%252042%2520(1).png": "7bec87ce7fcd412040e889214adf2f3b",
"assets/assets/img/Rectangle%252042%2520(2).png": "f09aa1c314d062350168bdefa70e9a39",
"assets/assets/img/Rectangle%252042%2520(3).png": "6a6c45aac7978005bdec29c6dfb0db95",
"assets/assets/img/Rectangle%252042%2520(4).png": "91ebca6ae5e0edc01949eb690261ad68",
"assets/assets/img/Rectangle%252042.png": "f3530c603b8c80a9401fb0fa7c1007d6",
"assets/assets/img/Rectangle%25205.png": "09522ae155a28c0feffe58205575b8af",
"assets/assets/img/skin-care.png": "803ad3373260122478d288e1e5ec780e",
"assets/assets/img/unnamed.jpg": "8532a9feec24dca592e5e92fd7e4e457",
"assets/assets/img/women.jpg": "32f506c8627b0ab00396ca08929ca01f",
"assets/assets/imgss/AERIN%2520LOGO.png": "20f2f7273a9c89279fdbeab8ed8ce3c3",
"assets/assets/imgss/AERMIS%2520LOGO.png": "108ef694b59a02914493d704560d4e2f",
"assets/assets/imgss/Bobbi-brown.png": "16fbcc80869131cc1a574d98abd8d997",
"assets/assets/imgss/Bumbleandbumbe.png": "4a0be1058e99733f9458a8a22d17967d",
"assets/assets/imgss/BY%2520TERRY.jpg": "6b4c7bf5119d424c0a0e71c811642f54",
"assets/assets/imgss/Byredo.jpg": "39fa9b24d3b64bfb6d12131667fa368e",
"assets/assets/imgss/Diptyque.jpg": "7584303631d79037bf770879d4f0a11d",
"assets/assets/imgss/ESTEE%2520LAUDER%2520LOGO.png": "34f617f4b4966a18fa839b1ef959eac0",
"assets/assets/imgss/Eve%2520Lom.png": "f900705d7a32c31dcba863407f590d94",
"assets/assets/imgss/glamglow.png": "ef209c6787e0a8dfe455d84456700b80",
"assets/assets/imgss/Kevyn%2520Aucoin%2520Cosmetics.jpg": "cfd99c24e3fd8e659e1a1b28c29dbfcd",
"assets/assets/imgss/Maison%2520Margiela.png": "2ae26f2eea502d4d1e564fc7be7725b3",
"assets/assets/imgss/rco-bleu-logo.png": "a18a2ee2ae5dcb2563a2f1a311ced536",
"assets/assets/imgss/RCO_LOGO.jpg": "34e4561cfe5db0f95a49594bdaa2c913",
"assets/assets/imgss/revive-logo.jpg": "063b5f0c86fef5c0c4441d2b46949beb",
"assets/assets/imgss/RMS%2520Beauty%2520logo%2520(1).jpg": "933f77cccf4121f253e667cd3fe0d3aa",
"assets/assets/imgss/RMS%2520Beauty%2520logo%25201.png": "e5b904a54d5d4d12c2e355d5606bc59c",
"assets/assets/imgss/RMS%2520Beauty%2520logo.jpg": "adb17296c782cf66ec7b2e542961e796",
"assets/assets/imgss/RMS%2520Beauty%2520logo.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/RMS%2520Beauty.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/Smashbox.jpg": "1b1845ae26bb549441c8ec5e38d6e346",
"assets/assets/imgss/Susanne%2520Kaufmann.jpg": "2798893c649eeb3dee55ade5cff5fc88",
"assets/assets/lotties/check-dark-green.json": "7fbb467a78409050a2d96028a2a013ed",
"assets/assets/Svg/delet1.svg": "0c6d7dfe2264d6725c1dc5d61c08ce2a",
"assets/assets/Svg/Downlod-icon.svg": "83619685208a3027c55c25b1a294f346",
"assets/assets/Svg/image%25209.svg": "c24dcbee1c4753fb9ff7d317d6533ad3",
"assets/assets/Svg/list.svg": "4abbd1d117b11bf4e39bda7bd299f8eb",
"assets/assets/Svg/Vector.svg": "f102460ce796e6958e98909b8cc7905a",
"assets/assets/website/index.html": "267108b27a6d702b8822847d3a7e2386",
"/": "44e5c8c8e2b5f2a5aaf640b08f4a7412",
"assets/assets/website/script.js": "0769e73c3db8bfb657d9a8cbc25b17be",
"assets/assets/website/style.css": "73efffd30e4db5151e8eed10ae9bf3ae",
"assets/FontManifest.json": "2156ad94090fb03fc389e4fd460ec861",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "779c4a9c98c90d0d93dd748497c60b83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"b2b-favicon-removebg-preview.png": "3467298771f7829376d5c1d2293b2e88",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/b2b-favicon-removebg-preview.png": "3467298771f7829376d5c1d2293b2e88",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "44e5c8c8e2b5f2a5aaf640b08f4a7412",
"main.dart.js": "91f2c9b56a2fd45f70eefc160e394582",
"manifest.json": "ba0cb000658b83e571e2d80faaf11847",
"version.json": "8f4f7629a0e8e8dd56cc88cf5f8dbd86"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
