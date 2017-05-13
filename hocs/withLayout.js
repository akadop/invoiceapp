import { Component } from 'react'
import Menu from '../components/Menu'
import { loadGetInitialProps } from 'next/dist/lib/utils'

// The basic layout that is going to be on every page.
// No point in repeating the code over and over for each page, just make it a wrapper that goes over every page.

export default ComposedComponent =>
  class WithLayout extends Component {
    static async getInitialProps(ctx) {
      return loadGetInitialProps(ComposedComponent, ctx)
    }

    render() {
      return (
        <div id="outer-container">
          <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <main id="page-wrap">
            <ComposedComponent {...this.props} />
          </main>
        </div>
      )
    }
  }
