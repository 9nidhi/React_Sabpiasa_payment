import React, { useState, useEffect } from 'react'
import SabpaisaPaymentGateway from './SabpaisaPaymentGateway';

const App = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [payerName, setPayerName] = useState("payername");
  const [payerEmail, setPayerEmail] = useState("test@email.com");
  const [payerMobile, setPayerMobile] = useState("1234567890");
  const [amount, setAmount] = useState(8625);
  const [clientCode, setClientCode] = useState("XXXXXXXX");  // Please use the credentials shared by your Account Manager  If not, please contact your Account Manager
  const [payerAddress, setPayerAddress] = useState("Bangalore");
  const [transUserName, setTransUserName] = useState("XXXXXXXX"); // Please use the credentials shared by your Account Manager  If not, please contact your Account Manage
  const [clientTxnId, setclientTxnId] = useState("3828972293337345");
  const [transUserPassword, setTransUserPassword] = useState("XXXXXXXX");  // Please use the credentials shared by your Account Manager  If not, please contact your Account Manage
  const [authkey, setAuthkey] = useState("XXXXXXXX");  // Please use the credentials shared by your Account Manager  If not, please contact your Account Manage
  const [authiv, setAuthiv] = useState("XXXXXXXX");    // Please use the credentials shared by your Account Manager  If not, please contact your Account Manage
  const [callbackUrl, setCallbackUrl] = useState("http://localhost:3000/result");
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

  const handleSubmit = (e) => {
    setIsOpen(true);
    e.preventDefault()
    const btn = document.getElementById('renderSabPaisa');
    btn.click();
  }


  return (
    <div className="container-fluid">
      <form className='xyz' onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="row">
            <div className="text-center mt-3">
              <h2 className='text-success'>SabPaisa Payment</h2>
            </div>
          </div>
          <div id='renderSabPaisa'></div>
          <div className="row mt-3">
            <div className="form-group"></div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Name : </label> <br />
              <input type="text" placeholder='Name :' value={payerName} onChange={(e) => setPayerName(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Email : </label> <br />
              <input type="text" placeholder='Email :' value={payerEmail} onChange={(e) => setPayerEmail(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Phone : </label> <br />
              <input type="text" placeholder='Phone :' value={payerMobile} onChange={(e) => setPayerMobile(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Amount : </label> <br />
              <input type="text" placeholder='Amount :' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Client Code : </label> <br />
              <input type="text" placeholder='Client Code :' value={clientCode} onChange={(e) => setClientCode(e.target.value)} />
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="" > Trnx User Name : </label> <br />
              <input type="text" placeholder='Trnx User Name :' value={transUserName} onChange={(e) => setTransUserName(e.target.value)} />
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="" > Trnx User Password : </label> <br />
              <input type="text" placeholder='Trnx User Password :' value={transUserPassword} onChange={(e) => setTransUserPassword(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Auth Key : </label> <br />
              <input type="text" placeholder='Auth Key :' value={authkey} onChange={(e) => setAuthkey(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Auth IV : </label> <br />
              <input type="text" placeholder='Auth IV :' value={authiv} onChange={(e) => setAuthiv(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Client Trnx Id : </label> <br />
              <input type="text" placeholder='Client Trnx Id :' value={clientTxnId} onChange={(e) => setclientTxnId(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Address : </label> <br />
              <input type="text" placeholder='Address :' value={payerAddress} onChange={(e) => setPayerAddress(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Callback Url : </label> <br />
              <input type="text" placeholder='Callback Url :' value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Data : </label> <br />
              <input type="text" placeholder='Data :' value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Udf1 : </label> <br />
              <input type="text" placeholder='Udf 1 :' value={udf1} onChange={(e) => setudf1(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Udf 2 : </label> <br />
              <input type="text" placeholder='Udf 2 :' value={udf2} onChange={(e) => setudf2(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Udf 3 : </label> <br />
              <input type="text" placeholder='Udf 3 :' value={udf3} onChange={(e) => setudf3(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Channel ID : </label> <br />
              <input type="text" placeholder='Channel Id :' value={channelId} onChange={(e) => setchannelId(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Program ID : </label> <br />
              <input type="text" placeholder='Program Id :' value={programId} onChange={(e) => setprogramId(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > MCC : </label> <br />
              <input type="text" placeholder='MCC :' value={mcc} onChange={(e) => setmcc(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Account Type : </label> <br />
              <input type="text" placeholder='Account Type :' value={amountType} onChange={(e) => setamountType(e.target.value)} />
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div>
              <button type="submit" value="Submit" className="xyz btn btn-success mb-5">Proceed To Pay</button>
            </div>
          </div>
        </div>
        <SabpaisaPaymentGateway payerName={payerName} payerEmail={payerEmail} payerMobile={payerMobile} isOpen={isOpen} />
      </form>

    </div>
  )
}

export default App