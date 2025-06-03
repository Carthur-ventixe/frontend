import { Outlet } from 'react-router-dom';

function CenterLayout() {
  return (
    <div className="center-wrapper">
      <Outlet /> 
    </div>
  );
}

export default CenterLayout;
