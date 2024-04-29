import React, { useState, useEffect } from 'react'
import SabpaisaPaymentGateway from './SabpaisaPaymentGateway';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './App.css';
const App = (props) => {
   const location = useLocation();
    const searchParamss = new URLSearchParams(location.search);
      const amountget = searchParamss.get('amount');
  const nameget = searchParamss.get('name');
  const emailget = searchParamss.get('email');
  const url = `http://localhost:3001?amount=${amountget}&clientCode=RAVI76&transUserPassword=RAVI76_SP15268&transUserName=ravi.onepluse_15268&clientTxnId=lu2ajsho&authkey=b6wcogQ8RX2V3rxR&authiv=rT5lcnOUCMPxAzZG&payerName=${nameget}&payerEmail=${emailget}&payerMobile=0000000000&payerAddress=surat&env=prod`;

console.log(url)
const searchParams = new URLSearchParams(url.split('?')[1]);
const amounts = searchParams.get('amount');
const clientCodes = searchParams.get('clientCode');

const transUserPasswords = searchParams.get('transUserPassword');
const transUserNames = searchParams.get('transUserName');
const clientTxnIds = searchParams.get('clientTxnId');
const authkeys = searchParams.get('authkey');
const authivs = searchParams.get('authiv');
const payerNames = searchParams.get('payerName');
const payerEmails = searchParams.get('payerEmail');
const payerMobiles = searchParams.get('payerMobile');
const payerAddresss = searchParams.get('payerAddress');



  const [isOpen, setIsOpen] = useState(false);
  const [clientCode, setClientCode] = useState(clientCodes);
  const [transUserName, setTransUserName] = useState(transUserNames);
  const [transUserPassword, setTransUserPassword] = useState(transUserPasswords);
  const [authkey, setAuthkey] = useState(authkeys);
  const [authiv, setAuthiv] = useState(authivs);
  const [payerName, setPayerName] = useState(payerNames);
  const [payerEmail, setPayerEmail] = useState(payerEmails);
  const [payerMobile, setPayerMobile] = useState(payerMobiles);
  const [clientTxnId, setclientTxnId] = useState(clientTxnIds);
  const [amount, setAmount] = useState(amounts);
  const [payerAddress, setPayerAddress] = useState(payerAddresss);
  const [callbackUrl, setCallbackUrl] = useState("http://localhost:3000/response");
  const [data, setData] = useState(null)
  const [udf1, setudf1] = useState(null);
  const [udf2, setudf2] = useState(null);
  const [udf3, setudf3] = useState(null);
  const [udf4, setudf4] = useState(null);
  const [udf5, setudf5] = useState(null);
  const [udf6, setudf6] = useState(null);
  const [udf7, setudf7] = useState(null);
  const [udf8, setudf8] = useState(null);
  const [udf9, setudf9] = useState(null);
  const [udf10, setudf10] = useState(null);
  const [udf11, setudf11] = useState(null);
  const [udf12, setudf12] = useState(null); // client id
  const [udf13, setudf13] = useState(null); // plan id
  const [udf14, setudf14] = useState(null); // plan name
  const [udf15, setudf15] = useState(null); // application id (product id)
  const [udf16, setudf16] = useState(null); // client subscribe plan detail id(refer to DB)
  const [udf17, setudf17] = useState(null); // payment from the COB portal
  const [udf18, setudf18] = useState(null);
  const [udf19, setudf19] = useState(null);
  const [udf20, setudf20] = useState(null);
  const [channelId, setchannelId] = useState(null);
  const [programId, setprogramId] = useState(null);
  const [mcc, setmcc] = useState(null);
  const [amountType, setamountType] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Open the payment gateway modal
      document.getElementById('paymentForm').submit();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // const handleSubmit = (e) => {
  //   setIsOpen(true);
  //   e.preventDefault()
  //   const btn = document.getElementById('renderSabPaisa');
  //   btn.click();
  //   setTimeout(() => {
  //     e.target.submit(); // Submit the form
  //   }, 2000);
  // }

  return (
    <div className='container'>
    <span class="loader"></span>
     <form id="paymentForm" className='xyz'  method="post">
      </form>
      <SabpaisaPaymentGateway clientCode={clientCode} transUserName={transUserName} transUserPassword={transUserPassword} authkey={authkey} authiv={authiv} payerName={payerName} payerEmail={payerEmail} payerMobile={payerMobile} clientTxnId={clientTxnId} amount={amount} payerAddress={payerAddress} callbackUrl={callbackUrl} isOpen={isOpen} />


    </div>


  )
}

export default App