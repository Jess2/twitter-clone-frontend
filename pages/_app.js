import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

// 모든 컴포넌트의 공통
const App = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default App;