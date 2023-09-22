export const Footer = ({porcentaje}) => {
  
  return (
    <div className="progress fixed-bottom">
      <div
        className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
        role="progressbar"
        style={{ width: `${porcentaje * 100}%`}}
        aria-valuenow={porcentaje}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {Math.floor(porcentaje * 100)}%
      </div>
    </div>
  );
};