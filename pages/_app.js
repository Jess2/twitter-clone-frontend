import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

// 모든 컴포넌트의 공통
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default App;