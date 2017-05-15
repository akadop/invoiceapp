export default ({ isLoading }) => {
  return (
    <div>
      <div className={isLoading ? 'container with-opacity' : 'container'}>
        <div className="loader-container">
          <img src="/static/three-dots.svg" width="55" />
        </div>
      </div>
      <style jsx>{`
        .container {
          position: fixed;
          top: 15%;
          right: 48.5%;
          opacity: 0;
          transition: opacity 1s;
        }

        .container.with-opacity {
          opacity: 1;
          transition: opacity 1s
        }

        .loader-container {
         transition: opacity 1s;
        }
      `}</style>
    </div>
  )
}
