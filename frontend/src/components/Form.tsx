import { useState } from 'react';

const Form = () => {
    //ユーザが入力した都市名を保管する場所をcity
    // データを操作する仕組みがsetCity
    const [city, setCity] = useState<string>("");
    // 関数宣言、アロー関数を使用している
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no")
            .then(res => res.json())
            //dataが分からない
            .then(data => console.log(data))
    }
    return (
        <form>
            {/* eはイベントパラメーターでinputに関する様々な情報が格納されている */}
            {/* eをsetCityへと=>を使って私、setCity内でValueへアクセスする */}
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            <button type="submit" onClick={getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;