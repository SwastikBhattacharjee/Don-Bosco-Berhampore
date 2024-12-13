import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import GalleryPage from '../pages/GalleryPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
]);