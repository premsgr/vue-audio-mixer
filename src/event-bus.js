//NOTE: The event bus pattern is discouraged with vue
//See https://v3-migration.vuejs.org/breaking-changes/events-api.html#event-bus
// import { createApp } from 'vue'
// const EventBus = createApp()
// export default EventBus;

import emitter from 'tiny-emitter/instance'

const EventBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
}

export default EventBus;