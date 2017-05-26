'use strict'

require('angular')
.module('ngAdventure')
.component('playerHistory', {
  template: require('./player-history.html'),
  controllerAs: 'playerHistoryCtrl',
  controller: ['$log', 'playerService', function($log, playerService){
    $log.debug('#history controller')
    this.history = playerService.history
  }]
})
