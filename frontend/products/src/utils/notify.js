import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const success = (param) => {
    toast.success(`Succesfully ${param}`, {
        position: toast.POSITION.TOP_CENTER
      },{
        icon: "🚀"
      });
}
export const error = (error) => {
    toast.error(error.toString(), {
        position: toast.POSITION.TOP_CENTER
      });
}