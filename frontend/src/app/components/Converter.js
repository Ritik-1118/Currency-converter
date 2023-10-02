'use client'
import axios from "axios";
import { useEffect, useState } from "react";



const Converter = () => {
    const [currencies,setCurrencies] = useState([]);
    const [fromCurrency,setFromCurrency] = useState('USD');
    const [toCurrency,setToCurrency] = useState('USD');
    const [amount,setAmount] = useState('');
    const [convertedResult,setConvertedResult] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/currencies/')
        .then(response => setCurrencies(response.data))
        .catch(error => console.log('Error fatching currencies: ',error))
    },[]);

    const convertCurrency = () => {
        console.log('button clicked');
        axios.get(`http://localhost:8000/api/convert/${fromCurrency}/${toCurrency}/${amount}/`)
        .then(response => setConvertedResult(response.data.converted_amount))
        .catch(error => console.log('error converting currency: ',error))
    }

    return (
        <div className="bg-blue-900 mx-auto max-w-md p-8 mt-16 border rounded-lg shadow-lg">
    <h1 className="text-4xl text-blue-600 mb-5 text-center">Currency Converter</h1>
    <hr />

    <form className="mt-6">
        <div className="flex">
            <div className="mr-4">
                <label htmlFor="from_currency" className="text-blue-200 text-3xl">From: </label>
                <select
                    name="from_currency"
                    id="from_currency"
                    className="form-select mt-2 bg-gray-700 border rounded-lg shadow-lg"
                    onChange={(e) => setFromCurrency(e.target.value)}
                    value={fromCurrency}
                >
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.code}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mx-4">
                <label htmlFor="to_currency" className="text-blue-200 text-3xl">To: </label>
                <select
                    name="to_currency"
                    id="to_currency"
                    className="form-select mt-2 bg-gray-700 border rounded-lg shadow-lg"
                    onChange={(e) => setToCurrency(e.target.value)}
                    value={toCurrency}
                >
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.code}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <div className="mt-4">
            <label htmlFor="amount" className="text-blue-200 text-3xl">Amount: </label>
            <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Amount to convert"
                className="form-input mt-2 bg-gray-700 border rounded-lg shadow-lg"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
            />
        </div>

        <button
            type="button"
            name="btn"
            id="btn"
            onClick={convertCurrency}
            className="bg-blue-600 mt-10 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800"
        >
            Convert
        </button>
    </form>

    <div className="mt-8">
        
        {convertedResult && (
            <p className="text-2xl">
                <span className="text-3xl text-white">Result : </span>{amount} {fromCurrency} = {convertedResult} {toCurrency}
            </p>
        )}
    </div>
</div>

    );
};
export default Converter;