import Navbar from '@/components/Navbar';
import { Alert } from 'flowbite-react';
import getConfig from 'next/config';
import { Dropdown } from "flowbite-react";


const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
   <>
   <Navbar/>
      <h1 className='text-5xl bg-purple-500'>Hello</h1>
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        
      </div>
      <Alert color="info">Alert!</Alert>;
      <Dropdown label="Dropdown button">
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>
   </>
  );
};

export default Home;
