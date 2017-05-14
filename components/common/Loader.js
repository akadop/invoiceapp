export default ({ isLoading }) => {
  return (
    <div>
      <div className={isLoading ? 'container with-opacity' : 'container'}>
        <div className="circle-container">
          <div className="circle" />
        </div>
        <div className="circle-container">
          <div className="circle" />
        </div>
        <div className="circle-container">
          <div className="circle" />
        </div>
      </div>
      <style jsx>{`
        .container {
          position: fixed;
          top: 5%;
          right: 15%;
          opacity: 0;
          transition: opacity 1s;
        }

        .container.with-opacity {
         opacity: 1;
         transition: opacity 1s;
        }

        .circle-container {
          width: 200px;
          height: 200px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .circle-container:nth-child(2):after {
          animation-delay: -.3s;
        }

        .circle-container:nth-child(3):after {
          animation-delay: -.6s;
        }

        .circle {
          width: 36px;
          height: 36px;
          background: url('static/icon.svg');
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: 50%;
          animation: anim 1250ms ease-in-out infinite;
        }

        .circle-container:nth-child(2) .circle {
          animation-delay: -.3s;
        }

        .circle-container:nth-child(3) .circle {
          animation-delay: -.6s;
        }

        @keyframes anim {
          0% {
            transform-origin: 400% 50%;
            transform: rotate(0);
          }
          100% {
            transform-origin: 400% 50%;
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
