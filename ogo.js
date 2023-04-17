const _0x759c4d = (function () {
    let _0x365412 = true
    return function (_0x5e1f1f, _0x232e28) {
      const _0x59006e = _0x365412
        ? function () {
            if (_0x232e28) {
              const _0x1e114f = _0x232e28.apply(_0x5e1f1f, arguments)
              return (_0x232e28 = null), _0x1e114f
            }
          }
        : function () {}
      return (_0x365412 = false), _0x59006e
    }
  })(),
  _0x53a089 = _0x759c4d(this, function () {
    return _0x53a089
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x53a089)
      .search('(((.+)+)+)+$')
  })
_0x53a089()
;(() => {
  'use strict'
  var _0x1d80be = {
      656: (_0x427b36, _0x3f430f, _0x268dc1) => {
        let _0x1d1e79,
          _0x3a40a1,
          _0x26d55d,
          _0x49e96a,
          _0x1351f3,
          _0x4b30b4,
          _0x155169
        const _0x4e3ca2 = { Z: () => _0x5548bc }
        _0x268dc1.d(_0x3f430f, _0x4e3ca2)
        const _0x5548bc = class {
          #e;
          ['cfg'];
          ['supplies'] = {};
          ['suppliesMap']
          constructor(_0x27bfc7) {
            this.#e = _0x27bfc7
            this.cfg = _0x27bfc7.cfg.clicker
            setInterval(this.suppliesLowPriority, 300)
            setInterval(this.suppliesHighPriority, 0)
          }
          ['reset'] = () => {
            this.supplies = {}
            this.suppliesMap = void 0
          };
          ['getSupplyByName'] = (_0x6bf049) => {
            if (
              (this.suppliesMap ||
                (this.suppliesMap = this.#e.utils.findByPath(
                  this.#e.gameObjects,
                  'gameMode.localPlayer.components.suppliesComponent.linkedHashMap'
                )?.[1]),
              !this.supplies[_0x6bf049])
            ) {
              const _0x310f28 = this.#e.utils.findByPath(
                this.#e.gameObjects,
                'gameMode.localPlayer.components.suppliesComponent.linkedHashMap.hashMap'
              )?.[1]
              if (!_0x310f28) {
                return
              }
              if (
                !(
                  (_0x1d1e79 && _0x3a40a1 && _0x26d55d && _0x49e96a) ||
                  ((_0x1d1e79 = this.#e.utils.findByPath(
                    _0x310f28,
                    '__proto__.__proto__.i:3'
                  )?.[0]),
                  (_0x3a40a1 = this.#e.utils.findByPath(
                    _0x310f28?[_0x1d1e79]?.(),
                    '__proto__.i:6'
                  )?.[0]),
                  (_0x26d55d = this.#e.utils.findByPath(
                    _0x310f28?[_0x1d1e79]?()?[_0x3a40a1]?.(),
                    '__proto__.i:0'
                  )?.[0]),
                  (_0x49e96a = this.#e.utils.findByPath(
                    _0x310f28?[_0x1d1e79]?()?[_0x3a40a1]?.(),
                    '__proto__.i:1'
                  )?.[0]),
                  _0x1d1e79 && _0x3a40a1 && _0x26d55d && _0x49e96a)
                )
              ) {
                return
              }
              for (
                const _0x5cf390 = _0x310f28[_0x1d1e79]()[_0x3a40a1]();
                _0x5cf390[_0x26d55d]();

              ) {
                const _0x4cb23c = _0x5cf390[_0x49e96a]()
                _0x4b30b4 ||
                  (_0x4b30b4 = this.#e.utils.findByPath(_0x4cb23c, 'i:0')?.[0])
                _0x155169 ||
                  (_0x155169 = this.#e.utils.findByPath(
                    this.suppliesMap,
                    '__proto__.i:6'
                  )?.[0])
                this.supplies[_0x4cb23c[_0x4b30b4]] =
                  this.suppliesMap?[_0x155169]?.(_0x4cb23c)
              }
            }
            return (
              _0x1351f3 ||
                (_0x1351f3 = this.#e.utils.findByPath(
                  this.supplies[_0x6bf049],
                  'i:0'
                )?.[0]),
              this.supplies[_0x6bf049]
            )
          };
          ['activateSupply'] = (_0x5ac23b) =>
            this.getSupplyByName(_0x5ac23b)?[_0x1351f3]?.();
          ['suppliesHighPriority'] = () => {
            if (this.cfg.autoHealing.state) {
              for (
                let _0x468fe7 = 0;
                _0x468fe7 < this.cfg.autoHealing.multiply;
                _0x468fe7++
              ) {
                this.activateSupply('FIRST_AID')
              }
            }
            if (this.cfg.autoMining.state) {
              for (
                let _0x26dd0e = 0;
                _0x26dd0e < this.cfg.autoMining.multiply;
                _0x26dd0e++
              ) {
                this.activateSupply('MINE')
              }
            }
          };
          ['suppliesLowPriority'] = () => {
            this.cfg.autoArmor.state && this.activateSupply('DOUBLE_ARMOR')
            this.cfg.autoDamage.state && this.activateSupply('DOUBLE_DAMAGE')
            this.cfg.autoNitro.state && this.activateSupply('NITRO')
          };
          ['process'] = () => {
            this.#e.utils.isBindPressed(this.cfg.autoHealing) &&
              (this.cfg.autoHealing.state = !this.cfg.autoHealing.state)
            this.#e.utils.isBindPressed(this.cfg.autoArmor) &&
              (this.cfg.autoArmor.state = !this.cfg.autoArmor.state)
            this.#e.utils.isBindPressed(this.cfg.autoDamage) &&
              (this.cfg.autoDamage.state = !this.cfg.autoDamage.state)
            this.#e.utils.isBindPressed(this.cfg.autoNitro) &&
              (this.cfg.autoNitro.state = !this.cfg.autoNitro.state)
            this.#e.utils.isBindPressed(this.cfg.autoMining) &&
              (this.cfg.autoMining.state = !this.cfg.autoMining.state)
          }
        }
      },
      519: (_0x38adac, _0x4d6b9b, _0x5a9e4e) => {
        let _0x3716bc, _0x39a132, _0x590c62, _0x11b4e5, _0x23a6b6
        const _0x587862 = { Z: () => _0x4f9bd5 }
        _0x5a9e4e.d(_0x4d6b9b, _0x587862)
        const _0x4f9bd5 = class {
          #e;
          ['cfg']
          constructor(_0x4dda1b) {
            this.#e = _0x4dda1b
            this.cfg = _0x4dda1b.cfg.movement
          }
          ['getVelocity'] = (_0x28c236) => {
            const _0x35886f = _0x28c236.physics.velocity
            if (_0x35886f) {
              return (
                (_0x3716bc && _0x39a132 && _0x590c62) ||
                  ((_0x3716bc = this.#e.utils.findByPath(
                    _0x35886f,
                    'i:0'
                  )?.[0]),
                  (_0x39a132 = this.#e.utils.findByPath(_0x35886f, 'i:1')?.[0]),
                  (_0x590c62 = this.#e.utils.findByPath(
                    _0x35886f,
                    'i:2'
                  )?.[0])),
                _0x35886f
              )
            }
          };
          ['jump'] = (_0x2fac27) => {
            this.getVelocity(_0x2fac27)[_0x590c62] += this.cfg.jump.force
          };
          ['freeze'] = (_0x2df020) => {
            _0x11b4e5 ||
              (_0x11b4e5 = this.#e.utils.findByPath(_0x2df020.body, 'i:5')?.[0])
            const _0x2b053b = this.getVelocity(_0x2df020)
            _0x2b053b[_0x3716bc] = 0
            _0x2b053b[_0x39a132] = 0
            _0x2b053b[_0x590c62] = 0
            _0x2df020.body[_0x11b4e5] = !_0x2df020.body[_0x11b4e5]
          };
          ['unflip'] = (_0x5442e7) => {
            _0x23a6b6 ||
              (_0x23a6b6 = this.#e.utils.findByPath(
                _0x5442e7.physics.orientation,
                '__proto__.i:15'
              )?.[0])
            _0x5442e7.physics.orientation[_0x23a6b6](0, 0, 0)
            _0x5442e7.physics.angularVelocity[_0x3716bc] =
              _0x5442e7.physics.angularVelocity[_0x39a132] =
              _0x5442e7.physics.angularVelocity[_0x590c62] =
                0
          };
          ['process'] = () => {
            const _0x3d2eb8 = this.#e.gameObjects.gameMode?.localPlayer
            _0x3d2eb8 &&
              (this.#e.utils.isBindPressed(this.cfg.jump) &&
                this.jump(_0x3d2eb8),
              this.#e.utils.isBindPressed(this.cfg.freeze) &&
                this.freeze(_0x3d2eb8),
              this.#e.utils.isBindPressed(this.cfg.unflip) &&
                this.unflip(_0x3d2eb8))
          }
        }
      },
      978: (_0x2fff06, _0x514c9f, _0x10c2fe) => {
        let _0x1659a5, _0x2fb0f5, _0x16834a, _0x472529
        const _0x3b9214 = { Z: () => _0x389327 }
        _0x10c2fe.d(_0x514c9f, _0x3b9214)
        const _0x389327 = class {
          #e;
          ['removeMines'];
          ['cfg']
          constructor(_0x2b9539) {
            this.#e = _0x2b9539
            this.cfg = _0x2b9539.cfg.removeMines
          }
          ['reset'] = () => {
            this.removeMines = void 0
          };
          ['findRemoveMines'] = () => {
            const _0xbe202f = this.#e.utils.findByPath(
              this.#e.gameObjects.gameMode?.game,
              'i:3'
            )?.[1]
            _0xbe202f?.forEach((_0x505b72, _0x41a957) => {
              if (
                (_0x1659a5 ||
                  (_0x1659a5 = this.#e.utils.findByPath(_0x505b72, 'i:0')?.[0]),
                _0x1659a5 &&
                  (_0x2fb0f5 ||
                    (_0x2fb0f5 = this.#e.utils.findByPath(
                      _0x505b72[_0x1659a5],
                      'i:0'
                    )?.[0]),
                  _0x2fb0f5 && _0x505b72?[_0x1659a5]?.[_0x2fb0f5]))
              ) {
                for (const _0x599b70 of _0x505b72[_0x1659a5][_0x2fb0f5])
                  if (
                    (_0x16834a ||
                      (_0x16834a = this.#e.utils.findByPath(
                        _0x599b70,
                        'i:1'
                      )?.[0]),
                    'removeMines' === _0x599b70[_0x16834a]?.callableName)
                  ) {
                    return (
                      (this.removeMines =
                        _0xbe202f[_0x41a957 + 1][_0x1659a5][_0x2fb0f5][0][
                          _0x16834a
                        ]),
                      void (_0x472529 = this.removeMines
                        ?.toString()
                        .split('.')[1]
                        .split(')')[0])
                    )
                  }
              }
            })
          };
          ['process'] = () => {
            if (!this.removeMines) {
              return this.findRemoveMines()
            }
            this.cfg.state &&
              ('ENEMY' !== this.cfg.type &&
                this.removeMines({
                  [_0x472529]:
                    this.#e.gameObjects.gameMode?.localPlayer?.longId,
                }),
              'SELF' !== this.cfg.type &&
                this.#e.gameObjects.gameMode?.players?.forEach((_0x17d35f) => {
                  ;('TEAM' === this.cfg.type && _0x17d35f.isEnemy) ||
                    (('ENEMY' !== this.cfg.type || _0x17d35f.isEnemy) &&
                      this.removeMines({ [_0x472529]: _0x17d35f?.longId }))
                }))
          }
        }
      },
      571: (_0x1b37a7, _0x4adb65, _0x2ac674) => {
        let _0x3cf5b2, _0x379699, _0x5679c0, _0x11ec8b
        const _0x117483 = { Z: () => _0x54687e }
        _0x2ac674.d(_0x4adb65, _0x117483)
        const _0x54687e = class {
          #e;
          ['cfg']
          constructor(_0x4a7dc8) {
            this.#e = _0x4a7dc8
            this.cfg = _0x4a7dc8.cfg.wallHack
          }
          ['incDist'] = (_0x33bac9) => {
            _0x3cf5b2 ||
              (_0x3cf5b2 = this.#e.utils.findByPath(
                _0x33bac9.title,
                'i:9'
              )?.[0])
            this.cfg.incDist.state &&
              _0x3cf5b2 &&
              (_0x33bac9.title[_0x3cf5b2] = 1)
          };
          ['throughWalls'] = (_0xc17a77) => {
            ;(_0x11ec8b ||
              ((_0x379699 = this.#e.utils.findByPath(
                _0xc17a77.title,
                'i:15'
              )?.[0]),
              (_0x5679c0 = this.#e.utils.findByPath(
                _0xc17a77.title?.[_0x379699],
                'i:19'
              )?.[0]),
              (_0x11ec8b = this.#e.utils.findByPath(
                _0xc17a77.title?[_0x379699]?.[_0x5679c0],
                'i:1'
              )?.[0]),
              _0x11ec8b)) &&
              _0xc17a77.title?[_0x379699]?[_0x5679c0]?.[_0x11ec8b] &&
              (_0xc17a77.title[_0x379699][_0x5679c0][_0x11ec8b] = this.cfg
                .throughWalls.state
                ? 25
                : 17)
          };
          ['process'] = () => {
            this.#e.utils.isBindPressed(this.cfg.incDist) &&
              (this.cfg.incDist.state = !this.cfg.incDist.state)
            this.#e.utils.isBindPressed(this.cfg.throughWalls) &&
              (this.cfg.throughWalls.state = !this.cfg.throughWalls.state)
            for (const _0x21aa06 of this.#e.gameObjects.gameMode.players)
              this.incDist(_0x21aa06), this.throughWalls(_0x21aa06)
          }
        }
      },
      925: (_0x25769a, _0x136bf5, _0x357114) => {
        const _0x43b51c = { Z: () => _0x287236 }
        _0x357114.d(_0x136bf5, _0x43b51c)
        var _0x5b445d = _0x357114(474)
        const _0x287236 = class {
          #e;
          ['game'];
          ['mode'];
          ['hud'];
          ['localTeam'] = 'NONE';
          ['localPlayer'];
          ['players'] = []
          constructor(_0x302cb5, _0x18ec01) {
            this.#e = _0x302cb5
            this.game = _0x302cb5.utils.findByPath(
              _0x18ec01,
              'arrayList:2.i:1.0'
            )
            this.mode = _0x302cb5.utils.findByPath(
              this.game,
              'nativeList.i:0.0.fuzzy:GameMode'
            )?.[1]
            this.hud = _0x302cb5.utils.findByPath(
              this.mode,
              'battleEntity:1'
            )?.[1]
            this.localTeam = _0x302cb5.utils.findByPath(
              this.mode,
              'battleTeam.i:0'
            )?.[1]
            const _0x67f8f9 = _0x302cb5.utils.findByPath(
              this.mode,
              'tanksOnFieldRegistryImpl'
            )?.[1]
            if (!_0x67f8f9) {
              throw new Error(
                'Ошибка инициализации класса GameObject: Не найден объект tanksOnFieldRegistryImpl'
              )
            }
            {
              const _0x5869d4 = _0x302cb5.utils.findByPath(
                  _0x67f8f9,
                  '__proto__.i:0'
                )?.[0],
                _0x247689 = _0x302cb5.utils.findByPath(
                  _0x67f8f9,
                  '__proto__.i:1'
                )?.[0],
                _0x50d99d = _0x302cb5.utils.findByPath(
                  _0x67f8f9,
                  '__proto__.i:2'
                )?.[0],
                _0x2252b8 = _0x302cb5.utils.findByPath(
                  _0x67f8f9,
                  'hashMap'
                )?.[1],
                _0xeb0521 = _0x302cb5.utils.findByPath(
                  _0x2252b8,
                  '__proto__.__proto__.i:3'
                )?.[0],
                _0xe7e69c = _0x302cb5.utils.findByPath(
                  _0x2252b8?[_0xeb0521]?.(),
                  '__proto__.i:6'
                )?.[0],
                _0x3578c8 = _0x302cb5.utils.findByPath(
                  _0x2252b8[_0xeb0521]()[_0xe7e69c](),
                  '__proto__.i:0'
                )?.[0],
                _0x126af6 = _0x302cb5.utils.findByPath(
                  _0x2252b8[_0xeb0521]()[_0xe7e69c](),
                  '__proto__.i:1'
                )?.[0]
              for (
                const _0x38d39a = _0x2252b8[_0xeb0521]()[_0xe7e69c]();
                _0x38d39a[_0x3578c8]();

              ) {
                const _0x2ac3b9 = _0x38d39a[_0x126af6](),
                  _0x5bd46c = _0x67f8f9[_0x50d99d](_0x2ac3b9),
                  _0x1843fd = new _0x5b445d.Z(this.#e, _0x2ac3b9, _0x5bd46c)
                _0x1843fd.isLocalPlayer
                  ? (this.localPlayer = _0x1843fd)
                  : this.players.push(_0x1843fd)
              }
              _0x67f8f9.addEntity = _0x67f8f9[_0x5869d4]
              _0x67f8f9[_0x5869d4] = (_0x1206fa, _0x4b0ba1) => {
                const _0x2c6132 = new _0x5b445d.Z(this.#e, _0x1206fa, _0x4b0ba1)
                return (
                  _0x2c6132.isLocalPlayer
                    ? (_0x302cb5.clicker.reset(),
                      (this.localPlayer = _0x2c6132))
                    : this.players.push(_0x2c6132),
                  _0x67f8f9.addEntity?.(_0x1206fa, _0x4b0ba1)
                )
              }
              _0x67f8f9.removeEntity = _0x67f8f9[_0x247689]
              _0x67f8f9[_0x247689] = (_0x3b22c9) => {
                const _0x473463 = _0x3b22c9?.toString()
                return (
                  (this.players = this.players.filter(
                    (_0x1b4d7c) => _0x1b4d7c.id !== _0x473463
                  )),
                  _0x67f8f9.removeEntity?.(_0x3b22c9)
                )
              }
            }
          }
          get ['getPlayers']() {
            let _0x5d4bee = {}
            return (
              this.players.forEach(
                (_0x58e3f0) => (_0x5d4bee[_0x58e3f0.name] = _0x58e3f0)
              ),
              _0x5d4bee
            )
          }
        }
      },
      662: (_0x1de12a, _0x5eb1bf, _0x1fb8c8) => {
        const _0x3426bd = { Z: () => _0x116221 }
        _0x1fb8c8.d(_0x5eb1bf, _0x3426bd)
        var _0x278e80 = _0x1fb8c8(925)
        const _0x116221 = class {
          #e
          #t
          #i
          #s
          constructor(_0x3409ee) {
            this.#e = _0x3409ee
          }
          get ['root']() {
            return this.#t
              ? this.#t
              : (this.#t = this.#e.utils.findByPath(
                  unsafeWindow.root,
                  'i:0.child.stateNode.reactReduxStateWatcher.store'
                )?.[1])
          }
          get ['world']() {
            return (
              this.#i ||
                ((this.#i = this.#e.utils.findByPath(
                  this.root,
                  'threadSafeList.i:1.chassisSettingsUpdater.battleEntity.world'
                )?.[1]),
                this.#i && (this.#s = new _0x278e80.Z(this.#e, this.#i))),
              this.#i
            )
          }
          get ['gameMode']() {
            return this.#s
          }
          ['reset'] = () => {
            this.#s = this.#i = void 0
          }
        }
      },
      474: (_0x240735, _0x54ce3c, _0x7a956e) => {
        let _0x52e849, _0x34e393, _0x8d2cc2
        const _0x45a8e0 = { Z: () => _0x23bc32 }
        _0x7a956e.d(_0x54ce3c, _0x45a8e0)
        const _0x294740 = {
          velocity: void 0,
          orientation: void 0,
          angularVelocity: void 0,
          position: void 0,
        }
        const _0x23bc32 = class {
          #e;
          ['id'];
          ['longId'];
          ['battleEntity'];
          ['components'];
          ['isLocalPlayer'] = false;
          ['nameTag'] = '';
          ['clanTag'] = '';
          ['title'];
          ['physics'] = _0x294740;
          ['body']
          constructor(_0x3ff556, _0x4a5497, _0x30e804) {
            this.#e = _0x3ff556
            this.id = _0x4a5497?.toString()
            this.longId = _0x4a5497
            this.battleEntity = _0x30e804
            this.isLocalPlayer =
              true ===
              _0x3ff556.utils.findByPath(_0x30e804, 'changeNotifier.i:0')?.[1]
            this.components = _0x3ff556.utils.getComponentNames(
              _0x3ff556.utils.findByPath(_0x30e804, 'nativeList.i:0')?.[1]
            )
            this.body = _0x3ff556.utils.findByPath(
              this.components,
              'tankPhysicsComponent.body'
            )?.[1]
            this.physics.velocity = _0x3ff556.utils.findByPath(
              this.components,
              'tankPhysicsComponent.body.bodyState.i:0'
            )?.[1]
            this.physics.orientation = _0x3ff556.utils.findByPath(
              this.components,
              'tankPhysicsComponent.body.bodyState.i:1'
            )?.[1]
            this.physics.angularVelocity = _0x3ff556.utils.findByPath(
              this.components,
              'tankPhysicsComponent.body.bodyState.i:2'
            )?.[1]
            this.physics.position = _0x3ff556.utils.findByPath(
              this.components,
              'tankPhysicsComponent.body.bodyState.i:3'
            )?.[1]
            this.isLocalPlayer
              ? ((this.nameTag = _0x3ff556.utils.findByPath(
                  _0x3ff556.gameObjects.root,
                  'TOState.user.i:14'
                )?.[1]),
                (this.clanTag = _0x3ff556.utils.findByPath(
                  _0x3ff556.gameObjects.root,
                  'TOState.user.i:15'
                )?.[1]))
              : ((this.title = _0x3ff556.utils.findByPath(
                  this.components,
                  'userTitleComponent'
                )?.[1]),
                (this.nameTag = _0x3ff556.utils.findByPath(
                  this.title,
                  'userTitleConfiguration.i:0'
                )?.[1]),
                (this.clanTag = _0x3ff556.utils.findByPath(
                  this.title,
                  'userTitleConfiguration.i:1'
                )?.[1]))
          }
          get ['name']() {
            return (
              this.nameTag ||
                ((this.nameTag = core.utils.findByPath(
                  this.components,
                  'userTitleComponent.userTitleConfiguration.i:0'
                )?.[1]),
                (this.clanTag = core.utils.findByPath(
                  this.components,
                  'userTitleComponent.userTitleConfiguration.i:1'
                )?.[1])),
              this.clanTag
                ? '[' + this.clanTag + '] ' + this.nameTag
                : this.nameTag
            )
          }
          get ['state']() {
            if (
              (_0x52e849 && _0x34e393) ||
              ((_0x52e849 = this.#e.utils.findByPath(
                this.components,
                'tankComponent.clientTankState'
              )?.[0]),
              (_0x34e393 = this.#e.utils.findByPath(
                this.components,
                'tankComponent.clientTankState.i:0'
              )?.[0]),
              _0x52e849 && _0x34e393)
            ) {
              return this.components?.TankComponent?[_0x52e849]?.[_0x34e393]
            }
          }
          get ['team']() {
            if (
              (_0x8d2cc2 && _0x34e393) ||
              ((_0x8d2cc2 = this.#e.utils.findByPath(
                this.components,
                'tankComponent.battleTeam'
              )[0]),
              (_0x34e393 = this.#e.utils.findByPath(
                this.components,
                'tankComponent.battleTeam.i:0'
              )[0]),
              _0x8d2cc2 && _0x34e393)
            ) {
              return this.components?.TankComponent?[_0x8d2cc2]?.[_0x34e393]
            }
          }
          get ['isEnemy']() {
            return (
              !this.isLocalPlayer &&
              ('NONE' === this.#e.gameObjects.gameMode.localTeam ||
                this.#e.gameObjects.gameMode.localTeam !== this.team)
            )
          }
        }
      },
      792: (_0x4fb8bd, _0x57f2f6, _0xeab9ec) => {
        const _0x238b7d = {
          Pd: () => _0x4603af,
          cI: () => _0x1cfe57,
          oB: () => _0xa35908,
        }
        _0xeab9ec.d(_0x57f2f6, _0x238b7d)
        const _0x4603af =
            (_0x1a8b1d, _0x1d107a) =>
            (_0x138db8 = _0x1a8b1d[_0x1d107a]) =>
              (_0x1a8b1d[_0x1d107a] = _0x138db8),
          _0xa35908 = () => {
            let _0x30085c = ImGui.GetStyle(),
              _0x45ff02 = ImGui.GetStyle().Colors
            _0x30085c.Alpha = 1
            _0x30085c.WindowPadding.x = 8
            _0x30085c.WindowPadding.y = 8
            _0x30085c.WindowRounding = 3
            _0x30085c.PopupRounding = 3
            _0x30085c.WindowTitleAlign.x = 0.5
            _0x30085c.WindowTitleAlign.y = 0.5
            _0x30085c.FramePadding.x = 4
            _0x30085c.FramePadding.y = 3
            _0x30085c.ItemSpacing.x = 8
            _0x30085c.ItemSpacing.y = 5
            _0x30085c.TouchExtraPadding.x = 0
            _0x30085c.TouchExtraPadding.y = 0
            _0x30085c.IndentSpacing = 21
            _0x30085c.ColumnsMinSpacing = 0
            _0x30085c.ScrollbarSize = 6
            _0x30085c.ScrollbarRounding = 0
            _0x30085c.GrabMinSize = 5
            _0x30085c.GrabRounding = 3.3
            _0x30085c.ButtonTextAlign.x = 0.5
            _0x30085c.ButtonTextAlign.y = 0.5
            _0x30085c.DisplayWindowPadding.x = 22
            _0x30085c.DisplayWindowPadding.y = 22
            _0x30085c.DisplaySafeAreaPadding.x = 4
            _0x30085c.DisplaySafeAreaPadding.y = 4
            _0x30085c.AntiAliasedLines = true
            _0x30085c.AntiAliasedFill = true
            _0x30085c.CurveTessellationTol = 1
            _0x45ff02[ImGui.Col.Text] = _0x263d5b(1, 1, 1, 1)
            _0x45ff02[ImGui.Col.TextDisabled] = _0x263d5b(0.3, 0.31, 0.34, 1)
            _0x45ff02[ImGui.Col.WindowBg] = _0x263d5b(0.11, 0.13, 0.16, 1)
            _0x45ff02[ImGui.Col.ChildBg] = _0x263d5b(0.16, 0.17, 0.2, 1)
            _0x45ff02[ImGui.Col.PopupBg] = _0x263d5b(0.16, 0.17, 0.2, 1)
            _0x45ff02[ImGui.Col.Border] = _0x263d5b(0.12, 0.12, 0.16, 1)
            _0x45ff02[ImGui.Col.BorderShadow] = _0x263d5b(0, 0, 0, 0)
            _0x45ff02[ImGui.Col.FrameBg] = _0x263d5b(0.09, 0.1, 0.15, 1)
            _0x45ff02[ImGui.Col.FrameBgHovered] = _0x263d5b(0.12, 0.13, 0.17, 1)
            _0x45ff02[ImGui.Col.FrameBgActive] = _0x263d5b(0.07, 0.08, 0.13, 1)
            _0x45ff02[ImGui.Col.TitleBg] = _0x263d5b(0.14, 0.14, 0.14, 1)
            _0x45ff02[ImGui.Col.TitleBgActive] = _0x263d5b(0.14, 0.14, 0.14, 1)
            _0x45ff02[ImGui.Col.TitleBgCollapsed] = _0x263d5b(
              0.14,
              0.14,
              0.14,
              1
            )
            _0x45ff02[ImGui.Col.MenuBarBg] = _0x263d5b(0.14, 0.14, 0.14, 1)
            _0x45ff02[ImGui.Col.ScrollbarBg] = _0x263d5b(0.17, 0.17, 0.17, 1)
            _0x45ff02[ImGui.Col.ScrollbarGrab] = _0x263d5b(0.25, 0.25, 0.25, 1)
            _0x45ff02[ImGui.Col.ScrollbarGrabHovered] = _0x263d5b(
              0.25,
              0.25,
              0.25,
              1
            )
            _0x45ff02[ImGui.Col.ScrollbarGrabActive] = _0x263d5b(
              0.25,
              0.25,
              0.25,
              1
            )
            _0x45ff02[ImGui.Col.CheckMark] = _0x263d5b(0.86, 0.87, 0.9, 1)
            _0x45ff02[ImGui.Col.SliderGrab] = _0x263d5b(0.48, 0.49, 0.51, 1)
            _0x45ff02[ImGui.Col.SliderGrabActive] = _0x263d5b(
              0.66,
              0.67,
              0.69,
              1
            )
            _0x45ff02[ImGui.Col.Button] = _0x263d5b(0.09, 0.1, 0.15, 1)
            _0x45ff02[ImGui.Col.ButtonHovered] = _0x263d5b(0.12, 0.13, 0.17, 1)
            _0x45ff02[ImGui.Col.ButtonActive] = _0x263d5b(0.07, 0.08, 0.13, 1)
            _0x45ff02[ImGui.Col.Header] = _0x263d5b(0.29, 0.34, 0.43, 1)
            _0x45ff02[ImGui.Col.HeaderHovered] = _0x263d5b(0.21, 0.24, 0.31, 1)
            _0x45ff02[ImGui.Col.HeaderActive] = _0x263d5b(0.29, 0.34, 0.43, 1)
            _0x45ff02[ImGui.Col.Separator] = _0x263d5b(0.43, 0.43, 0.5, 0.5)
            _0x45ff02[ImGui.Col.SeparatorHovered] = _0x263d5b(
              0.43,
              0.43,
              0.5,
              0.5
            )
            _0x45ff02[ImGui.Col.SeparatorActive] = _0x263d5b(
              0.43,
              0.43,
              0.5,
              0.5
            )
            _0x45ff02[ImGui.Col.ResizeGrip] = _0x263d5b(0.26, 0.59, 0.98, 0.25)
            _0x45ff02[ImGui.Col.ResizeGripHovered] = _0x263d5b(
              0.26,
              0.59,
              0.98,
              0.67
            )
            _0x45ff02[ImGui.Col.ResizeGripActive] = _0x263d5b(
              0.26,
              0.59,
              0.98,
              0.95
            )
            _0x45ff02[ImGui.Col.Tab] = _0x263d5b(0, 0, 0, 0)
            _0x45ff02[ImGui.Col.TabHovered] = _0x263d5b(0, 0, 0, 0)
            _0x45ff02[ImGui.Col.TabActive] = _0x263d5b(0.2, 0.22, 0.27, 1)
            _0x45ff02[ImGui.Col.TabUnfocused] = _0x263d5b(0.07, 0.1, 0.15, 0.97)
            _0x45ff02[ImGui.Col.TabUnfocusedActive] = _0x263d5b(
              0.14,
              0.26,
              0.42,
              1
            )
            _0x45ff02[ImGui.Col.PlotLines] = _0x263d5b(0.61, 0.61, 0.61, 1)
            _0x45ff02[ImGui.Col.PlotLinesHovered] = _0x263d5b(1, 0.43, 0.35, 1)
            _0x45ff02[ImGui.Col.PlotHistogram] = _0x263d5b(0.9, 0.7, 0, 1)
            _0x45ff02[ImGui.Col.PlotHistogramHovered] = _0x263d5b(1, 0.6, 0, 1)
            _0x45ff02[ImGui.Col.TextSelectedBg] = _0x263d5b(
              0.25,
              0.25,
              0.25,
              0.5
            )
            _0x45ff02[ImGui.Col.DragDropTarget] = _0x263d5b(1, 1, 0, 0.9)
            _0x45ff02[ImGui.Col.NavHighlight] = _0x263d5b(0.26, 0.59, 0.98, 1)
            _0x45ff02[ImGui.Col.NavWindowingHighlight] = _0x263d5b(1, 1, 1, 0.7)
            _0x45ff02[ImGui.Col.NavWindowingDimBg] = _0x263d5b(
              0.8,
              0.8,
              0.8,
              0.2
            )
            _0x45ff02[ImGui.Col.ModalWindowDimBg] = _0x263d5b(
              0.8,
              0.8,
              0.8,
              0.35
            )
          },
          _0x567923 = (_0x39f612, _0x1ed7f8) =>
            new ImGui.Vec2(_0x39f612, _0x1ed7f8),
          _0x263d5b = (_0x254156, _0x313a7f, _0x18d470, _0x5db1c1 = 1) =>
            new ImGui.Vec4(_0x254156, _0x313a7f, _0x18d470, _0x5db1c1),
          _0x1cfe57 = (_0x915534, _0x53cd1d, _0x17fb1d) => {
            if (
              (ImGui.Button(_0x53cd1d) && (_0x17fb1d.state = true),
              _0x17fb1d.state)
            ) {
              let _0x4207c8 = ((_0x2bc9f1, _0x130ef4) => {
                let _0x4779b9 = false,
                  _0x1b5d66 = ImGui.GetIO()
                return (
                  ImGui.SetNextWindowSize(_0x567923(0, 0)),
                  ImGui.SetNextWindowPos(
                    _0x567923(
                      0.5 * _0x1b5d66.DisplaySize.x,
                      0.5 * _0x1b5d66.DisplaySize.y
                    ),
                    ImGui.Cond.Always,
                    _0x567923(0.5, 0.5)
                  ),
                  ImGui.SetNextWindowFocus(),
                  ImGui.Begin(
                    'press the key',
                    null,
                    ImGui.WindowFlags.NoCollapse | ImGui.WindowFlags.NoResize
                  ),
                  ImGui.Text('Current bind: ' + JSON.stringify(_0x130ef4)),
                  ImGui.Text(
                    'Pressed keys: ' +
                      JSON.stringify(_0x2bc9f1.keyPressing.keyPresseds)
                  ),
                  ImGui.Button(
                    'OK',
                    _0x567923(0.3 * ImGui.GetWindowSize().x, 30)
                  ) &&
                    (_0x4779b9 = JSON.parse(
                      JSON.stringify(_0x2bc9f1.keyPressing.keyPresseds)
                    )),
                  ImGui.SameLine(),
                  ImGui.Button(
                    'Clear',
                    _0x567923(0.3 * ImGui.GetWindowSize().x, 30)
                  ) && (_0x2bc9f1.keyPressing.keyPresseds = []),
                  ImGui.SameLine(),
                  ImGui.Button(
                    'Cancel',
                    _0x567923(0.3 * ImGui.GetWindowSize().x, 30)
                  ) && (_0x4779b9 = true),
                  ImGui.End(),
                  _0x4779b9
                )
              })(_0x915534, _0x17fb1d.keys)
              if (false !== _0x4207c8) {
                true !== _0x4207c8 && (_0x17fb1d.keys = _0x4207c8)
                _0x17fb1d.state = false
              }
            }
          }
        ImGui.ImVec2 = function (_0x176ead, _0x2ac9db) {
          return new this.Vec2(_0x176ead, _0x2ac9db)
        }
        ImGui.Child = function (
          _0x15e097,
          _0x21c325,
          _0xbfd628,
          _0x3f82ba = ImGui.ImVec2(0, 0)
        ) {
          this.BeginChild(
            _0x15e097,
            _0x3f82ba,
            true,
            _0x21c325 ? ImGui.WindowFlags.MenuBar : void 0
          )
          _0x21c325 &&
            this.BeginMenuBar() &&
            (ImGui.TextCentered(_0x21c325), ImGui.EndMenuBar())
          _0xbfd628()
          this.EndChild()
        }
        ImGui.TextCentered = function (_0x543edd) {
          const _0x398e40 = this.GetWindowSize().x,
            _0x4a57a4 = this.CalcTextSize(_0x543edd).x
          this.SetCursorPosX(0.5 * (_0x398e40 - _0x4a57a4))
          this.Text(_0x543edd)
        }
      },
      487: (_0x322d2c, _0x457d91, _0x1f3664) => {
        const _0x15c475 = { Z: () => _0x513fca }
        _0x1f3664.d(_0x457d91, _0x15c475)
        var _0x38022c = _0x1f3664(792)
        const _0x513fca = class {
          #e;
          ['isOpen'] = false;
          ['name'] = 'TOXIC'
          constructor(_0x3ce319) {
            this.#e = _0x3ce319
            ;(async () => {
              _0x554d61.appendChild(_0xbf34af)
              _0xbf34af.id = 'canvas__imgui'
              _0xbf34af.tabIndex = 0
              _0xbf34af.style.position = 'absolute'
              _0xbf34af.style.left = '0px'
              _0xbf34af.style.right = '0px'
              _0xbf34af.style.top = '0px'
              _0xbf34af.style.bottom = '0px'
              _0xbf34af.style.width = '100%'
              _0xbf34af.style.height = '100%'
              _0xbf34af.style.zIndex = '1000'
              _0xbf34af.style.visibility = 'hidden'
              _0xbf34af.getContext('webgl2', _0x1feaf9) ||
                _0xbf34af.getContext('webgl', _0x2b3a79)
              ImGui.CHECKVERSION()
              ImGui.CreateContext()
              const _0x101654 = ImGui.GetIO()
              _0x38022c.oB()
              _0x101654.Fonts.AddFontDefault()
              const _0x554d61 =
                  document.getElementById('output') || document.body,
                _0xbf34af = (unsafeWindow.canvas =
                  document.createElement('canvas'))
              _0x554d61.appendChild(_0xbf34af),
                (_0xbf34af.id = 'canvas__imgui'),
                (_0xbf34af.tabIndex = 0),
                (_0xbf34af.style.position = 'absolute'),
                (_0xbf34af.style.left = '0px'),
                (_0xbf34af.style.right = '0px'),
                (_0xbf34af.style.top = '0px'),
                (_0xbf34af.style.bottom = '0px'),
                (_0xbf34af.style.width = '100%'),
                (_0xbf34af.style.height = '100%'),
                (_0xbf34af.style.zIndex = '1000'),
                (_0xbf34af.style.visibility = 'hidden'),
                _0xbf34af.getContext('webgl2', _0x1feaf9) ||
                  _0xbf34af.getContext('webgl', _0x2b3a79)
            })()
            document.addEventListener('keyup', (_0x37d371) => {
              if (!_0x3ce319.utils.isChatOpen()) {
                switch (_0x37d371.code) {
                  case 'Insert':
                  case 'Numpad0':
                  case 'Slash':
                    this.onMenuKeyPressed()
                }
              }
            })
            setInterval(() => {
              var _0x2d7178, _0x5ed3f2, _0x169d1e
              this.name =
                ((_0x2d7178 = this.name),
                (_0x5ed3f2 = Math.floor(Math.random() * this.name.length)),
                _0x2d7178.substring(0, _0x5ed3f2) +
                  ((_0x169d1e = _0x2d7178[_0x5ed3f2]) !=
                    _0x169d1e.toLowerCase() ||
                  _0x169d1e == _0x169d1e.toUpperCase()
                    ? _0x2d7178[_0x5ed3f2].toLowerCase()
                    : _0x2d7178[_0x5ed3f2].toUpperCase()) +
                  _0x2d7178.substring(_0x5ed3f2 + 1))
            }, 500)
          }
          ['showMenu'] = () => {
            ImGui_Impl.Init(canvas)
            canvas.style.visibility = ''
            document.exitPointerLock()
            requestAnimationFrame(this.process)
          };
          ['hideMenu'] = () => {
            ImGui_Impl.Shutdown()
            canvas.style.visibility = 'hidden'
            this.#e.config.saveStates()
          };
          ['onMenuKeyPressed'] = () => {
            ;(this.isOpen = !this.isOpen) ? this.showMenu() : this.hideMenu()
          };
          ['process'] = (_0x44427b) => {
            if (!this.isOpen) {
              return
            }
            ImGui_Impl.NewFrame(_0x44427b)
            ImGui.NewFrame()
            const _0x399cc0 = ImGui.GetMainViewport()
            ImGui.SetNextWindowPos(
              new ImGui.Vec2(
                _0x399cc0.WorkPos.x + 650,
                _0x399cc0.WorkPos.y + 20
              ),
              ImGui.Cond.FirstUseEver
            )
            ImGui.SetNextWindowSize(
              new ImGui.Vec2(550, 680),
              ImGui.Cond.FirstUseEver
            )
            ImGui.Begin(
              'vevr',
              null,
              ImGui.WindowFlags.NoCollapse | ImGui.WindowFlags.NoTitleBar
            )
            ImGui.Child('##child', this.name, () => {
              ImGui.CollapsingHeader('Remove Mines') &&
                (ImGui.TextCentered('Removes mines on the map to increase fps'),
                ImGui.Separator(),
                ImGui.TextCentered('Self - removes mines placed only by you'),
                ImGui.TextCentered('Team - removes mines set by your team'),
                ImGui.TextCentered('All - removes all mines'),
                ImGui.TextCentered('Enemy - removes all enemy mines'),
                ImGui.Checkbox(
                  'State##removeMines',
                  _0x38022c.Pd(this.#e.cfg.removeMines, 'state')
                ),
                ImGui.TextCentered('Mode: ' + this.#e.cfg.removeMines.type),
                ImGui.Button('Self') && (this.#e.cfg.removeMines.type = 'SELF'),
                ImGui.SameLine(),
                ImGui.Button('Team') && (this.#e.cfg.removeMines.type = 'TEAM'),
                ImGui.SameLine(),
                ImGui.Button('All') && (this.#e.cfg.removeMines.type = 'ALL'),
                ImGui.SameLine(),
                ImGui.Button('Enemy') &&
                  (this.#e.cfg.removeMines.type = 'ENEMY'))
              ImGui.CollapsingHeader('WallHack') &&
                (ImGui.TextCentered(
                  'Draws players nicknames at a great distance and through walls'
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Increase distance'),
                ImGui.Checkbox(
                  'State##incDist',
                  _0x38022c.Pd(this.#e.cfg.wallHack.incDist, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindIncDist',
                  this.#e.cfg.wallHack.incDist.bind
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Through walls'),
                ImGui.Checkbox(
                  'State##throughWalls',
                  _0x38022c.Pd(this.#e.cfg.wallHack.throughWalls, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindThroughWalls',
                  this.#e.cfg.wallHack.throughWalls.bind
                ))
              ImGui.CollapsingHeader('Movement') &&
                (ImGui.TextCentered(
                  'Jump - the tank jumps with the specified force'
                ),
                ImGui.TextCentered(
                  'Freeze - freezes your tank, it impossible be moved'
                ),
                ImGui.TextCentered('Unflip - flips your tank'),
                ImGui.Separator(),
                ImGui.TextCentered('Jump'),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindJump',
                  this.#e.cfg.movement.jump.bind
                ),
                ImGui.SliderInt(
                  'Force##jumpForce',
                  _0x38022c.Pd(this.#e.cfg.movement.jump, 'force'),
                  0,
                  1000
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Freeze'),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindFreeze',
                  this.#e.cfg.movement.freeze.bind
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Unflip'),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindUnflip',
                  this.#e.cfg.movement.unflip.bind
                ))
              ImGui.CollapsingHeader('Clicker') &&
                (ImGui.TextCentered('Automatically activates supplies'),
                ImGui.Separator(),
                ImGui.TextCentered('Double armor'),
                ImGui.Checkbox(
                  'State##autoArmor',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoArmor, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindAutoArmor',
                  this.#e.cfg.clicker.autoArmor.bind
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Double damage'),
                ImGui.Checkbox(
                  'State##autoDamage',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoDamage, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindAutoDamage',
                  this.#e.cfg.clicker.autoDamage.bind
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Double nitro'),
                ImGui.Checkbox(
                  'State##autoNitro',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoNitro, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindAutoNitro',
                  this.#e.cfg.clicker.autoNitro.bind
                ),
                ImGui.Separator(),
                ImGui.TextCentered('First aid kit'),
                ImGui.Checkbox(
                  'State##autoHealing',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoHealing, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindAutoHealing',
                  this.#e.cfg.clicker.autoHealing.bind
                ),
                ImGui.SliderInt(
                  'Multiply##healginMply',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoHealing, 'multiply'),
                  1,
                  10
                ),
                ImGui.Separator(),
                ImGui.TextCentered('Mine'),
                ImGui.Checkbox(
                  'State##autoMining',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoMining, 'state')
                ),
                ImGui.SameLine(),
                _0x38022c.cI(
                  this.#e,
                  'Bind##bindAutoMining',
                  this.#e.cfg.clicker.autoMining.bind
                ),
                ImGui.SliderInt(
                  'Multiply##miningMply',
                  _0x38022c.Pd(this.#e.cfg.clicker.autoMining, 'multiply'),
                  1,
                  10
                ))
              ImGui.Text(
                'Application average ' +
                  (1000 / ImGui.GetIO().Framerate).toFixed(3) +
                  ' ms/frame (' +
                  ImGui.GetIO().Framerate.toFixed(1) +
                  ' FPS)'
              )
            })
            ImGui.End()
            ImGui.EndFrame()
            ImGui.Render()
            ImGui_Impl.RenderDrawData(ImGui.GetDrawData())
            requestAnimationFrame(this.process)
          }
        }
      },
      580: (_0x16df66, _0x52d182, _0x1372fd) => {
        const _0x5211f1 = { Z: () => _0x1d14ce }
        _0x1372fd.d(_0x52d182, _0x5211f1)
        const _0x3d1a97 = {
          id: '0',
          state: true,
          type: 'ALL',
        }
        const _0x1afb72 = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x357736 = {
          state: true,
          bind: _0x1afb72,
        }
        const _0x5f5c79 = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x3a4757 = {
          state: true,
          bind: _0x5f5c79,
        }
        const _0x45077b = {
          id: '0',
          incDist: _0x357736,
          throughWalls: _0x3a4757,
        }
        const _0x32c2bd = {
          keys: ['KeyJ'],
          state: false,
        }
        const _0x599292 = {
          force: 100,
          bind: _0x32c2bd,
        }
        const _0xa45439 = {
          keys: ['KeyF'],
          pressed: false,
          state: false,
        }
        const _0x31bb5c = { bind: _0xa45439 }
        const _0x36f071 = {
          keys: ['KeyU'],
          pressed: false,
          state: false,
        }
        const _0x529ad2 = { bind: _0x36f071 }
        const _0x58a2ab = {
          id: '0',
          jump: _0x599292,
          freeze: _0x31bb5c,
          unflip: _0x529ad2,
        }
        const _0x5e0636 = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x16ad54 = {
          state: false,
          multiply: 1,
          bind: _0x5e0636,
        }
        const _0x1cd58a = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x43da4a = {
          state: false,
          bind: _0x1cd58a,
        }
        const _0x519dc2 = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x4c9d66 = {
          state: false,
          bind: _0x519dc2,
        }
        const _0xa5c9f9 = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x5d2be6 = {
          state: false,
          bind: _0xa5c9f9,
        }
        const _0x3d1d90 = {
          keys: [],
          pressed: false,
          state: false,
        }
        const _0x507db0 = {
          state: false,
          multiply: 1,
          bind: _0x3d1d90,
        }
        const _0x1da966 = {
          id: '0',
          autoHealing: _0x16ad54,
          autoArmor: _0x43da4a,
          autoDamage: _0x4c9d66,
          autoNitro: _0x5d2be6,
          autoMining: _0x507db0,
        }
        const _0x1e042a = {
          removeMines: _0x3d1a97,
          wallHack: _0x45077b,
          movement: _0x58a2ab,
          clicker: _0x1da966,
        }
        const _0x1d14ce = class {
          ['data'] = _0x1e042a
          constructor() {
            for (const _0xbe2bbd in this.data) {
              let _0x1c4705 = localStorage.getItem(_0xbe2bbd)
              _0x1c4705 &&
              ((_0x1c4705 = JSON.parse(_0x1c4705)),
              this.data[_0xbe2bbd].id === _0x1c4705.id)
                ? (this.data[_0xbe2bbd] = _0x1c4705)
                : (console.error('[TXC] No config found - ' + _0xbe2bbd),
                  this.saveState(_0xbe2bbd))
            }
            this.saveStates()
          }
          ['clearCookies'] = () => {
            for (let _0x389bab in this.data) localStorage.removeItem(_0x389bab)
          };
          ['saveState'] = (_0x15017c) =>
            localStorage.setItem(
              _0x15017c,
              JSON.stringify(this.data[_0x15017c])
            );
          ['saveStates'] = () => {
            for (let _0x11c82 in this.data) this.saveState(_0x11c82)
          }
        }
      },
      680: (_0x5ebaac, _0x2a8ebf, _0x41eadb) => {
        const _0x4344e6 = { Z: () => _0x5f3c63 }
        _0x41eadb.d(_0x2a8ebf, _0x4344e6)
        const _0x5f3c63 = class {
          ['keyPresseds'] = []
          constructor() {
            document.addEventListener('keydown', (_0x170cfe) => {
              false === this.keyPresseds.includes(_0x170cfe.code) &&
                this.keyPresseds.push(_0x170cfe.code)
            })
            document.addEventListener('keyup', (_0x56a943) => {
              if (true === this.keyPresseds.includes(_0x56a943.code)) {
                let _0x5f5666 = this.keyPresseds.indexOf(_0x56a943.code)
                _0x5f5666 > -1 && this.keyPresseds.splice(_0x5f5666, 1)
              }
            })
            addEventListener('visibilitychange', () => {
              this.keyPresseds = []
            })
            addEventListener('focus', () => {
              this.keyPresseds = []
            })
          }
          ['isKeyPressed'] = (_0x313289) => this.keyPresseds.includes(_0x313289)
        }
      },
      75: (_0x435e68, _0x5c764e, _0x39b536) => {
        const _0x2f6d59 = { Z: () => _0xb02ddb }
        _0x39b536.d(_0x5c764e, _0x2f6d59)
        const _0xb02ddb = class {
          #e;
          ['keyPressing']
          constructor(_0xbc420b, _0x375bc1) {
            this.#e = _0xbc420b
            this.keyPressing = _0x375bc1
          }
          ['equal'] = (_0x14d7bf, _0x2a8888) =>
            _0x14d7bf?.toUpperCase() === _0x2a8888?.toUpperCase();
          ['fuzzySearch'] = (_0x17ef52, _0x2225ed) => {
            var _0x269760 = _0x2225ed.length,
              _0x5417d0 = _0x17ef52.length
            if (_0x5417d0 > _0x269760) {
              return false
            }
            if (_0x5417d0 === _0x269760) {
              return _0x17ef52 === _0x2225ed
            }
            _0x16432f: for (
              var _0x16c930 = 0, _0x152d70 = 0;
              _0x16c930 < _0x5417d0;
              _0x16c930++
            ) {
              for (
                var _0x15a37d = _0x17ef52.charCodeAt(_0x16c930);
                _0x152d70 < _0x269760;

              ) {
                if (_0x2225ed.charCodeAt(_0x152d70++) === _0x15a37d) {
                  continue _0x16432f
                }
              }
              return false
            }
            return true
          };
          ['getObjectName'] = (_0x368959) =>
            _0x368959?.constructor?['$metadata$']?.simpleName;
          ['findObjectByName'] = (
            _0x19e3f0,
            _0x476e34,
            _0x2f3ee9 = -1,
            _0x2f831a = false,
            _0x4900dc = false
          ) => {
            let _0xc84993 = 0
            for (const _0x659648 in _0x19e3f0)
              if (
                'object' == typeof _0x19e3f0[_0x659648] &&
                (_0x4900dc
                  ? this.fuzzySearch(
                      _0x476e34,
                      this.getObjectName(_0x19e3f0[_0x659648])
                    )
                  : this.equal(
                      this.getObjectName(_0x19e3f0[_0x659648]),
                      _0x476e34
                    ))
              ) {
                if (-1 === _0x2f3ee9 || _0x2f3ee9 === _0xc84993) {
                  return _0x2f831a
                    ? [_0x659648, _0x19e3f0[_0x659648]]
                    : _0x19e3f0[_0x659648]
                }
                _0xc84993++
              }
          };
          ['findByIndex'] = (_0x3cfcef, _0xed90f0, _0x2abefd = false) => {
            const _0x3ab414 = Object.entries(_0x3cfcef)?.[_0xed90f0]
            return _0x2abefd
              ? _0x3ab414
              : 'object' == typeof _0x3ab414?.[1]
              ? _0x3ab414[1]
              : _0x3ab414?.[0]
          };
          ['findByPath'] = (_0x50ee31, _0x1afdbd) => {
            if ('string' != typeof _0x1afdbd && !Array.isArray(_0x1afdbd)) {
              throw new Error(
                "Путь должен быть строкой 'obj.obj2.obj3...' или массивом [ 'obj', 'obj2', 'obj3' ... ]"
              )
            }
            const _0x35a3ef = Array.isArray(_0x1afdbd)
              ? _0x1afdbd
              : _0x1afdbd.split('.')
            let _0x435fe3 = _0x50ee31
            return (
              _0x35a3ef.forEach((_0x407451, _0x42edca) => {
                if (!_0x435fe3) {
                  return
                }
                const _0x4d3826 = _0x42edca === _0x35a3ef.length - 1
                if (_0x435fe3[_0x407451]) {
                  _0x435fe3 = _0x435fe3[_0x407451]
                } else {
                  if ('i:' === _0x407451.slice(0, 2)) {
                    _0x435fe3 = this.findByIndex(
                      _0x435fe3,
                      _0x407451.slice(2, _0x407451.length),
                      _0x4d3826
                    )
                  } else {
                    if ('fuzzy:' === _0x407451.slice(0, 6)) {
                      _0x435fe3 = this.findObjectByName(
                        _0x435fe3,
                        _0x407451.slice(6, _0x407451.length),
                        -1,
                        _0x4d3826,
                        true
                      )
                    } else {
                      const _0x4197fe = _0x407451.split(':')
                      _0x435fe3 =
                        2 === _0x4197fe.length
                          ? this.findObjectByName(
                              _0x435fe3,
                              _0x4197fe[0],
                              +_0x4197fe[1],
                              _0x4d3826
                            )
                          : this.findObjectByName(
                              _0x435fe3,
                              _0x407451,
                              -1,
                              _0x4d3826
                            )
                    }
                  }
                }
                return 'object' != typeof _0x435fe3 ? _0x435fe3 : void 0
              }),
              _0x435fe3
            )
          };
          ['getComponentNames'] = (_0x222c8b) => {
            if (
              'object' != typeof _0x222c8b &&
              'function' != typeof _0x222c8b
            ) {
              return
            }
            const _0x2cb4f3 = {
              _0x4364f9: _0x11fd9c,
              _0x280da9: _0x11fd9c,
              _0x557764: _0x11fd9c,
            }
            for (const [_0x4364f9, _0x11fd9c] of Object.entries(_0x222c8b)) {
              if (Array.isArray(_0x11fd9c)) {
                continue
              }
              if ('function' == typeof _0x11fd9c && _0x11fd9c.callableName) {
                _0x2cb4f3[_0x11fd9c.callableName] = _0x222c8b[_0x4364f9]
                continue
              }
              const _0x557764 =
                _0x11fd9c?.constructor?['$metadata$']?.simpleName
              if (_0x557764) {
                if (_0x2cb4f3[_0x557764]) {
                  for (let _0xde412 = 0; ; _0xde412++) {
                    const _0x280da9 = _0x557764 + '_' + _0xde412
                    if (!_0x2cb4f3[_0x280da9]) {
                      break
                    }
                  }
                } else {
                }
              }
            }
            return (_0x2cb4f3.original = _0x222c8b), _0x2cb4f3
          };
          ['isChatOpen'] = () =>
            document.getElementsByTagName('input').length > 0;
          ['getKeyState'] = (_0x6508fd) =>
            this.keyPressing.isKeyPressed(_0x6508fd) && !this.isChatOpen();
          ['isArrayValid'] = (_0xc0acb6) =>
            void 0 !== _0xc0acb6 &&
            Array.isArray(_0xc0acb6) &&
            _0xc0acb6.length > 0;
          ['isArrayPressed'] = (_0x5b9c97) => {
            if (!this.isArrayValid(_0x5b9c97)) {
              return false
            }
            for (let _0x4fb947 of _0x5b9c97)
              if (!this.getKeyState(_0x4fb947)) {
                return false
              }
            return true
          };
          ['isBindPressed'] = (_0x271455) => {
            if (this.#e.menu.isOpen || this.isChatOpen()) {
              return false
            }
            let _0x391d14 = _0x271455.bind
            if ('pressed' in _0x391d14) {
              let _0x21eaa6 = this.isArrayPressed(_0x391d14.keys)
              if (false === _0x391d14.pressed) {
                if (true === _0x21eaa6) {
                  return (_0x391d14.pressed = true), true
                }
              } else {
                if (true !== _0x21eaa6) {
                  return (_0x391d14.pressed = false), false
                }
              }
              return false
            }
            return this.isArrayPressed(_0x391d14.keys)
          }
        }
      },
      817: (_0x3f8cc6, _0x525365, _0x2dfd2f) => {
        var _0x3b7027 = _0x2dfd2f(662),
          _0x5b8fe2 = _0x2dfd2f(75),
          _0x53c23f = _0x2dfd2f(680),
          _0x14501e = _0x2dfd2f(978),
          _0x4bb8c1 = _0x2dfd2f(519),
          _0x569e03 = _0x2dfd2f(487),
          _0x1cdc8f = _0x2dfd2f(580),
          _0xa7bdec = _0x2dfd2f(656),
          _0x21a404 = _0x2dfd2f(571)
        let _0x332e47, _0x445d46
        new (class {
          ['keyPressing'];
          ['gameObjects'];
          ['utils'];
          ['removeMines'];
          ['movement'];
          ['menu'];
          ['config'];
          ['clicker'];
          ['wallHack']
          constructor() {
            console.log('%cToXiC', 'font-size: 200px; color: rgb(64, 255, 0);')
            this.keyPressing = new _0x53c23f.Z()
            this.config = new _0x1cdc8f.Z()
            this.utils = new _0x5b8fe2.Z(this, this.keyPressing)
            this.gameObjects = new _0x3b7027.Z(this)
            this.removeMines = new _0x14501e.Z(this)
            this.movement = new _0x4bb8c1.Z(this)
            this.clicker = new _0xa7bdec.Z(this)
            this.wallHack = new _0x21a404.Z(this)
            this.menu = new _0x569e03.Z(this)
            this.process()
          }
          get ['cfg']() {
            return this.config.data
          }
          ['reset'] = () => {
            this.gameObjects.reset()
            this.removeMines.reset()
          };
          ['process'] = () => {
            if (
              (!this.gameObjects.world ||
                (_0x332e47 && _0x445d46) ||
                ((_0x332e47 = this.utils.findByPath(
                  this.gameObjects.world,
                  'arrayList:2'
                )?.[0]),
                (_0x445d46 = this.utils.findByPath(
                  this.gameObjects.world,
                  'arrayList:2.i:1'
                )?.[0])),
              0 === this.gameObjects.world?[_0x332e47]?[_0x445d46]?.length ||
                !this.gameObjects.world?[_0x332e47]?.[_0x445d46])
            ) {
              return this.reset(), requestAnimationFrame(this.process)
            }
            this.removeMines.process()
            this.movement.process()
            this.clicker.process()
            this.wallHack.process()
            requestAnimationFrame(this.process)
          }
        })()
      },
    },
    _0x17181f = {}
  function _0x16f7f3(_0x3c4b9a) {
    var _0x5db68d = _0x17181f[_0x3c4b9a]
    if (void 0 !== _0x5db68d) {
      return _0x5db68d.exports
    }
    const _0x39ac31 = { exports: {} }
    var _0x4db737 = (_0x17181f[_0x3c4b9a] = _0x39ac31)
    return (
      _0x1d80be[_0x3c4b9a](_0x4db737, _0x4db737.exports, _0x16f7f3),
      _0x4db737.exports
    )
  }
  _0x16f7f3.d = (_0x1afb6c, _0x3cc40f) => {
    for (var _0x4252aa in _0x3cc40f)
      _0x16f7f3.o(_0x3cc40f, _0x4252aa) &&
        !_0x16f7f3.o(_0x1afb6c, _0x4252aa) &&
        Object.defineProperty(_0x1afb6c, _0x4252aa, {
          enumerable: true,
          get: _0x3cc40f[_0x4252aa],
        })
  }
  _0x16f7f3.o = (_0x4ab657, _0x4e58f5) =>
    Object.prototype.hasOwnProperty.call(_0x4ab657, _0x4e58f5)
  _0x16f7f3(817)
  _0x16f7f3(925)
  _0x16f7f3(662)
  _0x16f7f3(474)
  _0x16f7f3(792)
  _0x16f7f3(487)
  _0x16f7f3(580)
  _0x16f7f3(680)
  _0x16f7f3(75)
  _0x16f7f3(656)
  _0x16f7f3(519)
  _0x16f7f3(978)
  _0x16f7f3(571)
})()
