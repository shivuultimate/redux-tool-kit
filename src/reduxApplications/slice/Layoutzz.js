import {
    SettingOutlined,
    IdcardOutlined,
    LayoutOutlined
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import { Breadcrumb } from 'antd';
  import { useState } from 'react';
  import { useNavigate} from 'react-router-dom';
  import RouteApplications from '../../RouteApplications'; 

  const { Header, Sider, Content } = Layout;


  const Layoutzz = () => {

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{display:"flex", flexDirection:"row", height:32, margin:16, background:'rgba(255,255,255,0.2)',}} />
          <Menu
          onClick={({key})=>{
            if(key=="signout"){

            }else{
              navigate(key);
            }
          }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            items={[
              {
                key: '/',
                label: 'Dashboard',
              },
              {
                key: '/cost-analysis',
                icon: <SettingOutlined />,
                label: 'Cost analysis',
              },
              {
                key: '/resources',
                icon: <LayoutOutlined />,
                label: 'Resources',
              },

              {
                key: '/applications',
                icon: <IdcardOutlined />,
                label: 'Applications',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div style={{
              height: 60,
              backgroundColor: "lightblue",
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "100",
            }}
            ></div>
            <Breadcrumb
              style={{
                margin: '16px 0',
                color:"black",
              }}
            >
               <Breadcrumb
                routes={[
                  {
                    path: '/Charts',
                    breadcrumbName: 'Charts/',
                  },
                  {
                    path: '/List',
                    breadcrumbName: 'List',
                  
                  },
                ]}
              />

            </Breadcrumb> 
          </Header>
          <Content
            style={{
              margin: '35px 29px',
              padding: 24,
              minHeight: 600,
              background: colorBgContainer,
              padding: '0 50px',
            }}
          >
          <RouteApplications/> 
          </Content>
        </Layout>
      </Layout>
    );
  };



export default Layoutzz;