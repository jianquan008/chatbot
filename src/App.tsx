import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import MainLayout from './components/MainLayout';
import 'antd/dist/reset.css';

function App() {
  return (
    <ConfigProvider 
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#87ceeb',
          colorInfo: '#87ceeb',
          colorLink: '#87ceeb',
        },
      }}
    >
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
