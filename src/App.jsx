import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [data , setData] = useState({
    name : "",
    email : "",
    message : "",
    to_name : "Alireza",
  });

  const handleChange = e =>{
    const { name, value } = e.target;
    setData({...data , [name] : value});
  }

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_r2f8ctk', 'template_zf9scz6', data , 'oRooksiF6akMdGXeQ')
    .then(function(response) {
      toast.success("ایمیل با موفقیت ارسال شد !");
       setData(
        {
          name : "",
          email : "",
          message : "",
          to_name : "Alireza",
        }
       )
    }, function(error) {
      toast.error("خطا در ارسال ایمیل !");
    });

  }

  return (
    <div className="container py-5">
        <div className="row py-5 justify-content-center">
          <div className="col-md-4 bg-white p-5 mt-5">
            <h2 className="pb-5 text-center">ارسال پیام به مدیریت</h2>
            <form>
              <div className="form-group">
                <input type="text" name="name" className="form-control p-3" placeholder="نام شما" value={data.name} onChange={(e) => handleChange(e)} />
              </div>
              <div className="form-group">
                <input type="text" name="email" className="form-control p-3" placeholder="ایمیل شما" value={data.email} onChange={(e) => handleChange(e)} />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control p-3" placeholder="پیام شما" value={data.message} onChange={(e) => handleChange(e)}></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-success w-100 p-2 text-white mt-5" onClick={(e) => SendEmail(e)} value="ارسال" />
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default App
