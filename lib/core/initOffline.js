let loaded = false

export default predicate => {
  if (predicate && !loaded) {
    navigator.serviceWorker
      .register('/sw.js', {
        scope: './',
      })
      .then(reg => {
        loaded = true

        reg.onupdatefound = () => {
          const installingWorker = reg.installing

          installingWorker.onstatechange = () => {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  console.log('New or updated content is available.')
                } else {
                  console.log('Content is now available offline!')
                }
                break
              case 'redundant':
                console.log('The installing serviceWorker became redundant.')
                break
            }
          }
        }
      })
      .catch(e => console.error('Error during service worker registration:', e))
  }
}
