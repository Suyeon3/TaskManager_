import axios from 'axios';

export default function Login() {

    const handleLogin = async () => {
    try {
        const response = await axios.get('http://localhost:3002/login');
        console.log(response.data.url);
        window.location.href = response.data.url;
    } catch (error) {
        console.error('로그인 요청 중 에러 발생', error);
    }
    };

    return (
        <div>
            <h1>LogIn</h1>
            <button onClick={handleLogin}>구글 로그인</button>
        </div>
    )
}