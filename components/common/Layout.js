import BottomNavigation from '../navs/BottomNavigation'
import Loader from '../premice/Loader'
import Navbar from '../navs/Navbar'
import PromotionNavigationContainer
  from '../../containers/PromotionNavigationContainer'

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
  AsideComponent = PromotionNavigationContainer,
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
        height: isAuthenticated && user
          ? 'calc(100vh - (66px + 56px))'
          : 'calc(100vh - 66px)',
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
          background: isAuthenticated && user
            ? '#FAFAFA'
            : 'url("static/bg.svg") no-repeat center/cover',
        }}
      >
        {children}
      </main>
    </section>
    {isAuthenticated &&
      user &&
      <BottomNavigation
        pathname={url.pathname}
        selectedBottomNav={selectedBottomNav}
        user={user}
        actions={{ selectBottomNav }}
      />}
    <Loader isLoading={isLoading} />
    <style jsx>{`
      .right-side {
        position: relative;
        overflow-y: auto;
        height: 100%;
        flex: 6;
      }

      .left-side {
        display: none;
        position: relative;
        height: 100%;
        min-width: 250px;
        flex: 1;
        color: #fff;
        background: #424242;
      }

      .left-side-aside-top {
        position: relative;
        height: 65%;
        flex: 1;
        border-bottom: 2px solid #fff;
      }

      .left-side-aside-top::before {
        position: absolute;
        content: '';
        pointer-events: none;
        left: 50%;
        bottom: -20px;
        width: 100px;
        height: 100px;
        transform: translate3d(-50%, 20px, 0) rotate(45deg);
        background: #3F51B5;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        z-index: 5;
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
