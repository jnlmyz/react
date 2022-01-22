import { useState } from 'react';

"http://api.weatherapi.com/v1/current.json?key=zzzz&q=London&aqi=no"

const Form = () => {
    //ユーザが入力した都市名を保管する場所をcity
    // データを操作する仕組みがsetCity
    const [city, setCity] = useState<string>("");
    return (
        <form>
            {/* eはイベントパラメーターでinputに関する様々な情報が格納されている */}
            {/* eをsetCityへと=>を使って私、setCity内でValueへアクセスする */}
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            {city}
            {/* {}でstateを呼び込む */}
            {/* 追加 */}
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;