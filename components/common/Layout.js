import BottomNavigation from '../navs/BottomNavigation'
import InvoiceNavigationContainer
  from '../../containers/InvoiceNavigationContainer'
import Loader from './Loader'
import Navbar from '../navs/Navbar'

/**
 * We want to get this layout when user is authenticated :
 *
 * |-------------------------------------------|
 * |                  Navbar                   |
 * |-------------------------------------------|
 * |    Side     |                             |
 * |             |                             |
 * |             |           Main              |
 * |             |                             |
 * |-------------|                             |
 * |             |                             |
 * | Bottom-Side |-----------------------------|
 * |             |       Bottom Navbar         |
 * |-------------------------------------------|
 *
 * Don't forget to hide Side + Bottom-side on mobile.
 *
 * When user is not authenticated, we need this :
 *
 * |-------------------------------------------|
 * |                  Navbar                   |
 * |-------------------------------------------|
 * |                                           |
 * |                                           |
 * |                   Main                    |
 * |                                           |
 * |                                           |
 * |-------------------------------------------|
 */

export default ({
  children,
  isAuthenticated,
  url,
  selectedBottomNav,
  isLoading,
  data: { user },
  actions: { logout, selectBottomNav },
  AsideComponent = InvoiceNavigationContainer,
}) => (
  <div>
    <Navbar
      isAuthenticated={isAuthenticated}
      user={user}
      actions={{ logout }}
    />
    <section
      style={{
        display: 'flex',
        width: '100%',
        height: isAuthenticated && user ? '100vh' : '100vh',
      }}
    >
      {isAuthenticated &&
        user &&
        <aside className="left-side">
          <header className="left-side-aside-top">
            <AsideComponent />
          </header>
          <footer className="left-side-aside-bot">
            <div className="left-side-aside-bot-figure" />
          </footer>
        </aside>}
      <main
        className="right-side"
        style={{
          background: isAuthenticated && user ? '#FFF' : '#FFF',
        }}
      >
        {children}
      </main>
    </section>
    <Loader isLoading={isLoading} />
    <style jsx>{`
      .right-side {
        position: relative;
        overflow-y: auto;
        flex: 6;
      }

      .left-side {
        display: none;
        position: relative;
        height: 100%;
        min-width: 250px;
        flex: 1;
        color: #222;
        background: #fff;
      }

      .left-side-aside-top {
        position: relative;
        height: 65%;
        flex: 1;
        border-bottom: 1px solid #fff;
      }

      .left-side-aside-top::before {
        position: absolute;
        content: '';
        pointer-events: none;
        left: 50%;
        background: rgba(68, 138, 255, 0.89);
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        z-index: 3;
      }

      .left-side-aside-bot {
        position: relative;
        height: 35%;
        flex: 1;
      }

      .left-side-aside-bot-figure {
        position: absolute;
        display: block;
        width: calc(100% - 40px);
        height: 100%;
        left: 20px;
        top: 0;
        z-index: 5;
        background: url("static/attack.png") no-repeat bottom;
        background-size: contain;
      }

      @media all and (max-height: 500px) {
        .left-side-aside-bot-figure {
          display: none;
        }
      }

      @media all and (min-width: 728px) {
        .left-side {
          display: block;
        }
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
    `}</style>
  </div>
)

/**
 *     
 * {isAuthenticated &&
      user &&
      <BottomNavigation
        pathname={url.pathname}
        selectedBottomNav={selectedBottomNav}
        user={user}
        actions={{ selectBottomNav }}
      />}

 */
